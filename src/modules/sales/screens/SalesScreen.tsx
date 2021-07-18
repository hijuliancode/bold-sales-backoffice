import React from 'react'
import Head from 'next/head'
import { useSales } from '@context/index'
import { FilterTypes } from '@core/types'
import { CardSales } from '@components/index'
import { FilterBar } from '@components/FilterBar'

export const SalesScreen = () => {
  const { getSales, getSalesBy } = useSales()

  const handleClickAllSales = () => {
    console.log(getSales)
  }

  const handleClickSalesDay = () => {
    const list_sales = getSalesBy(FilterTypes.TODAY)
    console.log('getSalesBy(FilterTypes.TODAY)', list_sales)
  }

  const handleClickSalesWeek = () => {
    const list_sales = getSalesBy(FilterTypes.WEEK)
    console.log('getSalesBy(FilterTypes.WEEK)', list_sales)
  }

  const handleClickSalesMonth = () => {
    const list_sales = getSalesBy(FilterTypes.MONTH)
    console.log('getSalesBy(FilterTypes.MONTH)', list_sales)
  }

  return (
    <div className="page page-internal">
      <Head>
        <title>Bold - Maneja todo en la única app  que no necesita manual de instrucciones</title>
        <meta name="description" content="Bold - Maneja todo en la única app  que no necesita manual de instrucciones" />
        <meta name="keywords" content="datáfono, adquirir datáfono, comprar datáfono, vender más, tarjeta ,débito, tarjeta crédito, recibir pagos, aumentar ventas, redeban, credibanco, minidatafono, datáfono colombia, pagos con tarjeta, venta datáfono" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="grid xxs-columns-3-9">
            <CardSales />
            <div> { /** to prevent full height */ }
              <FilterBar />
            </div>
          </div>

          <button onClick={handleClickAllSales}>getAllSales</button>
          <button onClick={handleClickSalesDay}>getSalesByDay</button>
          <button onClick={handleClickSalesWeek}>getSalesByWeek</button>
          <button onClick={handleClickSalesMonth}>getSalesByMonth</button>
        </div>
      </main>
    </div>
  )
}
