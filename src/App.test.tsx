import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import App from './App'

// Mock the components that are not needed for this test
vi.mock('./components/Hero', () => ({
  default: () => <div data-testid="hero">Hero Component</div>
}))

vi.mock('./components/MarketTicker', () => ({
  default: () => <div data-testid="market-ticker">Market Ticker Component</div>
}))

vi.mock('./components/PodcastWidget', () => ({
  default: () => <div data-testid="podcast-widget">Podcast Widget Component</div>
}))

vi.mock('./components/SocialLinks', () => ({
  default: () => <div data-testid="social-links">Social Links Component</div>
}))

vi.mock('./components/Mission', () => ({
  default: () => <div data-testid="mission">Mission Component</div>
}))

vi.mock('./components/QuoteBanner', () => ({
  default: () => <div data-testid="quote-banner">Quote Banner Component</div>
}))

vi.mock('./components/Updates', () => ({
  default: () => <div data-testid="updates">Updates Component</div>
}))

vi.mock('./components/About', () => ({
  default: () => <div data-testid="about">About Component</div>
}))

vi.mock('./components/BrandLogos', () => ({
  default: () => <div data-testid="brand-logos">Brand Logos Component</div>
}))

describe('App', () => {
  it('renders all components', () => {
    render(<App />)
    
    // Check if all components are rendered
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('market-ticker')).toBeInTheDocument()
    expect(screen.getByTestId('podcast-widget')).toBeInTheDocument()
    expect(screen.getByTestId('social-links')).toBeInTheDocument()
    expect(screen.getByTestId('mission')).toBeInTheDocument()
    expect(screen.getByTestId('quote-banner')).toBeInTheDocument()
    expect(screen.getByTestId('updates')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('brand-logos')).toBeInTheDocument()
  })
  
  it('toggles dark mode when the theme toggle button is clicked', () => {
    render(<App />)
    
    // Find the theme toggle button
    const themeToggleButton = screen.getByRole('button', { name: /toggle theme/i })
    
    // Initially, dark mode should be false
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    
    // Click the theme toggle button
    fireEvent.click(themeToggleButton)
    
    // Now, dark mode should be true
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    
    // Click again to toggle back to light mode
    fireEvent.click(themeToggleButton)
    
    // Now, dark mode should be false again
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
}) 