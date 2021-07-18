import { ISale } from "@core/models"

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
  return sales_list
}

const filterByMonth = (sales_list: ISale[]):ISale[] => {
  return sales_list
}

export {
  filterByDay,
  filterByMonth,
  filterByWeek
}