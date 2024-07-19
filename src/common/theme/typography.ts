import { TypographyOptions, TypographyStyleOptions } from '@mui/material/styles/createTypography'

interface CustomTypographyOptions extends TypographyOptions {
  label1?: TypographyStyleOptions
  label2?: TypographyStyleOptions
  h7?: TypographyStyleOptions
}

const typography: CustomTypographyOptions = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontSize: '96px',
    fontWeight: 300,
    letterSpacing: '-1.5px',
  },
  h2: {
    fontSize: '60px',
    fontWeight: 300,
    letterSpacing: '-0.5px',
  },
  h3: {
    fontSize: '48px',
    fontWeight: 400,
  },
  h4: {
    fontSize: '34px',
    fontWeight: 400,
    lineHeight: '42px',
    letterSpacing: '0.25px',
  },
  h5: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
  },
  h6: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '32px',
    letterSpacing: '0.15px',
  },
  h7: {
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: '0.15px',
  },
  subtitle1: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '28px',
    letterSpacing: '0.15px',
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '22px',
    letterSpacing: '0.4px',
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.17px',
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.4px',
  },
  overline: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.1px',
    textTransform: 'uppercase',
  },
  button: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  label1: {
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '0.15px',
  },
  label2: {
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.4px',
  },
}

export default typography
