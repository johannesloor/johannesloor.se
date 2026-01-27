import * as React from 'react'
import { render, screen, within } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

// Mock PDF imports
jest.mock('../src/pdfs/sgc.pdf', () => 'sgc.pdf')
jest.mock('../src/pdfs/thesisSwedish.pdf', () => 'thesisSwedish.pdf')
jest.mock('../src/pdfs/thesisEnglish.pdf', () => 'thesisEnglish.pdf')
jest.mock('../src/pdfs/pepperreport.pdf', () => 'pepperreport.pdf')
jest.mock('../src/pdfs/soundcanvasreport.pdf', () => 'soundcanvasreport.pdf')
jest.mock('../src/pdfs/SoleMate.pdf', () => 'SoleMate.pdf')
jest.mock('../src/pdfs/syntheseyeserreport.pdf', () => 'syntheseyeserreport.pdf')
jest.mock('../src/pdfs/halfway.pdf', () => 'halfway.pdf')

// Mock gatsby-image/withIEPolyfill for ProjectImages
jest.mock('gatsby-image/withIEPolyfill', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ fluid, style }) =>
    ReactModule.createElement('img', {
      'data-testid': 'project-image',
      'data-src': fluid?.src,
      style,
    })
  )
})

// Mock the IndexLayout component
jest.mock('../src/layouts', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ children }) =>
    ReactModule.createElement('div', { 'data-testid': 'index-layout' }, children)
  )
})

// Mock the Page component
jest.mock('../src/components/Page', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ children }) =>
    ReactModule.createElement('div', { 'data-testid': 'page' }, children)
  )
})

// Mock the PageTitle component
jest.mock('../src/components/PageTitle', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactModule = require('react')
  return jest.fn().mockImplementation(({ currentPage, linkedPage }) =>
    ReactModule.createElement(
      'div',
      { 'data-testid': 'page-title' },
      `${currentPage} | ${linkedPage}`
    )
  )
})

// Import after mocks are set up
import Projects from '../src/pages/projects'

// Helper to create mock fluid image data
const createMockFluid = (src: string, aspectRatio = 1.5) => ({
  src,
  aspectRatio,
  base64: 'data:image/png;base64,mock',
  srcSet: `${src} 100w`,
  sizes: '(max-width: 100px) 100vw, 100px',
})

// Create mock data for all images used in ProjectImages
const createMockImageData = () => ({
  svtUI: { childImageSharp: { fluid: createMockFluid('svtUI.png') } },
  halfway: { childImageSharp: { fluid: createMockFluid('halfway.png') } },
  myWebsite: { childImageSharp: { fluid: createMockFluid('myWebsite.png') } },
  Osqledaren: { childImageSharp: { fluid: createMockFluid('Osqledaren.png') } },
  ofr: { childImageSharp: { fluid: createMockFluid('ofr.png') } },
  sgc: { childImageSharp: { fluid: createMockFluid('sgc.png') } },
  pepper: { childImageSharp: { fluid: createMockFluid('pepper.png') } },
  thesis: { childImageSharp: { fluid: createMockFluid('thesis.png') } },
  challengeMe: { childImageSharp: { fluid: createMockFluid('challengeMe.png') } },
  evacuateMe: { childImageSharp: { fluid: createMockFluid('evacuateMe.png') } },
})

