import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

export const ButtonEnter = ({ children }: Props) => {
  return (
    <button className="btn-enter" type="button">
      { children }
    </button>
  )
}
