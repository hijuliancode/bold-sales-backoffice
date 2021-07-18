import { getMonth } from '@utils/get-this-month.utils'
import React from 'react'

export const FilterBar = () => {
  const thisMonth = getMonth()

  return (
    <div className="filter-bar box-shadow">
      <button className="btn-filter">Hoy</button>
      <button className="btn-filter">Esta Semana</button>
      <button className="btn-filter active">{thisMonth}</button>
    </div>
  )
}
