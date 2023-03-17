import { TEAM } from './team'
import { ICase } from '../types'
import { TECHNOLOGIES } from './technologies.constats'
import personalBanner from '@public/assets/images/cases/personal.jpg'
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

export const CASES: ICase[] = [
  {
    title: 'Personal',
    id: 'personal',
    heroTitle: 'Персонал – мультиплатформенное\n HR приложение',
    categories: ['Серверная разработка', 'Клиентская разработка'],
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
      'Нашей команде предстояло разработать HR приложение-агрегатор, которое помогает собирать все резюме в  одном месте, облегчает общение с кандидатами и имеет интеграцию с популярными платформами для поиска работы.',
    params: {
      budget: 2300000,
      period: 9,
      year: 2022,
    },
    main: [
      {
        title: 'Интеграция с кадровыми сервисами',
        text: [
          {
            text: 'Чтобы сократить время на просмотр сайтов по поиску сотрудников, и собрать все резюме воедино – мы решили аггрегировать существующие площадки в одном приложении. Всего наша команда интегрировала 6 крупнейших платформ, включая HH.ru и Авито. Наши интеграции позволяют пользователям приложения бесшовно получать резюме кандидатов из сразу нескольких источников.',
          },
        ],
        banner: personalImage1.src,
      },
      {
        title: 'Пользовательские шаблоны для приглашения на интервью',
        text: [
          {
            text: 'Мы создали систему по созданию кастомизируемых карточек-шаблонов, которые пользователи могут отправлять кандидатам на вакансию. Данное решение значительно экономит время на обработку большого количества входящих предложений, и это важно, ведь оптимизация  является первоочередной задачей для любого бизнеса.',
          },
        ],
        banner: personalImage2.src,
      },
      {
        title: 'Встроенный чат для вывода сообщений из других сервисов',
        text: [
          {
            text: 'Приложение собирает не только резюме кандидатов, но и их сообщения с различных площадок. Чтобы сделать этот процесс еще более удобным, мы создали встроенный чат, в котором пользователи могут общаться с будущими работниками из всех необходимых источников.',
          },
        ],
        banner: personalImage3.src,
      },
      {
        title: '',
        text: [
          {
            subtitle: 'Сбор подсказок для составления вакансий',
            text: 'Мы разобрали более десяти тысяч различных объявлений о работе и с помощью статистического анализа собрали наиболее часто встречающиеся требования. Это позволило составить умные подсказки для всех видов вакансий.',
          },
          {
            subtitle: 'Размещение вакансий в разных сервисах',
            text: 'Мы унифицировали требования к вакансиям во всех сервисах, что позволяет нам предоставить нашим пользователям возможность заполнять только нашу форму.',
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
    heroTitle: 'Создание геймифицированной\n NFT коллекции',
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
      'Основной целью проекта являлась разработка минтинг вебсайта для NFT коллекции, где пользователи могут приобрести NFT, а затем модернизировать их за потраченные газ комиссии в сети Ethereum.',
    params: {
      budget: 3000000,
      period: 6,
      year: 2022,
    },
    main: [
      {
        title: 'Модернизируемые NFT',
        text: [
          {
            text: 'Главная особенность созданной коллекции – владельцы NFT могут улучшать полученных Драконов  с 1-го по 7-й уровень. Модернизация напрямую связана с  пользовательским транзакциям в сети Ethereum: чем больше транзакций было совершенно пользователем, тем больше приобретается опыта, который он может потратить на улучшение своего Дракона. Такая особенность придает дополнительный интерес к проекту, к тому же, это действительно понятная и, главное – прозрачная механика. ',
          },
        ],
        banner: gasmonstersImage1.src,
      },
      {
        title: 'Случайно сгенерированные токены',
        text: [
          {
            text: 'Для определения случайных слоев NFT, наша команда использовала блокчейн-сервис Chainlink VRF: с его помощью, мы получаем  рандомизированные параметры внутри блокчейна. После их генерации, данные о слоях напрямую записываются в смарт контракт коллекции. В результате, эта числовая комбинация служит идентификационным файлом в папке на IPFS. Впоследствии, никто не может изменить слои NFT – все выполнено в лучших традициях децентрализованных приложений.',
          },
        ],
        banner: gasmonstersImage2.src,
      },
      {
        title: 'Архитектурное решение',
        text: [
          {
            subtitle: 'Задача',
            text: 'Мы разобрали более десяти тысяч различных объявлений о работе и с помощью статистического анализа собрали наиболее часто встречающиеся требования. Это позволило составить умные подсказки для всех видов вакансий.',
          },
          {
            subtitle: 'Решение',
            text: 'Мы унифицировали требования к вакансиям во всех сервисах, что позволяет нам предоставить нашим пользователям возможность заполнять только нашу форму.',
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
]
