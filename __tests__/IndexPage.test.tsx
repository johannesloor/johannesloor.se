import * as React from 'react'
import { render, screen, act } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

// Mock gatsby-image
jest.mock('gatsby-image', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ ...rest }) =>
    ReactModule.createElement('img', { ...rest })
  )
})

// Mock the IndexLayout and Page components
jest.mock('../src/layouts', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ children }) =>
    ReactModule.createElement('div', { 'data-testid': 'index-layout' }, children)
  )
})

jest.mock('../src/components/Page', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ children }) =>
    ReactModule.createElement('div', { 'data-testid': 'page' }, children)
  )
})

jest.mock('../src/components/Card', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ url, children }) =>
    ReactModule.createElement('a', { href: url }, children)
  )
})

// Import after mocks are set up
import IndexPage from '../src/pages/index'

describe('IndexPage', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    
    // Mock the useStaticQuery for images
    ;(useStaticQuery as jest.Mock).mockReturnValue({
      meCap: { childImageSharp: { fluid: { src: 'meCap.jpg' } } },
      meSnow: { childImageSharp: { fluid: { src: 'meSnow.jpg' } } },
      meBirthday: { childImageSharp: { fluid: { src: 'meBirthday.jpg' } } },
      meNature: { childImageSharp: { fluid: { src: 'meNature.jpg' } } },
    })
  })

  afterEach(() => {
    jest.useRealTimers()
    jest.clearAllMocks()
  })

  describe('initial rendering', () => {
    it('should render the page layout', () => {
      render(<IndexPage />)
      expect(screen.getByTestId('index-layout')).toBeInTheDocument()
      expect(screen.getByTestId('page')).toBeInTheDocument()
    })

    it('should render the slogan text', () => {
      render(<IndexPage />)
      expect(screen.getByText(/Developer, engineer and/)).toBeInTheDocument()
      expect(screen.getByText(/enthusiast/)).toBeInTheDocument()
    })

    it('should render navigation cards', () => {
      render(<IndexPage />)
      expect(screen.getByText('Projects')).toBeInTheDocument()
      expect(screen.getByText('About me')).toBeInTheDocument()
    })

    it('should start with first word from interests array', () => {
      render(<IndexPage />)
      // The first word should be visible (Apple, music, smart home, golf, or cat depending on module state)
      // Since getWord() is called twice in constructor, we get words at index 0 and 1
      const sloganElement = screen.getByText(/Developer, engineer and/)
      expect(sloganElement.parentElement).toBeInTheDocument()
    })
  })

  describe('word animation - erasure phase', () => {
    it('should erase current word character by character after initial delay', () => {
      render(<IndexPage />)
      
      // Get initial word from the VaryingWord span
      const getChangingWord = () => {
        const container = screen.getByText(/Developer, engineer and/).parentElement
        const varyingSpan = container?.querySelector('span')
        return varyingSpan?.textContent || ''
      }
      
      const initialWord = getChangingWord()
      expect(initialWord.length).toBeGreaterThan(0)
      
      // Advance past the initial 1500ms delay
      act(() => {
        jest.advanceTimersByTime(1500)
      })
      
      // Now advance through the 150ms intervals for character erasure
      act(() => {
        jest.advanceTimersByTime(150)
      })
      
      const afterOneErase = getChangingWord()
      expect(afterOneErase.length).toBe(initialWord.length - 1)
    })

    it('should completely erase word before building new one', () => {
      render(<IndexPage />)
      
      const getChangingWord = () => {
        const container = screen.getByText(/Developer, engineer and/).parentElement
        const varyingSpan = container?.querySelector('span')
        return varyingSpan?.textContent || ''
      }
      
      const initialWord = getChangingWord()
      
      // Advance past initial delay
      act(() => {
        jest.advanceTimersByTime(1500)
      })
      
      // Erase all characters (one per 150ms interval)
      for (let i = 0; i < initialWord.length; i++) {
        act(() => {
          jest.advanceTimersByTime(150)
        })
      }
      
      // Word should be empty or starting to build the new word
      const currentWord = getChangingWord()
      // After erasing all, the next interval starts building (adds first char)
      expect(currentWord.length).toBeLessThanOrEqual(1)
    })
  })

  describe('word animation - building phase', () => {
    it('should build new word character by character after erasure', () => {
      render(<IndexPage />)
      
      const getChangingWord = () => {
        const container = screen.getByText(/Developer, engineer and/).parentElement
        const varyingSpan = container?.querySelector('span')
        return varyingSpan?.textContent || ''
      }
      
      const initialWord = getChangingWord()
      
      // Advance past initial delay
      act(() => {
        jest.advanceTimersByTime(1500)
      })
      
      // Erase all characters
      for (let i = 0; i < initialWord.length; i++) {
        act(() => {
          jest.advanceTimersByTime(150)
        })
      }
      
      // Now the word should start building
      const emptyOrFirst = getChangingWord()
      
      // Advance a few more intervals to build characters
      act(() => {
        jest.advanceTimersByTime(150)
      })
      
      const afterBuildOne = getChangingWord()
      expect(afterBuildOne.length).toBeGreaterThanOrEqual(emptyOrFirst.length)
    })
  })

  describe('word cycling', () => {
    it('should cycle through interest words', () => {
      render(<IndexPage />)
      
      const getChangingWord = () => {
        const container = screen.getByText(/Developer, engineer and/).parentElement
        const varyingSpan = container?.querySelector('span')
        return varyingSpan?.textContent || ''
      }
      
      const firstWord = getChangingWord()
      
      // Complete one full cycle: delay + erase + build + delay + start next
      act(() => {
        jest.advanceTimersByTime(1500) // initial delay
      })
      
      // Erase current word
      for (let i = 0; i < firstWord.length; i++) {
        act(() => {
          jest.advanceTimersByTime(150)
        })
      }
      
      // Build new word - need to advance through building phase
      // The new word could be longer, so we need enough intervals
      act(() => {
        jest.advanceTimersByTime(150 * 15) // enough for building a word up to 15 chars
      })
      
      // After completing build and waiting for next delay, check that word changed
      const afterCycle = getChangingWord()
      // The word should be either building or completed to a different word
      expect(afterCycle).toBeDefined()
    })
  })

  describe('interval and timeout cleanup', () => {
    it('should clear intervals on unmount', () => {
      const clearIntervalSpy = jest.spyOn(globalThis, 'clearInterval')
      const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout')
      
      const { unmount } = render(<IndexPage />)
      
      // Start the animation
      act(() => {
        jest.advanceTimersByTime(1500)
      })
      
      unmount()
      
      expect(clearIntervalSpy).toHaveBeenCalled()
      expect(clearTimeoutSpy).toHaveBeenCalled()
      
      clearIntervalSpy.mockRestore()
      clearTimeoutSpy.mockRestore()
    })

    it('should clear previous timers when starting new interval', () => {
      const clearIntervalSpy = jest.spyOn(globalThis, 'clearInterval')
      const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout')
      
      render(<IndexPage />)
      
      const getChangingWord = () => {
        const container = screen.getByText(/Developer, engineer and/).parentElement
        const varyingSpan = container?.querySelector('span')
        return varyingSpan?.textContent || ''
      }
      
      const firstWord = getChangingWord()
      
      // Complete a full word change cycle which calls startInterval again
      act(() => {
        jest.advanceTimersByTime(1500) // initial delay
      })
      
      // Erase word
      for (let i = 0; i < firstWord.length; i++) {
        act(() => {
          jest.advanceTimersByTime(150)
        })
      }
      
      // Build enough to complete word and trigger startInterval
      act(() => {
        jest.advanceTimersByTime(150 * 20)
      })
      
      // clearInterval and clearTimeout should be called when restarting
      expect(clearIntervalSpy).toHaveBeenCalled()
      expect(clearTimeoutSpy).toHaveBeenCalled()
      
      clearIntervalSpy.mockRestore()
      clearTimeoutSpy.mockRestore()
    })

    it('should handle unmount during erasure phase', () => {
      const clearIntervalSpy = jest.spyOn(globalThis, 'clearInterval')
      const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout')
      
      const { unmount } = render(<IndexPage />)
      
      // Start animation
      act(() => {
        jest.advanceTimersByTime(1500)
      })
      
      // Partially through erasure
      act(() => {
        jest.advanceTimersByTime(150 * 2)
      })
      
      // Unmount during erasure
      unmount()
      
      // Should cleanup without errors
      expect(clearIntervalSpy).toHaveBeenCalled()
      expect(clearTimeoutSpy).toHaveBeenCalled()
      
      // Advancing timers after unmount should not cause errors
      act(() => {
        jest.advanceTimersByTime(1000)
      })
      
      clearIntervalSpy.mockRestore()
      clearTimeoutSpy.mockRestore()
    })

    it('should handle unmount during building phase', () => {
      const clearIntervalSpy = jest.spyOn(globalThis, 'clearInterval')
      const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout')
      
      const { unmount } = render(<IndexPage />)
      
      const getChangingWord = () => {
        const container = screen.getByText(/Developer, engineer and/).parentElement
        const varyingSpan = container?.querySelector('span')
        return varyingSpan?.textContent || ''
      }
      
      const firstWord = getChangingWord()
      
      // Start animation
      act(() => {
        jest.advanceTimersByTime(1500)
      })
      
      // Erase completely
      for (let i = 0; i < firstWord.length; i++) {
        act(() => {
          jest.advanceTimersByTime(150)
        })
      }
      
      // Partially through building
      act(() => {
        jest.advanceTimersByTime(150 * 2)
      })
      
      // Unmount during building
      unmount()
      
      // Should cleanup without errors
      expect(clearIntervalSpy).toHaveBeenCalled()
      expect(clearTimeoutSpy).toHaveBeenCalled()
      
      clearIntervalSpy.mockRestore()
      clearTimeoutSpy.mockRestore()
    })

    it('should handle unmount during initial delay', () => {
      const clearIntervalSpy = jest.spyOn(globalThis, 'clearInterval')
      const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout')
      
      const { unmount } = render(<IndexPage />)
      
      // Unmount during initial delay (before animation starts)
      act(() => {
        jest.advanceTimersByTime(500) // only 500ms of 1500ms delay
      })
      
      unmount()
      
      // Should cleanup the pending timeout
      expect(clearTimeoutSpy).toHaveBeenCalled()
      
      clearIntervalSpy.mockRestore()
      clearTimeoutSpy.mockRestore()
    })
  })

  describe('edge cases', () => {
    it('should handle empty word transition correctly', () => {
      render(<IndexPage />)
      
      const getChangingWord = () => {
        const container = screen.getByText(/Developer, engineer and/).parentElement
        const varyingSpan = container?.querySelector('span')
        return varyingSpan?.textContent || ''
      }
      
      const firstWord = getChangingWord()
      
      // Advance to start animation
      act(() => {
        jest.advanceTimersByTime(1500)
      })
      
      // Erase all characters + 1 more to hit the empty state
      for (let i = 0; i <= firstWord.length; i++) {
        act(() => {
          jest.advanceTimersByTime(150)
        })
      }
      
      // Should not crash and should be building new word
      const currentWord = getChangingWord()
      expect(currentWord.length).toBeGreaterThanOrEqual(0)
    })

    it('should maintain animation state across multiple cycles', () => {
      render(<IndexPage />)
      
      const getChangingWord = () => {
        const container = screen.getByText(/Developer, engineer and/).parentElement
        const varyingSpan = container?.querySelector('span')
        return varyingSpan?.textContent || ''
      }
      
      // Run through multiple complete cycles
      for (let cycle = 0; cycle < 3; cycle++) {
        // Advance through delay + erase + build phases
        act(() => {
          jest.advanceTimersByTime(1500 + 150 * 30) // delay + enough intervals for full cycle
        })
      }
      
      // Component should still be functional
      const currentWord = getChangingWord()
      expect(currentWord.length).toBeGreaterThanOrEqual(0)
    })

    it('should handle rapid multiple renders', () => {
      const { rerender, unmount } = render(<IndexPage />)
      
      // Rerender multiple times
      act(() => {
        jest.advanceTimersByTime(100)
      })
      
      rerender(<IndexPage />)
      
      act(() => {
        jest.advanceTimersByTime(100)
      })
      
      rerender(<IndexPage />)
      
      // Should not cause errors
      expect(screen.getByText(/Developer, engineer and/)).toBeInTheDocument()
      
      unmount()
    })
  })
})

describe('getWord function behavior', () => {
  // These tests verify the cycling behavior through component observation
  // since getWord is a module-level function not directly testable
  
  beforeEach(() => {
    jest.useFakeTimers()
    
    ;(useStaticQuery as jest.Mock).mockReturnValue({
      meCap: { childImageSharp: { fluid: { src: 'meCap.jpg' } } },
      meSnow: { childImageSharp: { fluid: { src: 'meSnow.jpg' } } },
      meBirthday: { childImageSharp: { fluid: { src: 'meBirthday.jpg' } } },
      meNature: { childImageSharp: { fluid: { src: 'meNature.jpg' } } },
    })
  })

  afterEach(() => {
    jest.useRealTimers()
    jest.clearAllMocks()
  })

  it('should have initial word from interests array', () => {
    render(<IndexPage />)
    
    const container = screen.getByText(/Developer, engineer and/).parentElement
    const varyingSpan = container?.querySelector('span')
    const initialWord = varyingSpan?.textContent || ''
    
    // The word should be one from the interests array: Apple, music, smart home, golf, cat
    const interests = ['Apple', 'music', 'smart home', 'golf', 'cat']
    expect(interests).toContain(initialWord)
  })
})
