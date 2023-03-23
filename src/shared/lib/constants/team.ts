export const TEAM = {
  alexanderAksenov: {
    name: 'Alexander Aksenov',
    position: {
      en: 'Head of Project Management',
      ru: 'Руководитель проектов'
    } as any,
  },
  nursultanBegenov: {
    name: 'Nursultan Begenov',
    position: {
      en: 'Head of Project Management',
      ru: 'Руководитель проектов'
    },
  },
  nikitaBobkov: {
    name: 'Nikita Bobkov',
    position: {
      en: 'Team lead',
      ru: 'Тимлид проекта'
    },
  },
  maksimKlimchenko: {
    name: 'Maksim Klimchenko',
    position: {
      en: 'Business analyst',
      ru: 'Бизнес аналитик'
    },
  },
  andreyBarabanov: {
    name: 'Andrey Barabanov',
    position: {
      en: 'Frontend/Blockchain developer',
      ru: 'Frontend/Blockchain разработчик'
    },
  },
  andreyBabenkov: {
    name: 'Andrey Babenkov',
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    },
  },
  alekseyKlimenko: {
    name: 'Aleksey Klimenko',
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    },
  },
  andreyPaskarenko: {
    name: 'Andrey Paskarenko',
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    },
  },
  ernestMironovRN: {
    name: 'Ernest Mironov',
    position: {
      en: 'React Native developer',
      ru: 'React Native разработчик'
    },
  },
  ernestMironov: {
    name: 'Ernest Mironov',
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    },
  },
  daniilSemenov: {
    name: 'Daniil Semenov',
    position: {
      en: 'Project manager',
      ru: 'Проектный менеджер'
    },
  },
  kirillElizarov: {
    name: 'Kirill Elizarov',
    position: {
      en: 'Backend developer',
      ru: 'Backend разработчик'
    },
  },
  vladislavKiribyatev: {
    name: 'Vladislav Kiribiatiev',
    position: {
      en: 'Backend developer',
      ru: 'Backend разработчик'
    },
  },
  vechyaslavValdykin: {
    name: 'Vyacheslav Vladykin',
    position: {
      en: 'Frontend/Blockchain developer',
      ru: 'Frontend/Blockchain разработчик'
    },
  },
  danilaSkablov: {
    name: 'Danila Skablov',
    position: {
      en: 'Backend developer',
      ru: 'Backend разработчик'
    },
  },
  andreyJurin: {
    name: 'Andrey Yurin',
    position: {
      en: 'Project Manager',
      ru: 'Проектный менеджер'
    },
  },
  danilSilverstov: {
    name: 'Danil Seliverstov',
    position: {
      en: 'UX/UI designer',
      ru: 'UX/UI дизайнер'
    },
  },
  alexanderYachevsky: {
    name: 'Alexander Yachevskiy',
    position: {
      en: 'Frontend/Blockchain developer',
      ru: 'Frontend/Blockchain разработчик'
    },
  },
} as const

type TeamKeys = keyof typeof TEAM
export type TeamValues = (typeof TEAM)[TeamKeys]
