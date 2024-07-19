import { Button, ButtonProps } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { CSSObject } from 'tss-react'

export interface SecondaryButtonProps extends ButtonProps {}

const SecondaryButton = ({ children, className, ...rest }: SecondaryButtonProps) => {
  const { classes, cx, theme } = useStyles()
  const buttonLabel = typeof children === 'string' ? children : undefined

  return (
    <Button
      aria-label={buttonLabel}
      {...rest}
      variant={theme.palette.mode === 'light' ? 'contained' : 'outlined'}
      className={cx(classes.secondaryButton, className)}
      focusRipple={false}
    >
      {children}
    </Button>
  )
}

export default SecondaryButton

const useStyles = makeStyles()(({ spacing, palette, typography }) => ({
  secondaryButton: {
    ...((palette.mode === 'light' ? typography.button : typography.subtitle2) as CSSObject),
    '&.MuiButton-contained': {
      color: palette.text.primary,
      backgroundColor: palette.secondary.light,
      '&:hover': {
        backgroundColor: palette.secondary.main,
      },
      '&:active': {
        backgroundColor: palette.secondary.dark,
      },
    },
    '&.MuiButton-outlined': {
      color: palette.text.secondary,
      borderColor: palette.text.secondary,
    },
    '&.Mui-focusVisible': {
      outline: `solid 1.5px ${palette.mode === 'light' ? palette.primary.main : palette.common.white}`,
      outlineOffset: '2px',
    },
    '@media (forced-colors: active)': {
      backgroundColor: 'transparent',
      outline: '1px solid transparent',
      '&:hover, &:active': {
        backgroundColor: 'Highlight',
        color: 'HighlightText',
        forcedColorAdjust: 'none',
      },

      '&:focus': {
        outlineWidth: '2px',
      },
    },
    '&.Mui-disabled': {
      color: palette.text.disabled,
      backgroundColor: palette.background.disabled,
      borderColor: palette.background.disabled,
    },
    '&.MuiButton-root': {
      textTransform: palette.mode === 'light' ? 'none' : 'uppercase',
      boxShadow: 'none',
    },
    height: spacing(5),
    padding: spacing(0, 3),
    borderRadius: spacing(3),
  },
}))
