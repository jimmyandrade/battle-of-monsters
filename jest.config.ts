import type { Config } from 'jest'

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/index.tsx',
    'src/features/monsters/monsters-api-slice.ts'
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  verbose: true
}

export default config
