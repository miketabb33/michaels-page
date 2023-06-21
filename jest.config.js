module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    SITE_ENV: 'test',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/test'],
}
