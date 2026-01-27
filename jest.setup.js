require('@testing-library/jest-dom');

// Mock Gatsby's global variables and functions
global.__BASE_PATH__ = '';
global.__PATH_PREFIX__ = '';

// Mock Gatsby's Link and navigate
jest.mock('gatsby', () => {
  const React = require('react');
  
  const gatsby = jest.requireActual('gatsby');
  
  return {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(({ to, children, ...rest }) =>
      React.createElement('a', { href: to, ...rest }, children)
    ),
    StaticQuery: jest.fn(),
    useStaticQuery: jest.fn(),
    navigate: jest.fn(),
  };
});

// Mock gatsby-plugin-image (virtual mock - module may not be installed)
jest.mock('gatsby-plugin-image', () => {
  const React = require('react');
  
  return {
    GatsbyImage: jest.fn().mockImplementation(({ image, alt, ...rest }) =>
      React.createElement('img', { alt, ...rest })
    ),
    StaticImage: jest.fn().mockImplementation(({ src, alt, ...rest }) =>
      React.createElement('img', { src, alt, ...rest })
    ),
    getImage: jest.fn(),
    getSrc: jest.fn(),
  };
}, { virtual: true });

// Mock @reach/router (used by Gatsby for Location)
jest.mock('@reach/router', () => {
  const React = require('react');
  
  return {
    Location: jest.fn().mockImplementation(({ children }) =>
      children({ location: { pathname: '/' } })
    ),
    Router: jest.fn().mockImplementation(({ children }) => children),
    navigate: jest.fn(),
    useLocation: jest.fn().mockReturnValue({ pathname: '/' }),
    useNavigate: jest.fn(),
  };
}, { virtual: true });

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
