import { TEAM } from './team'
import { ICase } from '../types'
import { TECHNOLOGIES } from './technologies.constats'
import personalPromo from '@public/assets/images/cases/personal/promo.jpg'
import personalImage1 from '@public/assets/images/cases/personal/integration.jpg'
import personalImage2 from '@public/assets/images/cases/personal/templates.jpg'
import personalImage3 from '@public/assets/images/cases/personal/messenger.jpg'
import personalScheme from '@public/assets/images/cases/personal/scheme.jpg'

import gasmonstersBanner from '@public/assets/images/cases/gas-monsters/banner.jpg'
import gasmonstersImage1 from '@public/assets/images/cases/gas-monsters/modern.jpg'
import gasmonstersImage2 from '@public/assets/images/cases/gas-monsters/random.jpg'
import gasmonstersScheme from '@public/assets/images/cases/gas-monsters/scheme.jpg'

import heistBanner from '@public/assets/images/cases/heist/banner.jpg'
import heistScheme from '@public/assets/images/cases/heist/scheme.jpg'
import heistImage1 from '@public/assets/images/cases/heist/presale.jpg'
import heistImage2 from '@public/assets/images/cases/heist/modern.jpg'
import heistImage3 from '@public/assets/images/cases/heist/stacking.jpg'

import xilBanner from '@public/assets/images/cases/xillion/banner.jpg'
import xilScheme from '@public/assets/images/cases/xillion/scheme.jpg'
import xilImage1 from '@public/assets/images/cases/xillion/quiz.jpg'
import xilImage2 from '@public/assets/images/cases/xillion/dao.jpg'
import xilImage3 from '@public/assets/images/cases/xillion/stacking.jpg'

import sipsignalBanner from '@public/assets/images/cases/sipsignal/banner.jpg'
import sipsignalImage1 from '@public/assets/images/cases/sipsignal/web.jpg'
import sipsignalImage2 from '@public/assets/images/cases/sipsignal/efax.jpg'
import sipsignalImage3 from '@public/assets/images/cases/sipsignal/admin.jpg'
import sipsignalClient from '@public/assets/images/cases/sipsignal/bogdan.jpg'
import sipsignalLogo from '@public/assets/images/cases/sipsignal/logo.png'

