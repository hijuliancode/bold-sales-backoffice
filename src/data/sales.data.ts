import { ISale } from '@core/models'

export const salesData: ISale[] = [
  {
    _id: "SL-01",
    transaction: {
      type: 'Cobro exitoso',
      status: 'success',
    },
    date: {
      full_date: new Date(2021, 1, 1, 3, 24, 0), // 2021/2/1 - 3:24:00
    },
    payment: {
      provider: 'MasterCard',
      last_digits: "7711",
      method: 'dataphone',
    },
    transaction_id: "GXEN23784UBV2",
    amount: {
      value: 25000,
      note: "Deducción Bold",
      deduction: 1500,
    },
  },
  {
    _id: "SL-02",
    transaction: {
      type: 'Cobro no realizado',
      status: 'success',
    },
    date: {
      full_date: new Date(2021, 2, 11, 13, 14, 55), // 2021/3/1 - 13:14:55
    },
    payment: {
      provider: 'AmericanExpress',
      last_digits: "2257",
      method: 'dataphone',
    },
    transaction_id: "UJSK19267IEK1",
    amount: {
      value: 15000,
    },
  },
  {
    _id: "SL-03",
    transaction: {
      type: 'Cobro exitoso',
      status: 'success',
    },
    date: {
      full_date: new Date(2021, 9, 11, 5, 15, 55), // 2021/10/11 - 5:15:55
    },
    payment: {
      provider: 'DinersClub',
      last_digits: "2193",
      method: 'payment_link',
    },
    transaction_id: "LKSI28937WOI9",
    amount: {
      value: 55000,
      note: "Deducción Bold",
      deduction: 11500,
    },
  },
  {
    _id: "SL-04",
    transaction: {
      type: 'Cobro en proceso',
      status: 'waiting',
    },
    date: {
      full_date: new Date(),
    },
    payment: {
      provider: 'MasterCard',
      last_digits: "2244",
      method: 'dataphone',
    },
    transaction_id: "OLKI10925JSU1",
    amount: {
      value: 25000,
      note: "Deducción Bold",
      deduction: 1500,
    },
  },
  {
    _id: "SL-05",
    transaction: {
      type: 'Cobro no realizado',
      status: 'success',
    },
    date: {
      full_date: new Date(2021, 9, 17, 8, 15, 34), // 2021/10/17 - 8:15:34
    },
    payment: {
      provider: 'MasterCard',
      last_digits: "9834",
      method: 'payment_link',
    },
    transaction_id: "IKWL83749JSK1",
    amount: {
      value: 75000,
    },
  },
  {
    _id: "SL-06",
    transaction: {
      type: 'Cobro exitoso',
      status: 'success',
    },
    date: {
      full_date: new Date(2021, 6, 16, 15, 15, 15), // 2021/7/15 - 15:15:15
    },
    payment: {
      provider: 'DinersClub',
      last_digits: "2193",
      method: 'payment_link',
    },
    transaction_id: "LKSI28937WOI9",
    amount: {
      value: 55000,
      note: "Deducción Bold",
      deduction: 11500,
    },
  },
  {
    _id: "SL-08",
    transaction: {
      type: 'Cobro exitoso',
      status: 'success',
    },
    date: {
      full_date: new Date(),
    },
    payment: {
      provider: 'MasterCard',
      last_digits: "1212",
      method: 'dataphone',
    },
    transaction_id: "JKAU91736LSK8",
    amount: {
      value: 55000,
      note: "Deducción Bold",
      deduction: 11500,
    },
  },
]