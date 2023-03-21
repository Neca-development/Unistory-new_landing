export const TEAM = {
  alexanderAksenov: {
    name: 'Alexander Aksenov',
    position: 'Head of Project Management ',
  },
  nursultanBegenov: {
    name: 'Nursultan Begenov',
    position: 'Head of Project Management ',
  },
  nikitaBobkov: {
    name: 'Nikita Bobkov',
    position: 'Team lead',
  },
  maksimKlimchenko: {
    name: 'Maksim Klimchenko',
    position: 'Business analyst',
  },
  andreyBarabanov: {
    name: 'Andrey Barabanov',
    position: 'Frontend/Blockchain developer',
  },
  andreyBabenkov: {
    name: 'Andrey Babenkov',
    position: 'Frontend developer',
  },
  alekseyKlimenko: {
    name: 'Aleksey Klimenko',
    position: 'Frontend developer',
  },
  andreyPaskarenko: {
    name: 'Andrey Paskarenko',
    position: 'Frontend developer',
  },
  ernestMironovRN: {
    name: 'Ernest Mironov',
    position: 'React Native developer',
  },
  ernestMironov: {
    name: 'Ernest Mironov',
    position: 'Frontend developer',
  },
  daniilSemenov: {
    name: 'Daniil Semenov',
    position: 'Project manager',
  },
  kirillElizarov: {
    name: 'Kirill Elizarov',
    position: 'Backend developer',
  },
  vladislavKiribyatev: {
    name: 'Vladislav Kiribiatiev',
    position: 'Backend developer',
  },
  vechyaslavValdykin: {
    name: 'Vyacheslav Vladykin',
    position: 'Frontend/Blockchain developer',
  },
  danilaSkablov: {
    name: 'Danila Skablov',
    position: 'Backend developer',
  },
  andreyJurin: {
    name: 'Andrey Yurin',
    position: 'Project Manager',
  },
  danilSilverstov: {
    name: 'Danil Seliverstov',
    position: 'UX/UI designer',
  },
  alexanderYachevsky: {
    name: 'Alexander Yachevskiy',
    position: 'Frontend/Blockchain developer',
  },
} as const

type TeamKeys = keyof typeof TEAM
export type TeamValues = (typeof TEAM)[TeamKeys]
