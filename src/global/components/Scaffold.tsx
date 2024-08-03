import React from 'react'

export interface ScaffoldProps {
  topBar?: React.ReactNode
  bottomBar?: React.ReactNode
  children: React.ReactNode
}

const Scaffold = ({ topBar, bottomBar, children }: ScaffoldProps) => {
  return (
    <div className="flex h-full w-full flex-col items-stretch">
      {topBar}
      <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
      {bottomBar}
    </div>
  )
}
export default Scaffold
