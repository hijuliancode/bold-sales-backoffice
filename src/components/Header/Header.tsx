import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'

export const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  )
}
