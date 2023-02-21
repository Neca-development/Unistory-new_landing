import { IconsTypes } from '@shared/ui'

export interface IWorksListConstant {
  title: string
  description: string
  cardBgClass: string
  icons: IconsTypes[]
  additionalClassnames?: string
  link: string
  textColor: 'white' | 'black'
}

export const WORKS_LIST: IWorksListConstant[] = [
  {
    title: 'Статистический сервис',
    description: 'Серверная разработка, клиентская разработка',
    cardBgClass: 'card_bg_stat_service',
    icons: ['monitor', 'bitcoin'],
    additionalClassnames: 'col-span-2',
    link: '/',
    textColor: 'white',
  },
  {
    title: 'Gas Monsters',
    description: 'Корпоративные сайты',
    cardBgClass: 'card_bg_gas_monsters',
    icons: ['phone02', 'monitor'],
    link: '/',
    textColor: 'white',
  },
  {
    title: 'Игровая платформа',
    description: 'Корпоративные сайты, клиентская разраб...',
    cardBgClass: 'card_bg_game_platform',
    icons: ['phone02'],
    link: '/',
    textColor: 'white',
  },
  {
    title: 'РЖД Логистика',
    description: 'UX-аналитика, серверная разработка...',
    cardBgClass: 'card_bg_rzhd',
    icons: ['phone02', 'monitor', 'bitcoin'],
    link: '/',
    textColor: 'white',
  },
  {
    title: 'Платформа безопасности',
    description: 'Корпоративные сайты, клиентская разраб...',
    cardBgClass: 'card_bg_safety_platform',
    icons: ['phone01', 'monitor', 'bitcoin'],
    link: '/',
    textColor: 'black',
  },
  {
    title: 'HR-портал Personal',
    description: 'Сервисы, мобильная разработка',
    cardBgClass: 'card_bg_personal',
    icons: ['phone02', 'bitcoin'],
    link: '/',
    textColor: 'black',
  },
  {
    title: 'Витрина облачных касс',
    description: 'UX-аналитика, серверная разработка',
    cardBgClass: 'card_bg_cloud_cash',
    icons: ['monitor'],
    link: '/',
    additionalClassnames: 'col-span-2',
    textColor: 'black',
  },
]
