import { ISale } from "@core/models"
import { getDaysOfWeek } from "./get-days-of-week.utils"

const filterByDay = (sales_list: ISale[]):ISale[] => {

  const sales_filtered:ISale[] = []

  const today = new Date(),
        thisDay = today.getDate(),
        thisYear = today.getFullYear(),
        thisMonth = today.getMonth() + 1

  sales_list.forEach((sale) => {
    const saleDate = sale.date.full_date

    if ( thisDay   === saleDate.getDate() &&
         thisMonth === saleDate.getMonth() + 1 &&
         thisYear  === saleDate.getFullYear()
      ) {
        sales_filtered.push( sale )
    }
    })

  return sales_filtered
}

const filterByWeek = (sales_list: ISale[]):ISale[] => {
  const sales_filtered: ISale[] = []
  const daysOfThisWeek = getDaysOfWeek()
  sales_list.forEach( (sale) => {
    for ( let day of daysOfThisWeek ) {
      if (  day.getDate() === sale.date.full_date.getDate() &&
            day.getMonth() + 1 === sale.date.full_date.getMonth() + 1 &&
            day.getFullYear() === sale.date.full_date.getFullYear()
      ) {
        sales_filtered.push( sale )
      }
    }
  })
  return sales_filtered
}

const filterByMonth = (sales_list: ISale[]):ISale[] => {

  const sales_filtered:ISale[] = []

  const today = new Date(),
        thisYear = today.getFullYear(),
        thisMonth = today.getMonth() + 1

  sales_list.forEach((sale) => {
    const saleDate = sale.date.full_date

    if ( thisMonth === saleDate.getMonth() + 1 &&
         thisYear  === saleDate.getFullYear()
      ) {
        sales_filtered.push( sale )
    }
    })

  return sales_filtered
}

export {
  filterByDay,
  filterByMonth,
  filterByWeek
}