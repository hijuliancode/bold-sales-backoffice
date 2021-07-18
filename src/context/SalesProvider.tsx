
import { ISale } from '@core/models'
import { FilterTypes } from '@core/types'
import { salesData } from '@data/index'
import { filterByDay, filterByMonth, filterByWeek } from '@utils/filter-data-by.utils'
import { ReactNode, useState } from 'react'
import { SalesContext } from './SalesContext'

type Props = {
  children: ReactNode
}

export const SalesProvider = ({children}: Props) => {
  const [sales, setSales] = useState<ISale[]>(salesData)

  const getSales = sales

  const getSalesBy = (filter_by: FilterTypes) => {
    switch (filter_by) {
      case FilterTypes.TODAY:
        return filterByDay(sales)
      case FilterTypes.WEEK :
        return filterByWeek(sales)
      case FilterTypes.MONTH:
        return filterByMonth(sales)
      default:
        return sales;
    }
  }

  const setSale = (new_sale: ISale) => {
    setSales([ ...sales, new_sale ])
    return sales
  }

  const value = {
    getSales,
    getSalesBy,
    setSale,
  }

  return (
    <SalesContext.Provider value={value}>
      { children }
    </SalesContext.Provider>
  )
}