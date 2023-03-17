import { IconsTypes } from '@shared/ui'
import { TeamValues } from '../constants/team'
import { TechnologiesValues } from '../constants/technologies.constats'

export interface IDescriptionItem {
  subtitle?: string
  text?: string
  banner?: string
}

export interface ICase {
  title: string
  id: string
  heroTitle: string
  categories: string[]
  showCategoriesOnPage: boolean
  icons: IconsTypes[]
  additionalClassnames?: string
  textColor: 'white' | 'black'
  banner: any
  description: string
  params: {
    budget: number
    period: number
    year: number
  }
  technologies: TechnologiesValues[]
  main: {
    title: string
    text: IDescriptionItem[]
    banner: string
  }[]
  team: TeamValues[]
}
