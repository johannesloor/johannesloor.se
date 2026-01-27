import { projectData } from '../src/styles/projectData'

describe('projectData validation', () => {
  describe('required fields', () => {
    it('should have at least one project', () => {
      expect(projectData.length).toBeGreaterThan(0)
    })

    it('should have title field for all projects', () => {
      projectData.forEach((project) => {
        expect(project.title).toBeDefined()
        expect(typeof project.title).toBe('string')
        expect(project.title.trim().length).toBeGreaterThan(0)
      })
    })

    it('should have year field for all projects', () => {
      projectData.forEach((project) => {
        expect(project.year).toBeDefined()
        expect(typeof project.year).toBe('string')
        expect(project.year.trim().length).toBeGreaterThan(0)
      })
    })

    it('should have info field for all projects', () => {
      projectData.forEach((project) => {
        expect(project.info).toBeDefined()
        expect(typeof project.info).toBe('string')
        expect(project.info.trim().length).toBeGreaterThan(0)
      })
    })

    it('should have contributions array for all projects', () => {
      projectData.forEach((project) => {
        expect(project.contributions).toBeDefined()
        expect(Array.isArray(project.contributions)).toBe(true)
        expect(project.contributions.length).toBeGreaterThan(0)
        project.contributions.forEach((contribution) => {
          expect(typeof contribution).toBe('string')
          expect(contribution.trim().length).toBeGreaterThan(0)
        })
      })
    })

    it('should have either pictureNr or vimeoId for each project', () => {
      projectData.forEach((project) => {
        const hasPictureNr = project.pictureNr !== undefined
        const hasVimeoId = project.vimeoId !== undefined
        expect(hasPictureNr || hasVimeoId).toBe(true)
      })
    })
  })

  describe('pictureNr validation', () => {
    it('should have pictureNr values between 0 and 9', () => {
      projectData.forEach((project) => {
        if (project.pictureNr !== undefined) {
          expect(typeof project.pictureNr).toBe('number')
          expect(project.pictureNr).toBeGreaterThanOrEqual(0)
          expect(project.pictureNr).toBeLessThanOrEqual(9)
        }
      })
    })

    it('should have integer pictureNr values', () => {
      projectData.forEach((project) => {
        if (project.pictureNr !== undefined) {
          expect(Number.isInteger(project.pictureNr)).toBe(true)
        }
      })
    })
  })

  describe('vimeoId format validation', () => {
    it('should have vimeoId as numeric string', () => {
      projectData.forEach((project) => {
        if (project.vimeoId !== undefined) {
          expect(typeof project.vimeoId).toBe('string')
          expect(project.vimeoId).toMatch(/^\d+$/)
        }
      })
    })

    it('should have non-empty vimeoId when present', () => {
      projectData.forEach((project) => {
        if (project.vimeoId !== undefined) {
          expect(project.vimeoId.trim().length).toBeGreaterThan(0)
        }
      })
    })
  })

  describe('external URLs validation', () => {
    it('should have well-formed URLs in externals', () => {
      projectData.forEach((project) => {
        if (project.externals) {
          expect(Array.isArray(project.externals)).toBe(true)
          project.externals.forEach((external) => {
            expect(external.url).toBeDefined()
            expect(typeof external.url).toBe('string')
            // URLs should either be http/https or PDF imports (which are string paths)
            expect(
              typeof external.url === 'string' && external.url.length > 0
            ).toBe(true)
          })
        }
      })
    })

    it('should have text property for all externals', () => {
      projectData.forEach((project) => {
        if (project.externals) {
          project.externals.forEach((external) => {
            expect(external.text).toBeDefined()
            expect(typeof external.text).toBe('string')
            expect(external.text.trim().length).toBeGreaterThan(0)
          })
        }
      })
    })

    it('should have valid https URLs for web links', () => {
      const httpsUrlPattern = /^https:\/\/[^\s]+$/
      projectData.forEach((project) => {
        if (project.externals) {
          project.externals.forEach((external) => {
            // If it's a web URL (not a PDF import), it should be HTTPS
            if (typeof external.url === 'string' && external.url.startsWith('http')) {
              expect(external.url).toMatch(httpsUrlPattern)
            }
          })
        }
      })
    })
  })

  describe('no duplicate titles', () => {
    it('should have unique titles for all projects', () => {
      const titles = projectData.map((project) => project.title)
      const uniqueTitles = new Set(titles)
      expect(uniqueTitles.size).toBe(titles.length)
    })

    it('should identify any duplicate titles', () => {
      const titles = projectData.map((project) => project.title)
      const titleCounts = titles.reduce((acc, title) => {
        acc[title] = (acc[title] || 0) + 1
        return acc
      }, {} as Record<string, number>)

      const duplicates = Object.entries(titleCounts)
        .filter(([, count]) => count > 1)
        .map(([title]) => title)

      expect(duplicates).toEqual([])
    })
  })

  describe('data integrity', () => {
    it('should have consistent project structure', () => {
      projectData.forEach((project) => {
        // Check that there are no unexpected null values
        expect(project.title).not.toBeNull()
        expect(project.year).not.toBeNull()
        expect(project.info).not.toBeNull()
        expect(project.contributions).not.toBeNull()
      })
    })

    it('should have projects with reasonable content lengths', () => {
      projectData.forEach((project) => {
        // Title should be reasonably short
        expect(project.title.length).toBeLessThan(100)
        // Year should be short descriptor
        expect(project.year.length).toBeLessThan(100)
        // Info should have meaningful content
        expect(project.info.length).toBeGreaterThan(50)
      })
    })
  })
})
