import { useEffect } from 'react'

interface MarketTickerProps {
  darkMode: boolean
}

const MarketTicker = ({ darkMode }: MarketTickerProps) => {
  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "CAPITALCOM:US500", "title": "S&P 500" },
        { "proName": "CAPITALCOM:US100", "title": "NASDAQ" },
        { "proName": "CAPITALCOM:US30", "title": "DJIA" },
        { "proName": "CAPITALCOM:DXY", "title": "U.S. Dollar Currency Index" },
        { "proName": "CAPITALCOM:VIX", "title": "Volatility Index" }
      ],
      "showSymbolLogo": true,
      "colorTheme": "light",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    })
    document.getElementById('tradingview-widget')?.appendChild(script)

    return () => {
      document.getElementById('tradingview-widget')?.removeChild(script)
    }
  }, [])

  return (
    <div className="tradingview-widget-container" data-testid="tradingview-widget-container">
      <div id="tradingview-widget" className="tradingview-widget-container__widget" />
    </div>
  )
}

export default MarketTicker 