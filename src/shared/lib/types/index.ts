import { IconsTypes } from '@shared/ui'
import { TeamValues } from '../constants/team'
import { TechnologiesValues } from '../constants/technologies.constats'

export interface IDescriptionItem {
  subtitle?: ILang<string>
  text?: ILang<string>
  banner?: string
}

export interface ILang<T> {
  ru: T 
  en: T
  [index: string]: T
}

export interface ICase {
  title: string
  id: string
  heroTitle: ILang<string>
  categories: ILang<string[]>
  showCategoriesOnPage: boolean
  icons: IconsTypes[]
  additionalClassnames?: string
  textColor: 'white' | 'black'
  banner: any
  description: ILang<string>
  params: {
    budget: ILang<number>
    period: number
    year: number | string
  }
  technologies: TechnologiesValues[]
  main: {
    title: ILang<string>
    text: IDescriptionItem[]
    banner: string | ILang<string>
  }[]
  logo?: string
  review?: {
    author: {
      name: ILang<string>
      position: ILang<string>
      photo: string
    }
    text: ILang<string>
  }
  team: TeamValues[]
}