import type { ILang } from '@shared/lib/types'

export const getCustomHeroText = (
  index: number,
  locale?: string,
  heroText?: ILang<string>[]
) => {
  if (!heroText || !heroText[index]) return ''
  const text = heroText[index] as ILang<string>

  return text[locale || 'ru']
}