export const CASES: ICase[] = [
  {
    title: 'Personal',
    id: 'personal',
    heroTitle: 'Personal – multi-platform\n HR application',
    categories: ['Server development', 'Сlient development'],
    showCategoriesOnPage: false,
    icons: ['monitor', 'phone01'],
    textColor: 'white',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.reactNative,
    ],
    banner: personalPromo.src,
    description:
      'Our team had to develop an HR aggregator application that helps collect all resumes in one place, facilitates communication with candidates and has integration with popular job search platforms.',
    params: {
      budget: 2300000,
      period: 9,
      year: 2022,
    },
    main: [
      {
        title: 'Integration with HR services',
        text: [
          {
            text: 'To reduce the time it takes to browse employee search sites, and to bring all resumes together, we decided to aggregate the existing platforms into one application. In total, our team has integrated six major platforms, including HH.ru and Avito. Our integrations allow app users to seamlessly receive candidate resumes from multiple sources at once.',
          },
        ],
        banner: personalImage1.src,
      },
      {
        title: 'Custom templates for interview invitations',
        text: [
          {
            text: 'We created a system to create customizable templates cards that users can send to job candidates. This solution significantly saves time in processing a large number of incoming resumes, and this is important, because optimization is the first priority for any business.',
          },
        ],
        banner: personalImage2.src,
      },
      {
        title: 'Built-in chat to display messages from HR services',
        text: [
          {
            text: 'The app collects not only candidates resumes, but also their messages from various services. To make this process even more convenient, we created a built-in chat room where users can communicate with future employees from all necessary sources.',
          },
        ],
        banner: personalImage3.src,
      },
      {
        title: '',
        text: [
          {
            subtitle: 'Smart tips for making up vacancies',
            text: 'We parsed over ten thousand different job ads and used statistical analysis to collect the most common requirements. This made it possible to compile smart tips for all kinds of jobs.',
          },
          {
            subtitle: 'Placing vacancies in different services',
            text: 'We have unified job requirements across all services, which allows the users to fill out only the app’s form.',
          },
        ],
        banner: personalScheme.src,
      },
    ],
    team: [
      TEAM.alexanderAksenov,
      TEAM.daniilSemenov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.andreyBarabanov,
      TEAM.andreyPaskarenko,
      TEAM.andreyBabenkov,
      TEAM.alekseyKlimenko,
      TEAM.ernestMironov,
      TEAM.kirillElizarov,
      TEAM.vladislavKiribyatev,
    ],
  },

  {
    title: 'Gas Monsters',
    id: 'gas-monsters',
    heroTitle: 'Creation of a gamified\n NFT collection',
    categories: [
      'Blockchain development',
      'Integration',
      'HighLoad',
      'Engineering',
      'Server development',
      'Client development',
    ],
    showCategoriesOnPage: true,
    icons: ['monitor', 'bitcoin'],
    textColor: 'black',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.solidity,
      TECHNOLOGIES.node,
      TECHNOLOGIES.chainlinkVrf,
      TECHNOLOGIES.chainlinkNode,
    ],
    banner: gasmonstersBanner.src,
    description:
      'The main goal of the project was to develop a minting website for the NFT collection, where users can buy NFTs and then upgrade them for the gas they spend on Ethereum network.',
    params: {
      budget: 3000000,
      period: 6,
      year: 2022,
    },
    main: [
      {
        title: 'Upgradable NFTs',
        text: [
          {
            text: 'The main feature of the collection – NFT owners can upgrade their Dragons from level 1st to 7th. Upgrades are directly related to a user transactions in Ethereum network: the more transactions have been made, the more experience users gains, which he can spend to improve owned Dragon. This feature gives additional interest to the project, and besides, it is a really clear and, most importantly, transparent mechanics.',
          },
        ],
        banner: gasmonstersImage1.src,
      },
      {
        title: 'Randomly generated tokens',
        text: [
          {
            text: 'To define random NFT layers, our team used the Chainlink VRF blockchain service: with its help, we get randomized parameters inside the blockchain. After generating them, the layer data is directly written into the smart contract of the collection. As a result, this numerical combination serves as an identification file in a folder on IPFS. Subsequently, no one can change the NFT layers - everything is done in the best tradition of decentralized applications.',
          },
        ],
        banner: gasmonstersImage2.src,
      },
      {
        title: 'Architectural solution',
        text: [
          {
            subtitle: 'The goal',
            text: 'For level up of a Dragon, the smart collection contract must receive data about ETH spent by users on commissions in Ethereum network. ',
          },
          {
            subtitle: 'Solution',
						text: 'We created an architecture in which a smart contract accesses the project backend via Chainlink, which in turn communicates with Etherscan blockchain-explorer. After receiving the user transaction data and conducting necessary calculations, the server application generates and uploads a new image with NFT metadata to IPFS. It is the data that will be displayed to the user when querying the collection smart contract.',
          },
        ],
        banner: gasmonstersScheme.src,
      },
    ],
    team: [
      TEAM.nursultanBegenov,
      TEAM.daniilSemenov,
      TEAM.maksimKlimchenko,
      TEAM.nikitaBobkov,
      TEAM.vechyaslavValdykin,
      TEAM.andreyBarabanov,
      TEAM.danilaSkablov,
    ],
  },

  {
    title: 'The Heist',
    id: 'the-heist',
    heroTitle: 'The Heist – Play2Earn игра на базе NFT коллекции',
    categories: [
      'Blockchain разработка',
      'Интеграции',
      'HighLoad',
      'Проектирование',
      'Серверная разработка',
      'Клиентская разработка',
    ],
    showCategoriesOnPage: false,
    icons: ['monitor', 'bitcoin'],
    textColor: 'white',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.solidity,
    ],
    banner: heistBanner.src,
    description:
      'Создание веб-приложения с использованием технологии NFT для реализации игровых механик: разработали вебсайт, внутриигровую стейкинг систему, смарт контракт коллекции в сети BSC и токеномику всего  проекта.',
    params: {
      budget: 1500000,
      period: 3,
      year: 2021,
    },
    main: [
      {
        title: 'Предпродажа NFT коллекции',
        text: [
          {
            text: 'Маркетинговая тактика включала в себя предпродажу части NFT коллекции ранним пользователям. Наша команда подготовила логику дистрибьюции ограниченного числа токенов, которые имеют лучшие характеристики, в сравнении с токенами публичной продажи. Одно из главных отличий: повышенные вознаграждения с каждой игровой итерации. Таким образом, мы помогли привлечь больше средств на начальном этапе проекта.',
          },
        ],
        banner: heistImage1.src,
      },
      {
        title: 'Модернизация',
        text: [
          {
            text: 'Одна из особенностей смарт контракта коллекции – неограниченное создание NFT. Для формирования более предсказуемой экономики проекта, мы реализовали функцию модернизации токенов. Данный метод позволяет пользователям обменять 3 NFT одного вида и редкости на 1 NFT с более выгодными характеристиками. Обмененные токены выводятся из общего оборота, что повышает рыночную стоимость отдельной NFT и капитализацию всей коллекции.',
          },
        ],
        banner: heistImage2.src,
      },
      {
        title: 'Стейкинг',
        text: [
          {
            text: 'Помимо NFT смарт контракта , наша команда разработала смарт контракт взаимозаменяемых токенов – $CIAO. Пользователи могут депонировать активы проекта на определенный период времени, в рассчете на  получение прибыли в будущем. Стейкинг так же реализован с некоторой игровой механикой и имеет несколько разных типов. Пользователи могут объединятся в стейкинг гильдии, улучшать, уничтожать, или же просто получать пассивный доход со стейкинг пулов.',
          },
        ],
        banner: heistImage3.src,
      },
      {
        title: '',
        text: [],
        banner: heistScheme.src,
      },
    ],
    team: [
      TEAM.nursultanBegenov,
      TEAM.andreyJurin,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.danilSilverstov,
      TEAM.andreyBarabanov,
      TEAM.alexanderYachevsky,
      TEAM.vechyaslavValdykin,
    ],
  },

  {
    title: 'Xillion',
    id: 'xillion',
    heroTitle: 'Децентрализованный инкубатор блокчейн-проектов',
    categories: [
      'Blockchain разработка',
      'Интеграции',
      'HighLoad',
      'Проектирование',
      'Серверная разработка',
      'Клиентская разработка',
    ],
    showCategoriesOnPage: true,
    icons: ['monitor', 'bitcoin'],
    textColor: 'white',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.solidity,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.theGraph,
    ],
    banner: xilBanner.src,
    description:
      'Модернизация инвестиционной DAO экосистемы в сетях Polygon и BSC: доработали MVP версию площадки, создали отдельный игровой модуль  с P2E-викторинами и интегрировали кастомную стейкинг инфраструктуру в существующее децентрализованное сообщество.',
    params: {
      budget: 3500000,
      period: 8,
      year: 2022,
    },
    main: [
      {
        title: 'Режим викторины',
        text: [
          {
            text: 'Xillion – это постоянно совершенствующийся продукт, который был улучшен нашей командой посредством реализации новых сервисов для платформы. В ходе разработки проекта владельцы отметили тенденцию роста популярности Play2Earn сегмента в сети Polygon. Так, в стремлении улучшить продукт и своевременно отреагировать на тенденции рынка было решено создать отдельную платформу для участия в поощеряемых блокчейн-викторинах. Совместно с командой продукта мы разработали и интегрировали отдельный модуль проекта, работающий в сети Polygon, где сообщество проходит опросы и получает вознаграждения за участие.',
          },
        ],
        banner: xilImage1.src,
      },
      {
        title: 'DAO-инкубатор',
        text: [
          {
            text: 'После инвестирования в размещенные проекты на площадке Xillion,  каждый из инвесторов получает токены проекта (XIL). За их дистрибьюцию отвечает отдельный смарт контракт платформы, который является основой всего протокола. Он также автоматически создает новые смарт контракты размещаемых проектов, которые распределяют уникальные токены инкубационных DAO продуктов.',
          },
        ],
        banner: xilImage2.src,
      },
      {
        title: 'DAO голосование и XIL стейкинг',
        text: [
          {
            text: 'Наша команда модернизировала логику on-chain голосования за продвигаемые на платформе проекты : каждый пользователь может самостоятельно  предложить свою идею участникам XillionDAO. Участие в децентрализованном голосовании может принять любой член сообщества Xillion с балансом не менее 10 тыс. XIL токенов.  Процесс голосования реализован при помощи стейкинг смарт контракта, в котором необходимо заблокировать XIL токены, которые вернуться пользователям вместе с процентов от инвестиций при успешном запуске продвигаемого проекта.',
          },
        ],
        banner: xilImage3.src,
      },
      {
        title: 'Архитектурное решение',
        text: [
          {
            text: 'Для сохранения истории проектов, результатов голосования, количества инвестиций и информации об инвесторах мы использовали протокол TheGraph, который может одновременно работать как и со старой, так и с обновленной архитектурой блокчейн-проектов. Xillion размещен одновременно сразу на двух блокчейн сетях: Binance Smart Chain и Polygon. Разграничение доступа к разделам сайта и использование возможностей библиотеки ether.js сделали удобными для пользователей переходы от одной сети к другой.Также, в проекте используется прокси-архитектура для блокчейна части проекта, что позволяет с легкостью масштабировать продукт и в будущем добавлять новые модули.',
          },
        ],
        banner: xilScheme.src,
      },
    ],
    team: [
      TEAM.alexanderAksenov,
      TEAM.daniilSemenov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.andreyBarabanov,
      TEAM.vechyaslavValdykin,
      TEAM.alekseyKlimenko,
      TEAM.kirillElizarov,
      TEAM.danilaSkablov,
    ],
  },

  {
    title: 'Sipsignal',
    id: 'sipsignal',
    heroTitle: 'Разработка платформы для провайдера VoIP решений ',
    categories: [
      'Интеграции',
      'HighLoad',
      'Проектирование',
      'Клиентская разработка',
      'Серверная разработка',
      'Административная часть',
    ],
    showCategoriesOnPage: true,
    icons: ['monitor', 'phone02'],
    textColor: 'black',
    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.express,
      TECHNOLOGIES.node,
      TECHNOLOGIES.postgresql,
    ],
    banner: sipsignalBanner.src,
    description:
      'Модернизация инвестиционной DAO экосистемы в сетях Polygon и BSC: доработали MVP версию площадки, создали отдельный игровой модуль  с P2E-викторинами и интегрировали кастомную стейкинг инфраструктуру в существующее децентрализованное сообщество.',
    params: {
      budget: 1400000,
      period: 6,
      year: 2021,
    },
    main: [
      {
        title: 'Разработка основного веб-приложения',
        text: [
          {
            text: 'Мы разработали удобное, и в то же время понятное приложение для электронной коммерции, позволяющее выбирать и приобретать облачные и телекоммуникационные услуги. С нуля создали пользовательскую карту, по которой клиенты платформы могут выбрать интересующий их товар, указать всю необходимую информацию для покупки и создать свой аккаунт для отслеживания выбранного плана подписок.',
          },
        ],
        banner: sipsignalImage1.src,
      },
      {
        title: 'eFax приложение для клиентов платформы',
        text: [
          {
            text: 'Помимо разработки основного веб-приложения, мы создали отдельный eFax сервис, который распространяется в виде программного обеспечения как услуги. eFax является довольно популярным решением в США, и зачастую используется совместно с VoIP. Нашему клиенту было важно предоставлять как можно более широкий спектр услуг: так мы пришли к идеи создания отдельного пользовательского приложения для факса.',
          },
        ],
        banner: sipsignalImage2.src,
      },
      {
        title: 'Кастомная\n административная панель',
        text: [
          {
            text: 'Наша команда разработала административную панель и интегрировала ее с уже существующими CRM-системой и Базами Данных. Мы учли все пожелания клиента и создали уникальное решение, которое сочетает в себе все необходимые функции: отслеживание статусов заказов по отдельным продуктам, мониторинг воронки продаж, управление пользователями, сотрудниками и контентом на платформе.',
          },
        ],
        banner: sipsignalImage3.src,
      },
    ],
    review: {
      author: {
        name: 'Богдан Пахоменко',
        position: 'исполнительный директор "BP Networking & Design Inc.',
        photo: sipsignalClient.src,
      },
      text: '«Хорошая работа, друзья! Unistory - это хорошо управляемая и структурированная команда: еженедельные обновления, быстрое реагирование и качественное выполнение заказов. Я бы рекомендовал команду Unistory для любого проекта. Мы были настолько довольны результатами, что сразу же приступили ко следующему проекту. Спасибо вам, ребята, за вашу тяжелую работу.».',
    },
    logo: sipsignalLogo.src,
    team: [
      TEAM.nursultanBegenov,
      TEAM.daniilSemenov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.andreyBarabanov,
      TEAM.alekseyKlimenko,
      TEAM.andreyPaskarenko,
      TEAM.vladislavKiribyatev,
    ],
  },
]
