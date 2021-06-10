// jest.config.js

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  transform: { '\\.ts$': ['ts-jest'], '^.+\\.tsx?$': 'ts-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: {
        // allow js in typescript
        allowJs: true,
      },
    },
  },
};
