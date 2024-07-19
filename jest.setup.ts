import '@testing-library/jest-dom'
import en from './src/common/i18n/resources/en'
import * as mockPalette from './src/common/theme/paletteLight'
import * as mockTypography from './src/common/theme/typography'

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => {
        const path = str.split('.')
        return path.reduce((res, pre) => res[pre], en.translation as any)
      },
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}))

jest.mock('@common/i18n', () => ({
  t: (str: string, args: { [key: string]: string }) => {
    const path = str.split('.')
    // @ts-ignore
    const translatedStr: string = path.reduce((res, pre) => res[pre], mockEn)
    return args
      ? Object.keys(args).reduce((res, argKey) => {
          return res.replace(`\{\{${argKey}\}\}`, args[argKey])
        }, translatedStr)
      : translatedStr
  },
}))

jest.mock('@mui/material/styles', () => {
  const originalModule = jest.requireActual('@mui/material/styles')
  return {
    ...originalModule,
    useTheme: jest.fn().mockReturnValue({
      spacing: (size: number) => 4 * size,
      palette: mockPalette.default,
      typography: mockTypography.default,
      shadows: [],
      breakpoints: {
        up: jest.fn().mockReturnValue('up'),
        down: jest.fn().mockReturnValue('down'),
      },
      transitions: { duration: { standard: 0 } },
    }),
  }
})
