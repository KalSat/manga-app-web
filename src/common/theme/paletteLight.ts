import { PaletteOptions } from '@mui/material'

const paletteLight: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1D4ED8',
    dark: '#1E40AF',
    darker: '#1E3A8A',
    light: '#1D4ED8',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#CBD5E1',
    dark: '#94A3B8',
    darker: '#64748B',
    light: '#F1F5F9',
    lightest: '#F8FAFC',
    disabled: '#F8FAFC',
    contrastText: '#0F172A',
  },
  error: {
    main: '#B91C1C',
    dark: '#991B1B',
    light: '#FEF2F2',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#C2410C',
    dark: '#9A3412',
    light: '#FFF7ED',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#1D4ED8',
    dark: '#1E40AF',
    light: '#EFF6FF',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#047857',
    dark: '#065F46',
    light: '#ECFDF5',
    contrastText: '#FFFFFF',
  },
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  text: {
    primary: '#0F172A',
    secondary: '#334155',
    disabled: '#9CA3AF',
    helper: '#475569',
    lightest: '#FFFFFF',
    darkest: '#000000',
    hyperlink: '#1D4ED8',
  },
  background: {
    paper: '#FFFFFF',
    canvas: '#F8FAFC',
    input: '#F1F5F9',
    disabled: '#E5E7EB',
    disabledDark: '#E5E7EB',
    darkest: '#111827',
  },
  divider: '#0000001F',
  border: {
    main: '#CBD5E1',
    dark: '#64748B',
    light: '#E2E8F0',
    active: '#2563EB',
    disabled: '#9CA3AF',
  },
}

export default paletteLight
