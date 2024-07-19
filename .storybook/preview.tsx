import type { Preview } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createThemeByMode } from '@common/theme'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: createThemeByMode('light'),
        dark: createThemeByMode('dark'),
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default preview
