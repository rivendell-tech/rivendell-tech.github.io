const express = require('express')
const cors = require('cors')
const axios = require('axios')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Helper function to set expiration date
const setExpirationDate = (res, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  res.setHeader('Expires', expirationDate.toUTCString());
}

// Cache control middleware
const cacheControl = (req, res, next) => {
  // Cache static assets for 1 year
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
  setExpirationDate(res, 365); // 1 year
  next()
}

// Serve static files from the dist directory with cache headers
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // Don't cache HTML files
      res.setHeader('Cache-Control', 'no-cache')
      res.setHeader('Expires', '0')
    } else if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
      // Cache JS and CSS files for 1 year
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      setExpirationDate(res, 365); // 1 year
    } else if (filePath.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/)) {
      // Cache images for 1 year
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      setExpirationDate(res, 365); // 1 year
    }
  }
}))

const LINKEDIN_API_URL = 'https://api.linkedin.com/v2'

// LinkedIn OAuth endpoints
app.get('/api/linkedin/auth', (req, res) => {
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.VITE_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.VITE_LINKEDIN_REDIRECT_URI}&scope=r_liteprofile r_emailaddress w_member_social`
  res.json({ url: authUrl })
})

// Callback endpoint
app.get('/api/linkedin/callback', async (req, res) => {
  const { code } = req.query
  try {
    const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
      grant_type: 'authorization_code',
      code,
      client_id: process.env.VITE_LINKEDIN_CLIENT_ID,
      client_secret: process.env.VITE_LINKEDIN_CLIENT_SECRET,
      redirect_uri: process.env.VITE_LINKEDIN_REDIRECT_URI
    })

    const { access_token } = tokenResponse.data
    // Store the access token securely (e.g., in a database)
    // For this example, we'll just return it
    res.json({ access_token })
  } catch (error) {
    res.status(500).json({ error: 'Failed to get access token' })
  }
})

// Get LinkedIn posts
app.get('/api/linkedin/posts', async (req, res) => {
  try {
    // In a real app, you would get the access token from your database
    const access_token = req.headers.authorization?.split(' ')[1]
    if (!access_token) {
      return res.status(401).json({ error: 'No access token provided' })
    }

    const response = await axios.get(`${LINKEDIN_API_URL}/ugcPosts`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })

    const posts = response.data.elements.map(post => ({
      id: post.id,
      title: post.specificContent['com.linkedin.ugc.ShareContent'].title,
      preview: post.specificContent['com.linkedin.ugc.ShareContent'].description,
      date: post.created.time,
      url: post.specificContent['com.linkedin.ugc.ShareContent'].landingPage?.url
    }))

    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 