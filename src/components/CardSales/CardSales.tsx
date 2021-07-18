import { QuestionCircleOutlined } from '@ant-design/icons'
import React from 'react'

export const CardSales = () => {
  return (
    <div className="card-sales box-shadow">
      <div className="card-sales-header">
        Total de ventas de <span>hoy</span>
        <QuestionCircleOutlined />
      </div>
      <div className="card-sales-body">
        <strong className="card-sales-body__value text-colorized">1&apos;560.000</strong>
        <p className="card-sales-body__date">Septiembre 21</p>
      </div>
    </div>
  )
}
