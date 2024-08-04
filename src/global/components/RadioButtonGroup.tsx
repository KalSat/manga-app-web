import { Button, ButtonGroup } from '@mui/material'
import { Check } from '@mui/icons-material'
import { NamePathPair } from '@data/model/comic'

export interface RadioButtonGroupProps {
  className?: string
  options: NamePathPair[]
  selected?: NamePathPair
  onChange?: (selected: NamePathPair) => void
}

const RadioButtonGroup = ({ className, options, selected, onChange }: RadioButtonGroupProps) => {
  return (
    <ButtonGroup
      className={'w-full rounded-full' + (className ? ` ${className}` : '')}
      variant="outlined"
      aria-label="Basic button group"
    >
      {options.map((option, i) => {
        const isSelected = selected?.path_word === option.path_word
        return (
          <Button
            key={option.path_word}
            onClick={() => onChange?.(option)}
            className={[
              'px-8',
              i === 0 ? 'rounded-s-full' : i === options.length - 1 ? 'rounded-e-full' : '',
              isSelected ? 'bg-blue-50' : '',
            ]
              .filter((it) => !!it)
              .join(' ')}
            startIcon={isSelected ? <Check /> : null}
          >
            {option.name}
          </Button>
        )
      })}
    </ButtonGroup>
  )
}
export default RadioButtonGroup
