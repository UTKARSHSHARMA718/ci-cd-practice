export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transforms JS and JSX files
    "^.+\\.(css|svg|png|jpg|jpeg|gif)$": "jest-transform-stub", // Mocks static assets like CSS and images
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
