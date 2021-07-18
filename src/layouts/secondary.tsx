import React, { ReactNode } from 'react'
interface Props {
  children: ReactNode;
}

export const LayoutSecondary = ({ children }: Props) => (
  <>
    { children }
  </>
)
