import Image from 'next/image'
import React from 'react'
import logoBold from "@images/design/logos/logo-white-674baccb93.png"

export const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <Image src={ logoBold } alt="Bold" height={24} width={72} />
    </div>
  )
}
