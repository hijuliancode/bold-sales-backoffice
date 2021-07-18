
const today = new Date

const firstDay = new Date( today.setDate(today.getDate() - today.getDay() - 6 ) )
const lastDay = new Date( today.setDate(today.getDate() - today.getDay() + 7 ) )

export const getDaysOfWeek = (start: Date = firstDay, end: Date = lastDay) => {
  let arr = []
  for ( let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1) ) {
    arr.push(new Date(dt))
  }
  return arr
}
