import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

// Mock gatsby-image/withIEPolyfill
jest.mock('gatsby-image/withIEPolyfill', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ fluid, style, ...rest }) =>
    ReactModule.createElement('img', {
      'data-testid': 'project-image',
      'data-src': fluid?.src,
      'data-aspect-ratio': fluid?.aspectRatio,
      style,
      ...rest,
    })
  )
})

// Import after mocks are set up
import ProjectImages from '../src/components/ProjectImages'

// Helper to create mock fluid image data
const createMockFluid = (src: string, aspectRatio: number) => ({
  src,
  aspectRatio,
  base64: 'data:image/png;base64,mock',
  srcSet: `${src} 100w`,
  sizes: '(max-width: 100px) 100vw, 100px',
})

describe('ProjectImages', () => {
  // Define the expected image order matching the component
  const imageKeys = [
    'svtUI',
    'halfway',
    'myWebsite',
    'Osqledaren',
    'ofr',
    'sgc',
    'pepper',
    'thesis',
    'challengeMe',
    'evacuateMe',
  ]

  const createMockData = (aspectRatios: Record<string, number> = {}) => {
    const data: Record<string, { childImageSharp: { fluid: ReturnType<typeof createMockFluid> } }> = {}
    imageKeys.forEach((key) => {
      data[key] = {
        childImageSharp: {
          fluid: createMockFluid(`${key}.png`, aspectRatios[key] ?? 1.5),
        },
      }
    })
    return data
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('image mapping', () => {
    it('should render correct image for pictureNr 0 (svtUI)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={0} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'svtUI.png')
    })

    it('should render correct image for pictureNr 1 (halfway)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={1} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'halfway.png')
    })

    it('should render correct image for pictureNr 2 (myWebsite)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={2} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'myWebsite.png')
    })

    it('should render correct image for pictureNr 3 (Osqledaren)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={3} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'Osqledaren.png')
    })

    it('should render correct image for pictureNr 4 (ofr)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={4} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'ofr.png')
    })

    it('should render correct image for pictureNr 5 (sgc)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={5} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'sgc.png')
    })

    it('should render correct image for pictureNr 6 (pepper)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={6} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'pepper.png')
    })

    it('should render correct image for pictureNr 7 (thesis)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={7} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'thesis.png')
    })

    it('should render correct image for pictureNr 8 (challengeMe)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={8} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'challengeMe.png')
    })

    it('should render correct image for pictureNr 9 (evacuateMe)', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={9} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'evacuateMe.png')
    })
  })

  describe('aspect ratio styling', () => {
    it('should set width to 100% when aspect ratio is greater than 1 (landscape)', () => {
      const mockData = createMockData({ svtUI: 1.5 })
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={0} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveStyle({ width: '100%' })
    })

    it('should set width to 65% when aspect ratio is less than 1 (portrait)', () => {
      const mockData = createMockData({ svtUI: 0.75 })
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={0} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveStyle({ width: '65%' })
    })

    it('should set width to 65% when aspect ratio is exactly 1 (square)', () => {
      const mockData = createMockData({ svtUI: 1.0 })
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={0} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveStyle({ width: '65%' })
    })

    it('should handle aspect ratio at boundary (1.01)', () => {
      const mockData = createMockData({ halfway: 1.01 })
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={1} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveStyle({ width: '100%' })
    })

    it('should handle aspect ratio at boundary (0.99)', () => {
      const mockData = createMockData({ halfway: 0.99 })
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={1} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveStyle({ width: '65%' })
    })

    it('should handle very wide aspect ratio', () => {
      const mockData = createMockData({ svtUI: 3.0 })
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={0} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveStyle({ width: '100%' })
    })

    it('should handle very tall aspect ratio', () => {
      const mockData = createMockData({ svtUI: 0.3 })
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={0} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveStyle({ width: '65%' })
    })
  })

  describe('GraphQL data structure', () => {
    it('should correctly access nested childImageSharp.fluid structure', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={0} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-aspect-ratio', '1.5')
    })

    it('should pass fluid data to the image component', () => {
      const mockData = createMockData({ halfway: 2.0 })
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={1} />)

      const img = screen.getByTestId('project-image')
      expect(img).toHaveAttribute('data-src', 'halfway.png')
      expect(img).toHaveAttribute('data-aspect-ratio', '2')
    })

    it('should render all 10 images correctly when switching pictureNr', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      // Test each pictureNr renders the correct image
      for (let i = 0; i < 10; i++) {
        const { unmount } = render(<ProjectImages pictureNr={i} />)
        const img = screen.getByTestId('project-image')
        expect(img).toHaveAttribute('data-src', `${imageKeys[i]}.png`)
        unmount()
      }
    })
  })

  describe('container rendering', () => {
    it('should render image within a container', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      render(<ProjectImages pictureNr={0} />)

      // Should have a container div wrapping the image
      const img = screen.getByTestId('project-image')
      expect(img.parentElement).toBeInTheDocument()
    })
  })

  describe('edge cases', () => {
    it('should handle undefined fluid gracefully when accessing out-of-bounds', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      // This will try to access images[10] which is undefined
      // The component will throw since it tries to access aspectRatio on undefined
      expect(() => {
        render(<ProjectImages pictureNr={10} />)
      }).toThrow()
    })

    it('should handle negative pictureNr', () => {
      const mockData = createMockData()
      ;(useStaticQuery as jest.Mock).mockReturnValue(mockData)

      // Negative index will try to access undefined
      expect(() => {
        render(<ProjectImages pictureNr={-1} />)
      }).toThrow()
    })
  })
})
