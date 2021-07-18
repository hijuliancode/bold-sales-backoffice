import React, { ReactNode } from 'react'
interface Props {
  children: ReactNode;
}

export const LayoutMain = ({ children }: Props) => (
  <>
    { children }
  </>
)
