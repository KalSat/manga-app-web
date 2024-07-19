/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
//@ts-nocheck
import type { JestConfigWithTsJest } from 'ts-jest'
import tsConfig from './tsconfig.json'

const getAbsoluteModuleMapper = () => {
  const paths = tsConfig.compilerOptions.paths
  return Object.keys(paths).reduce((map, key) => {
    const transformedKey = key.replace('/*', '')

    const transformedValue = paths[key][0].replace('./', '').replace('/*', '')
    map[`^${transformedKey}/(.*)$`] = `<rootDir>/${transformedValue}/$1`
    return map
  }, {})
}

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/js-with-ts',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/vite-env.d.ts', '<rootDir>/src/main.tsx'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.tsx',
    '^lodash-es$': 'lodash',
    ...getAbsoluteModuleMapper(),
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
        isolatedModules: true,
      },
    ],
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
}

export default config
