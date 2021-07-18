import Link from 'next/link'
import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons';


export const HeaderNav = () => {
  return (
    <nav className="header__nav">
      <Link href="/">Mi negocio</Link>
      <Link href="/">
        <span>Ayuda <QuestionCircleOutlined /></span>
      </Link>
    </nav>
  )
}
