export const findMonths = (value: number, locale?: string) => {
  if (locale === 'en') return 'months'

  if (value <= 1) return 'месяц'
  if (value <= 4 && value > 1) return 'месяца'
  return 'месяцев'
}
