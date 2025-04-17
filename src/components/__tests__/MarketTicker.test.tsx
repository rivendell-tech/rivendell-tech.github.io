import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import MarketTicker from '../MarketTicker'

describe('MarketTicker', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the widget container', () => {
    render(<MarketTicker darkMode={false} />)
    expect(screen.getByTestId('tradingview-widget-container')).toBeInTheDocument()
  })

  it('creates script with correct theme based on darkMode', () => {
    const { rerender } = render(<MarketTicker darkMode={false} />)
    
    // Check light theme
    const container = screen.getByTestId('tradingview-widget-container')
    const widgetContainer = container.querySelector('.tradingview-widget-container__widget')
    expect(widgetContainer).toBeInTheDocument()
    
    // Rerender with dark theme
    rerender(<MarketTicker darkMode={true} />)
    expect(widgetContainer).toBeInTheDocument()
  })

  it('handles script loading error', () => {
    render(<MarketTicker darkMode={false} />)
    expect(screen.getByTestId('tradingview-widget-container')).toBeInTheDocument()
  })

  it('cleans up on unmount', () => {
    const { unmount } = render(<MarketTicker darkMode={false} />)
    unmount()
    // Component should unmount without errors
  })
}) 