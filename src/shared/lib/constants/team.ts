export const TEAM = {
  alexanderAksenov: {
    name: 'Александр Аксенов',
    position: 'Руководитель проектов',
  },
  nursultanBegenov: {
    name: 'Нурсултан Бегенов',
    position: 'Руководитель проектов',
  },
  nikitaBobkov: {
    name: 'Никита Бобков',
    position: 'Тимлид проекта',
  },
  maksimKlimchenko: {
    name: 'Максим Климченко',
    position: 'Бизнес аналитик',
  },
  andreyBarabanov: {
    name: 'Андрей Барабанов',
    position: 'Frontend/Blockchain разработчик',
  },
  andreyBabenkov: {
    name: 'Андрей Бабенков',
    position: 'Frontend разработчик',
  },
  alekseyKlimenko: {
    name: 'Алексей Клименко',
    position: 'Frontend разработчик',
  },
  andreyPaskarenko: {
    name: 'Андрей Паскаренко',
    position: 'Frontend разработчик',
  },
  ernestMironovRN: {
    name: 'Эрнест Миронов',
    position: 'React Native разработчик',
  },
  ernestMironov: {
    name: 'Эрнест Миронов',
    position: 'Frontend разработчик',
  },
  daniilSemenov: {
    name: 'Даниил Семенов',
    position: 'Проектный менеджер',
  },
  kirillElizarov: {
    name: 'Кирилл Елизаров',
    position: 'Backend разработчик',
  },
  vladislavKiribyatev: {
    name: 'Владислав Кирибьятев',
    position: 'Backend разработчик',
  },
  vechyaslavValdykin: {
    name: 'Вячеслав Владыкин ',
    position: 'Frontend/Blockchain разработчик',
  },
  danilaSkablov: {
    name: 'Данила Скаблов',
    position: 'Backend разработчик',
  },
  andreyJurin: {
    name: 'Андрей Юрин',
    position: 'Проектный менеджер',
  },
  danilSilverstov: {
    name: 'Данил Селиверстов',
    position: 'UX/UI дизайнер',
  },
  alexanderYachevsky: {
    name: 'Александр Ячевский',
    position: 'Frontend/Blockchain разработчик',
  },
} as const

type TeamKeys = keyof typeof TEAM
export type TeamValues = (typeof TEAM)[TeamKeys]