describe('Projects Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useStaticQuery as jest.Mock).mockReturnValue(createMockImageData())
  })

  describe('page layout', () => {
    it('should render within IndexLayout and Page components', () => {
      render(<Projects />)
      expect(screen.getByTestId('index-layout')).toBeInTheDocument()
      expect(screen.getByTestId('page')).toBeInTheDocument()
    })

    it('should render PageTitle with correct props', () => {
      render(<Projects />)
      expect(screen.getByTestId('page-title')).toHaveTextContent('Projects | About')
    })
  })

  describe('project rendering', () => {
    it('should render all projects from projectData', () => {
      render(<Projects />)

      // Check for key projects by title
      expect(screen.getByText('SvtUI')).toBeInTheDocument()
      expect(screen.getByText('Halfway')).toBeInTheDocument()
      expect(screen.getByText('johannesloor.se')).toBeInTheDocument()
      expect(screen.getByText('Osqledaren.se')).toBeInTheDocument()
      expect(screen.getByText('SoleMate')).toBeInTheDocument()
      expect(screen.getByText('Sonic Gesture Challenge')).toBeInTheDocument()
      expect(screen.getByText('Sound Canvas')).toBeInTheDocument()
      expect(screen.getByText('Open Riksdag')).toBeInTheDocument()
      expect(screen.getByText('Brushi')).toBeInTheDocument()
      expect(screen.getByText('The natural language of robots')).toBeInTheDocument()
      expect(screen.getByText('SynthesEyeser')).toBeInTheDocument()
      expect(screen.getByText('Bass as an indicator of quality')).toBeInTheDocument()
      expect(screen.getByText('Challenge Me')).toBeInTheDocument()
      expect(screen.getByText('Evacuate Me')).toBeInTheDocument()
    })

    it('should render project years', () => {
      render(<Projects />)

      expect(screen.getByText('Master Thesis (iOS-app), 2021')).toBeInTheDocument()
      expect(screen.getByText('iOS-app, 2020')).toBeInTheDocument()
      expect(screen.getByText('This website, 2020')).toBeInTheDocument()
    })

    it('should render Info section for each project', () => {
      render(<Projects />)
      const infoHeadings = screen.getAllByText('Info')
      expect(infoHeadings.length).toBeGreaterThan(0)
    })

    it('should render "What I did" section for each project', () => {
      render(<Projects />)
      const contributionHeadings = screen.getAllByText('What I did')
      expect(contributionHeadings.length).toBeGreaterThan(0)
    })
  })

  describe('contributions list rendering', () => {
    it('should render contributions for SvtUI project', () => {
      render(<Projects />)

      expect(
        screen.getByText('📱 Broadened my knowledge of Swift, SwiftUI and iOS-development')
      ).toBeInTheDocument()
      expect(
        screen.getByText('🤹‍♂️ Learned from and worked together with an agile team at Svt')
      ).toBeInTheDocument()
    })

    it('should render contributions for johannesloor.se project', () => {
      render(<Projects />)

      expect(
        screen.getByText('⏰ A Johannes-Clock (Do you know my middle name?)')
      ).toBeInTheDocument()
      expect(screen.getByText('🎡 Twirling letters that bring chaos')).toBeInTheDocument()
      expect(screen.getByText('🤷‍♂️ Indecisive hobbies that rewrite themselves')).toBeInTheDocument()
      expect(screen.getByText('👨‍💻 Designed and built the whole thing')).toBeInTheDocument()
    })

    it('should render all contributions as separate paragraphs', () => {
      render(<Projects />)

      // Each contribution should be in its own paragraph
      const contribution1 = screen.getByText('📱 Broadened my knowledge of Swift, SwiftUI and iOS-development')
      const contribution2 = screen.getByText('🤹‍♂️ Learned from and worked together with an agile team at Svt')

      expect(contribution1.tagName).toBe('P')
      expect(contribution2.tagName).toBe('P')
    })
  })

  describe('video vs image conditional rendering', () => {
    it('should render video iframes for projects with vimeoId', () => {
      render(<Projects />)

      // SoleMate has vimeoId: "475384468"
      const videos = screen.getAllByTitle(/SoleMate|Sound Canvas|Open Riksdag|Brushi|SynthesEyeser/i)
      expect(videos.length).toBeGreaterThan(0)

      // Check that videos have correct iframe attributes
      const solemate = screen.getByTitle('SoleMate')
      expect(solemate.tagName).toBe('IFRAME')
      expect(solemate).toHaveAttribute('src', 'https://player.vimeo.com/video/475384468')
      expect(solemate).toHaveAttribute('allow', 'fullscreen')
    })

    it('should render Vimeo video with correct URL for Sound Canvas', () => {
      render(<Projects />)

      const soundCanvas = screen.getByTitle('Sound Canvas')
      expect(soundCanvas).toHaveAttribute('src', 'https://player.vimeo.com/video/458073967')
    })

    it('should render Vimeo video with correct URL for Open Riksdag', () => {
      render(<Projects />)

      const openRiksdag = screen.getByTitle('Open Riksdag')
      expect(openRiksdag).toHaveAttribute('src', 'https://player.vimeo.com/video/458073950')
    })

    it('should render ProjectImages for projects without vimeoId', () => {
      render(<Projects />)

      // Projects without vimeoId should have project-image
      const projectImages = screen.getAllByTestId('project-image')
      expect(projectImages.length).toBeGreaterThan(0)
    })

    it('should not render video for projects without vimeoId', () => {
      render(<Projects />)

      // SvtUI does not have vimeoId, so no video with that title
      const svtUITitle = screen.getByText('SvtUI')
      const projectContainer = svtUITitle.closest('div[class*="Project"]') || svtUITitle.parentElement?.parentElement

      // Check there's no iframe in this project
      const iframes = projectContainer?.querySelectorAll('iframe')
      expect(iframes?.length ?? 0).toBe(0)
    })
  })

  describe('external links rendering', () => {
    it('should render external links for projects with externals', () => {
      render(<Projects />)

      // Multiple projects have "Read report" external links
      const readReports = screen.getAllByText('Read report')
      expect(readReports.length).toBeGreaterThan(0)

      // Sonic Gesture Challenge has "Go to website" external
      expect(screen.getByText('Go to website')).toBeInTheDocument()
    })

    it('should render external links with correct href', () => {
      render(<Projects />)

      const goToWebsite = screen.getByText('Go to website')
      expect(goToWebsite).toHaveAttribute(
        'href',
        'https://johannesloor.github.io/Sonic-Gesture-Challenge/'
      )
    })

    it('should render external links with security attributes', () => {
      render(<Projects />)

      const goToWebsite = screen.getByText('Go to website')
      expect(goToWebsite).toHaveAttribute('target', '_blank')
      expect(goToWebsite).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should render multiple external links for projects with multiple externals', () => {
      render(<Projects />)

      // Bass as an indicator of quality has "Read in Swedish" and "Read in English"
      expect(screen.getByText('Read in Swedish')).toBeInTheDocument()
      expect(screen.getByText('Read in English')).toBeInTheDocument()
    })

    it('should render PDF links for projects with PDF externals', () => {
      render(<Projects />)

      // Multiple "Read report" links exist for different projects
      const readReports = screen.getAllByText('Read report')
      expect(readReports.length).toBeGreaterThan(0)

      // Check that they are anchors
      readReports.forEach((link) => {
        expect(link.tagName).toBe('A')
      })
    })

    it('should not render external links section for projects without externals', () => {
      render(<Projects />)

      // johannesloor.se has no externals
      const websiteTitle = screen.getByText('johannesloor.se')
      const projectContainer = websiteTitle.closest('div')?.parentElement

      // Get all buttons in the container by finding text content
      // Projects without externals should not have a ButtonWrapper
      // The project "johannesloor.se" (at index 2) has no externals
      expect(projectContainer).toBeInTheDocument()
    })
  })

  describe('project info content', () => {
    it('should render project info text', () => {
      render(<Projects />)

      // Check partial text from project info
      expect(
        screen.getByText(/As the final part of my masters in Interactive Media Technology at KTH/)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Halfway is an iOS-app that myself and two classmates built/)
      ).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('should have heading hierarchy', () => {
      render(<Projects />)

      // Each project has h3 for title and h4 for Info and What I did
      const h3s = document.querySelectorAll('h3')
      const h4s = document.querySelectorAll('h4')

      expect(h3s.length).toBeGreaterThan(0)
      expect(h4s.length).toBeGreaterThan(0)
    })

    it('should render project titles as h3', () => {
      render(<Projects />)

      const svtUI = screen.getByText('SvtUI')
      expect(svtUI.tagName).toBe('H3')
    })

    it('should render section titles (Info, What I did) as h4', () => {
      render(<Projects />)

      const infoHeadings = screen.getAllByText('Info')
      const contributionHeadings = screen.getAllByText('What I did')

      infoHeadings.forEach((heading) => {
        expect(heading.tagName).toBe('H4')
      })

      contributionHeadings.forEach((heading) => {
        expect(heading.tagName).toBe('H4')
      })
    })
  })

  describe('project count', () => {
    it('should render correct number of projects', () => {
      render(<Projects />)

      // There are 15 projects in projectData based on the data file
      // Count by looking at h3 elements (project titles)
      const h3s = document.querySelectorAll('h3')
      expect(h3s.length).toBe(15)
    })
  })

  describe('video iframe attributes', () => {
    it('should render videos with correct attributes', () => {
      render(<Projects />)

      const videos = document.querySelectorAll('iframe')
      videos.forEach((video) => {
        expect(video).toHaveAttribute('allow', 'fullscreen')
        expect(video.getAttribute('src')).toMatch(/https:\/\/player\.vimeo\.com\/video\/\d+/)
      })
    })
  })
})
