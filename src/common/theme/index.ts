import { createTheme } from '@mui/material/styles'
import { CSSObject } from 'tss-react'
import { outlinedInputClasses, PaletteMode } from '@mui/material'
import React from 'react'
import { Theme } from '@mui/system'
import typography from './typography'
import paletteLight from '@/common/theme/paletteLight'
import paletteDark from '@/common/theme/paletteDark'

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string
    lightest?: string
    disabled?: string
    active?: string
  }

  interface SimplePaletteColorOptions {
    darker?: string
    lightest?: string
    disabled?: string
    active?: string
  }

  interface TypeText {
    helper?: string
    lightest?: string
    darkest?: string
    hyperlink?: string
    buttonText?: string
    summary: string
  }

  interface TypeBackground {
    canvas?: string
    input?: string
    disabled?: string
    disabledDark?: string
    darkest?: string
    disableLighter?: string
  }

  interface Palette {
    border: Palette['primary']
  }

  interface PaletteOptions {
    border?: PaletteOptions['primary']
  }

  interface TypographyVariants {
    label1: React.CSSProperties
    label2: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    label1?: React.CSSProperties
    label2?: React.CSSProperties
  }

  interface BreakpointOverrides {
    xs: false // removes the `xs` breakpoint
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label1: true
    label2: true
    h7: true
  }
}

export const createThemeByMode = (mode: PaletteMode): Theme => {
  const theme = createTheme({
    palette: mode === 'light' ? paletteLight : paletteDark,
    typography,
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 720,
        laptop: 1024,
        desktop: 1440,
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: (props) => ({
            padding: props.theme.spacing(1, 1.5),
            color: props.theme.palette.text.primary,
            backgroundColor: props.theme.palette.background.input,
            [`.${outlinedInputClasses.input}::-webkit-input-placeholder`]: {
              ...(theme.typography.body1 as CSSObject),
              color: props.theme.palette.text.helper,
              opacity: '1 !important',
            },
            [`.${outlinedInputClasses.input}::placeholder`]: {
              ...(theme.typography.body1 as CSSObject),
              color: props.theme.palette.text.helper,
              opacity: '1 !important',
            },
            [`&.${outlinedInputClasses.error}`]: {
              backgroundColor: theme.palette.error.light,
            },
            [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
              borderWidth: theme.spacing(0.25),
            },
          }),
          notchedOutline: (props) => ({
            borderColor: props.theme.palette.text.disabled,
          }),
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            margin: 0,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          focusRipple: false,
        },
        styleOverrides: {
          root: {
            '&.Mui-focusVisible': {
              outline: 'solid',
              outlineColor: 'currentColor',
            },
            '@media (forced-colors: active)': {
              border: '1px solid windowText',
              backgroundColor: 'transparent',

              '&:hover, &:active': {
                border: 'none',
                backgroundColor: 'Highlight',
                color: 'HighlightText',
                forcedColorAdjust: 'none',
              },

              '&:focus': {
                outlineWidth: '2px',
              },
            },
          },
          sizeSmall: (props) => ({
            width: props.theme.spacing(4),
            height: props.theme.spacing(4),
          }),
          sizeMedium: (props) => ({
            width: props.theme.spacing(5),
            height: props.theme.spacing(5),
          }),
          sizeLarge: (props) => ({
            width: props.theme.spacing(6),
            height: props.theme.spacing(6),
          }),
        },
      },
    },
  })
  return theme
}
