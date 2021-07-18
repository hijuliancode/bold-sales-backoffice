import Image from 'next/image'
import React from 'react'
import logoBold from "@images/design/logos/logo-white-674baccb93.png"
import Link from 'next/link'

export const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <Link href="/" passHref>
        <><Image src={ logoBold } alt="Bold" height={24} width={72} /></>
      </Link>
    </div>
  )
}
