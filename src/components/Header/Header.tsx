import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'

export const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav />
    </header>
  )
}
