import React from 'react'
import { LinkOutlined } from '@ant-design/icons'
import { ISale } from '@core/models'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


import DataphoneIconUrl from '@images/design/icons/datafono-icon.svg'
import PaymentLinkIconUrl from '@images/design/icons/payment-link-icon.svg'
import Image from 'next/image'

type Props = {
  sales: ISale[],
  title: string,
  headTitles: string[]
}

export const Table = ({ sales, title, headTitles }: Props) => {
  console.log('sales', sales)
  console.log('title', title)
  console.log('headTitles', headTitles)

  const formatDates = (date: Date):string => {
    return format(date, 'dd/MM/yyyy - HH:mm:ss')
  }

  const formatNumAmount = (amount: number): string => {
    return `$${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(amount)}`
  }

  const getLogoProvider= (name_provider: string) => {
    return `/images/design/logos/payments-logos/${name_provider}-logo.svg`
  }

  return (
    <div className="table box-shadow">
      <div className="table-title">
        { title }
      </div>
      <div className="table-head">
        { headTitles && headTitles.map(
            thTitle => <div className="head-item" key={thTitle}>{thTitle}</div>
          )
        }
      </div>
      <div className="table-body">
        { sales && sales.map( ({ _id, transaction, date, payment, amount }) =>  
            <div className={`table-body__tr status-${transaction.status}`} key={_id}>
              <div className="item d-flex">
                <div className="mr-2">
                  { payment.method === 'payment_link'
                    ? <Image src={ DataphoneIconUrl } alt="Icono pago con datafono" />
                    : <Image src={ PaymentLinkIconUrl } alt="Icon pago con link" />
                  }
                </div>
                <div className="pt-1">{ transaction.type }</div>
              </div>
              <div className="item item--date">
                { formatDates(date.full_date) }
              </div>
              <div className="item">
                <span className="mr-2">
                  <Image src={getLogoProvider(payment.provider)} alt={`Pago realizado con ${payment.provider}`} height={20} width={20} />
                </span>
                **** **** **** {payment.last_digits}
              </div>
              <div className="item">{transaction.id}</div>
              <div className="item">
                { amount.value && <span className="sale-amount-value" > { formatNumAmount(amount.value) } </span> }
                { amount.note && <span className="sale-amount-note"> { amount.note } </span> }
                { amount.deduction && <span className="sale-amount-deduction"> { formatNumAmount(amount.deduction) } </span> }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
