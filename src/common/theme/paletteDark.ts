import { PaletteOptions } from '@mui/material'
import { darkColors } from '@/common/theme/colors'

const paletteDark: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: darkColors.blueAccent,
    dark: '#496DE8',
    darker: '#478FFF',
    light: darkColors.blueAccent,
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#333338',
    dark: '#262629',
    darker: '#71717A',
    light: '#414146',
    lightest: '#0F172A',
    disabled: '#334155',
    contrastText: '#0F172A',
  },
  error: {
    main: darkColors.status.error,
    dark: '#FCA5A5',
    light: '#590804',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: darkColors.status.warning,
    dark: '#FC9F74',
    light: '#7C2D12',
    contrastText: '#FFFFFF',
  },
  info: {
    main: darkColors.status.confirmation,
    dark: '#93C5FD',
    light: '#1E3A8A',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#34D399',
    dark: '#A7F3D0',
    light: '#064E3B',
    contrastText: '#FFFFFF',
  },
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  text: {
    primary: darkColors.grey.lightGrey1,
    secondary: darkColors.grey.lightGrey2,
    disabled: darkColors.grey.lightGrey3,
    helper: '#A1A1AA',
    lightest: '#000000',
    darkest: '#FFFFFF',
    hyperlink: darkColors.blueAccent,
    buttonText: darkColors.text.black1,
    summary: darkColors.grey.darkGrey8,
  },
  background: {
    paper: darkColors.grey.darkGrey3,
    canvas: darkColors.grey.darkGrey5,
    input: darkColors.grey.darkGrey4,
    disabled: darkColors.grey.darkGrey1,
    disabledDark: darkColors.grey.darkGrey2,
    disableLighter: darkColors.grey.darkGrey7,
    darkest: darkColors.grey.lightGrey1,
  },
  divider: '#000000',
  border: {
    main: darkColors.grey.darkGrey1,
    dark: darkColors.grey.lightGrey3,
    light: darkColors.grey.darkGrey6,
    active: darkColors.blueAccent,
    disabled: darkColors.grey.lightGrey3,
  },
  grey: {
    100: darkColors.grey.lightGrey1,
    200: darkColors.grey.lightGrey2,
    300: darkColors.grey.lightGrey3,
    400: darkColors.grey.darkGrey1,
    500: darkColors.grey.darkGrey2,
    600: darkColors.grey.darkGrey3,
    700: darkColors.grey.darkGrey4,
    800: darkColors.grey.darkGrey5,
    900: darkColors.grey.darkGrey6,
  },
}

export default paletteDark
