import React from 'react'

interface AutoPlaySwipeableViewsProps {
  children: React.ReactNode
  axis: 'x' | 'x-reverse' | 'y' | 'y-reverse'
  index: number
  onChangeIndex: (index: number) => void
  enableMouseEvents: boolean
  interval: number
}

export const AutoPlaySwipeableViews = ({
  children,
  axis,
  index,
  enableMouseEvents,
  interval,
}: AutoPlaySwipeableViewsProps) => {
  return (
    <div>
      <div>
        <p>axis: {axis}</p>
        <p>index: {index}</p>
        <p>enableMouseEvents: {enableMouseEvents ? 'true' : 'false'}</p>
        <p>interval: {interval}</p>
      </div>
      <div>
        {React.Children.map(children, (child, idx) => (
          <div key={idx} className="mx-10 inline-block">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
