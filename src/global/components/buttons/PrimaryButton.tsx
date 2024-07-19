import { Button, ButtonProps } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { CSSObject } from 'tss-react'

export interface PrimaryButtonProps extends ButtonProps {
  ariaLabel?: string
}

const PrimaryButton = ({ children, className, disabled, ariaLabel, ...rest }: PrimaryButtonProps) => {
  const { classes, cx } = useStyles()
  const buttonLabel = typeof children === 'string' ? children : undefined

  return (
    <Button
      aria-label={ariaLabel ?? buttonLabel}
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
      variant="contained"
      className={cx(classes.primaryButton, className)}
      focusRipple={false}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton

const useStyles = makeStyles()(({ spacing, palette, typography }) => ({
  primaryButton: {
    ...((palette.mode === 'light' ? typography.button : typography.subtitle2) as CSSObject),
    '&.MuiButton-contained': {
      color: palette.common.white,
      backgroundColor: palette.primary.main,
      '&:hover': {
        backgroundColor: palette.primary.dark,
      },
      '&:active': {
        backgroundColor: palette.primary.darker,
      },

      '&.Mui-focusVisible': {
        outline: `solid 1.5px ${palette.mode === 'light' ? palette.primary.main : palette.common.white}`,
        outlineOffset: '2px',
      },

      '@media (forced-colors: active)': {
        backgroundColor: 'transparent',

        '&:hover, &:active': {
          backgroundColor: 'Highlight',
          color: 'HighlightText',
          forcedColorAdjust: 'none',
        },

        '&:focus': {
          outlineWidth: '2px',
        },
      },
    },
    '&.Mui-disabled': {
      color: palette.text.disabled,
      backgroundColor: palette.background.disabled,
    },
    '&.MuiButton-root': {
      textTransform: palette.mode === 'light' ? 'none' : 'uppercase',
      boxShadow: 'none',
    },
    height: spacing(5),
    padding: spacing(0, 3),
    borderRadius: spacing(3),
    outline: '1px solid transparent',
  },
}))
