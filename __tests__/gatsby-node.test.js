'use strict'

const gatsbyNode = require('../gatsby-node')

describe('gatsby-node', () => {
  describe('onCreateNode', () => {
    let mockCreateNodeField

    beforeEach(() => {
      mockCreateNodeField = jest.fn()
    })

    const createMockNode = (overrides = {}) => ({
      internal: { type: 'MarkdownRemark' },
      frontmatter: {
        permalink: null,
        layout: null,
        ...overrides.frontmatter
      },
      parent: 'parent-id',
      ...overrides
    })

    const createMockGetNode = (relativePath) => jest.fn().mockReturnValue({ relativePath })

    it('should generate slug from relativePath when no permalink is provided', () => {
      const node = createMockNode()
      const getNode = createMockGetNode('projects/my-project.md')

      gatsbyNode.onCreateNode({
        node,
        actions: { createNodeField: mockCreateNodeField },
        getNode
      })

      expect(mockCreateNodeField).toHaveBeenCalledWith({
        node,
        name: 'slug',
        value: '/projects/my-project/'
      })
    })

    it('should use permalink when provided as override', () => {
      const node = createMockNode({
        frontmatter: { permalink: '/custom-permalink/', layout: null }
      })
      const getNode = createMockGetNode('some/path.md')

      gatsbyNode.onCreateNode({
        node,
        actions: { createNodeField: mockCreateNodeField },
        getNode
      })

      expect(mockCreateNodeField).toHaveBeenCalledWith({
        node,
        name: 'slug',
        value: '/custom-permalink/'
      })
    })

    it('should set layout field when provided in frontmatter', () => {
      const node = createMockNode({
        frontmatter: { permalink: null, layout: 'project' }
      })
      const getNode = createMockGetNode('test.md')

      gatsbyNode.onCreateNode({
        node,
        actions: { createNodeField: mockCreateNodeField },
        getNode
      })

      expect(mockCreateNodeField).toHaveBeenCalledWith({
        node,
        name: 'layout',
        value: 'project'
      })
    })

    it('should default to empty string for layout when not provided', () => {
      const node = createMockNode()
      const getNode = createMockGetNode('test.md')

      gatsbyNode.onCreateNode({
        node,
        actions: { createNodeField: mockCreateNodeField },
        getNode
      })

      expect(mockCreateNodeField).toHaveBeenCalledWith({
        node,
        name: 'layout',
        value: ''
      })
    })

    it('should handle deeply nested paths for slug generation', () => {
      const node = createMockNode()
      const getNode = createMockGetNode('content/projects/category/my-project.md')

      gatsbyNode.onCreateNode({
        node,
        actions: { createNodeField: mockCreateNodeField },
        getNode
      })

      expect(mockCreateNodeField).toHaveBeenCalledWith({
        node,
        name: 'slug',
        value: '/content/projects/category/my-project/'
      })
    })

    it('should ignore non-MarkdownRemark nodes', () => {
      const node = createMockNode({ internal: { type: 'File' } })
      const getNode = createMockGetNode('test.md')

      gatsbyNode.onCreateNode({
        node,
        actions: { createNodeField: mockCreateNodeField },
        getNode
      })

      expect(mockCreateNodeField).not.toHaveBeenCalled()
    })

    it('should handle root level markdown files', () => {
      const node = createMockNode()
      const getNode = createMockGetNode('index.md')

      gatsbyNode.onCreateNode({
        node,
        actions: { createNodeField: mockCreateNodeField },
        getNode
      })

      expect(mockCreateNodeField).toHaveBeenCalledWith({
        node,
        name: 'slug',
        value: '/index/'
      })
    })

    it('should handle files with multiple dots in the name', () => {
      const node = createMockNode()
      const getNode = createMockGetNode('my.project.name.md')

      gatsbyNode.onCreateNode({
        node,
        actions: { createNodeField: mockCreateNodeField },
        getNode
      })

      expect(mockCreateNodeField).toHaveBeenCalledWith({
        node,
        name: 'slug',
        value: '/my.project.name/'
      })
    })
  })

  describe('createPages', () => {
    let mockCreatePage
    let mockGraphql

    beforeEach(() => {
      mockCreatePage = jest.fn()
    })

    const createMockGraphqlResult = (edges) => ({
      data: {
        allMarkdownRemark: { edges }
      }
    })

    it('should create pages for each markdown node', async () => {
      const edges = [
        { node: { fields: { slug: '/page1/', layout: 'page' } } },
        { node: { fields: { slug: '/page2/', layout: 'project' } } }
      ]
      mockGraphql = jest.fn().mockResolvedValue(createMockGraphqlResult(edges))

      await gatsbyNode.createPages({
        graphql: mockGraphql,
        actions: { createPage: mockCreatePage }
      })

      expect(mockCreatePage).toHaveBeenCalledTimes(2)
      expect(mockCreatePage).toHaveBeenCalledWith({
        path: '/page1/',
        component: expect.stringContaining('src/templates/page.tsx'),
        context: { slug: '/page1/' }
      })
      expect(mockCreatePage).toHaveBeenCalledWith({
        path: '/page2/',
        component: expect.stringContaining('src/templates/project.tsx'),
        context: { slug: '/page2/' }
      })
    })

    it('should default to page template when layout is empty', async () => {
      const edges = [
        { node: { fields: { slug: '/test/', layout: '' } } }
      ]
      mockGraphql = jest.fn().mockResolvedValue(createMockGraphqlResult(edges))

      await gatsbyNode.createPages({
        graphql: mockGraphql,
        actions: { createPage: mockCreatePage }
      })

      expect(mockCreatePage).toHaveBeenCalledWith({
        path: '/test/',
        component: expect.stringContaining('src/templates/page.tsx'),
        context: { slug: '/test/' }
      })
    })

    it('should default to page template when layout is null/undefined', async () => {
      const edges = [
        { node: { fields: { slug: '/test/', layout: null } } }
      ]
      mockGraphql = jest.fn().mockResolvedValue(createMockGraphqlResult(edges))

      await gatsbyNode.createPages({
        graphql: mockGraphql,
        actions: { createPage: mockCreatePage }
      })

      expect(mockCreatePage).toHaveBeenCalledWith({
        path: '/test/',
        component: expect.stringContaining('src/templates/page.tsx'),
        context: { slug: '/test/' }
      })
    })

    it('should throw error when graphql returns errors', async () => {
      mockGraphql = jest.fn().mockResolvedValue({
        errors: ['Some GraphQL error']
      })

      await expect(
        gatsbyNode.createPages({
          graphql: mockGraphql,
          actions: { createPage: mockCreatePage }
        })
      ).rejects.toThrow()
    })

    it('should handle empty markdown collection', async () => {
      mockGraphql = jest.fn().mockResolvedValue(createMockGraphqlResult([]))

      await gatsbyNode.createPages({
        graphql: mockGraphql,
        actions: { createPage: mockCreatePage }
      })

      expect(mockCreatePage).not.toHaveBeenCalled()
    })
  })
})
