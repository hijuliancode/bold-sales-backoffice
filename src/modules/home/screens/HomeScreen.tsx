import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import bannerImageUrl from '@images/design/misc/hero-lg-3-f2bb805dcc.jpeg'
import { Button, ButtonEnter } from '@components/index'
import { CheckCircleOutlined } from '@ant-design/icons'

export const HomeScreen = () => {
  return (
    <div className="page page-home home">
      <Head>
        <title>Bold - Vende más con Bold, el datáfono que recibe todas la tarjetas</title>
        <meta name="description" content="Imagina poder tener un datáfono en tu negocio en tan solo minutos, sin procesos, o limitantes. Una vez lo compres es tuyo; no tendrás que pagar mensualidad." />
        <meta name="keywords" content="datáfono, adquirir datáfono, comprar datáfono, vender más, tarjeta ,débito, tarjeta crédito, recibir pagos, aumentar ventas, redeban, credibanco, minidatafono, datáfono colombia, pagos con tarjeta, venta datáfono" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="home__wrapper">
          <div className="area-a">
            <Image src={bannerImageUrl} alt='' layout="fill" objectFit="cover" objectPosition="right" />
            <h2 className="home-title">El datáfono que <br /> lo tiene todo para <br /> tu negocio</h2>
            <ul className="home-features mb-8">
              <li className="item">
                <CheckCircleOutlined />
                Recibe tarjetas: <strong>Visa, MasterCard, CODENSA y Amex.</strong>
              </li>
              <li className="item">
                <CheckCircleOutlined />
                Cobra con <strong>Link de pago.</strong>
              </li>
              <li className="item">
                <CheckCircleOutlined />
                Cero alquileres.
              </li>
              <li className="item">
                <CheckCircleOutlined />
                Cero mensualidades.
              </li>
            </ul>
            <div className="home-actions">
              <Button>
                <a href="https://blog.bold.co/" target="_blank" rel="noreferrer">
                  <strong>IR A BLOG</strong>
                </a>
              </Button>
            </div>
          </div>
          <div className="area-b">
            <ButtonEnter>
              <Link href="/sales">Entrar</Link>
            </ButtonEnter>
          </div>
        </div>
      </main>
    </div>
  )
}
