export const TEAM = {
  alexanderAksenov: {
    name: {
      en: 'Alexander Aksenov',
      ru: 'Александр Аксенов'
    } as any,
    position: {
      en: 'Head of Project Management',
      ru: 'Руководитель проектов'
    } as any,
  },
  nursultanBegenov: {
    name: {
      en: 'Nursultan Begenov',
      ru: 'Нурсултан Бегенов'
    },
    position: {
      en: 'Head of Project Management',
      ru: 'Руководитель проектов'
    },
  },
  nikitaBobkov: {
    name: {
      en: 'Nikita Bobkov',
      ru: 'Никита Бобков'
    },
    position: {
      en: 'Team lead',
      ru: 'Тимлид проекта'
    },
  },
  maksimKlimchenko: {
    name: {
      en: 'Maksim Klimchenko',
      ru: 'Максим Климченко'
    },
    position: {
      en: 'Business analyst',
      ru: 'Бизнес аналитик'
    },
  },
  andreyBarabanov: {
    name: {
      en: 'Andrey Barabanov',
      ru: 'Андрей Барабанов'
    },
    position: {
      en: 'Frontend/Blockchain developer',
      ru: 'Frontend/Blockchain разработчик'
    },
  },
  andreyBabenkov: {
    name: {
      en: 'Andrey Babenkov',
      ru: 'Андрей Бабенков'
    },
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    },
  },
  alekseyKlimenko: {
    name: {
      en: 'Aleksey Klimenko',
      ru: 'Алексей Клименко'
    },
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    },
  },
  andreyPaskarenko: {
    name: {
      en: 'Andrey Paskarenko',
      ru: 'Андрей Паскаренко'
    },
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    },
  },
  ernestMironovRN: {
    name: {
      en: 'Ernest Mironov',
      ru: 'Эрнест Миронов'
    },
    position: {
      en: 'React Native developer',
      ru: 'React Native разработчик'
    },
  },
  ernestMironov: {
    name: {
      en: 'Ernest Mironov',
      ru: 'Эрнест Миронов'
    },
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    },
  },
  daniilSemenov: {
    name: {
      en: 'Daniil Semenov',
      ru: 'Даниил Семенов'
    },
    position: {
      en: 'Project manager',
      ru: 'Проектный менеджер'
    },
  },
  kirillElizarov: {
    name: {
      en: 'Kirill Elizarov',
      ru: 'Кирилл Елизаров'
    },
    position: {
      en: 'Backend developer',
      ru: 'Backend разработчик'
    },
  },
  vladislavKiribyatev: {
    name: {
      en: 'Vladislav Kiribiatiev',
      ru: 'Владислав Кирибьятев'
    },
    position: {
      en: 'Backend developer',
      ru: 'Backend разработчик'
    },
  },
  vechyaslavValdykin: {
    name: {
      en: 'Vyacheslav Vladykin',
      ru: 'Вячеслав Владыкин'
    },
    position: {
      en: 'Frontend/Blockchain developer',
      ru: 'Frontend/Blockchain разработчик'
    },
  },
  danilaSkablov: {
    name: {
      en: 'Danila Skablov',
      ru: 'Даниил Скаблов'
    },
    position: {
      en: 'Backend developer',
      ru: 'Backend разработчик'
    },
  },
  andreyJurin: {
    name: {
      en: 'Andrey Yurin',
      ru: 'Андрей Юрин'
    },
    position: {
      en: 'Project Manager',
      ru: 'Проектный менеджер'
    },
  },
  danilSilverstov: {
    name: {
      en: 'Danil Seliverstov',
      ru: 'Данил Селиверстов'
    },
    position: {
      en: 'UX/UI designer',
      ru: 'UX/UI дизайнер'
    },
  },
  alekseyChepurin: {
    name: {
      en: 'Aleksey Chepurin',
      ru: 'Алексей Чепурин'
    },
    position: {
      en: 'UX/UI designer',
      ru: 'UX/UI дизайнер'
    },
  },
  alexanderYachevsky: {
    name: {
      en: 'Alexander Yachevskiy',
      ru: 'Александр Ячевский'
    },
    position: {
      en: 'Frontend/Blockchain developer',
      ru: 'Frontend/Blockchain разработчик'
    },
  },
  markCherepivskiy: {
    name: {
      en: 'Mark Cherepivskiy',
      ru: 'Марк Черепивский'
    },
    position: {
      en: 'Frontend developer',
      ru: 'Frontend разработчик'
    }
  },
  ilyaSmirnov: {
    name: {
      en: 'Ilya Smirnov',
      ru: 'Илья Смирнов'
    },
    position: {
      en: 'Project manager',
      ru: 'Проектный менеджер'
    }
  }
} as const

type TeamKeys = keyof typeof TEAM
export type TeamValues = (typeof TEAM)[TeamKeys]
