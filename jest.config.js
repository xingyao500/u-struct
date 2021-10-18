module.exports = {
  transform: {
    '\\.(ts)$': 'ts-jest',
  },
//  setupFiles: ['./test/jest.setup.js'],
  transformIgnorePatterns: ['core-js'],
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/src/**/*.ts'],
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './test/coverage',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

