const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export class LocalDate {
  day: number
  month: number
  year: number

  constructor(day: number, month: number, year: number) {
    this.day = day
    this.month = month
    this.year = year
  }

  /** In words, so it reads the same in every country: "7 November 2026". */
  format() {
    return `${this.day} ${monthNames[this.month - 1]} ${this.year}`
  }
}
