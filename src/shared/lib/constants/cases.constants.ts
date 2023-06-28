import { TEAM } from "./team";
import { ICase } from "../types";
import { TECHNOLOGIES } from "./technologies.constats";
import personalPromo from "@public/assets/images/cases/personal/promo.jpg";
import personalPromoMob from "@public/assets/images/cases/personal/promo_mob.jpg";
import personalImage1 from "@public/assets/images/cases/personal/integration.jpg";
import personalImage2 from "@public/assets/images/cases/personal/templates.jpg";
import personalImage3 from "@public/assets/images/cases/personal/messenger.jpg";
import personalScheme from "@public/assets/images/cases/personal/scheme.jpg";

import gasmonstersBanner from "@public/assets/images/cases/gas-monsters/banner.jpg";
import gasmonstersBannerMob from "@public/assets/images/cases/gas-monsters/banner_mob.jpg";
import gasmonstersImage1 from "@public/assets/images/cases/gas-monsters/modern.jpg";
import gasmonstersImage2 from "@public/assets/images/cases/gas-monsters/random.jpg";
import gasmonstersScheme from "@public/assets/images/cases/gas-monsters/scheme.jpg";

import heistBanner from "@public/assets/images/cases/heist/banner.jpg";
import heistBannerMob from "@public/assets/images/cases/heist/banner_mob.jpg";
import heistScheme from "@public/assets/images/cases/heist/scheme_en.jpg";
import heistSchemeRu from "@public/assets/images/cases/heist/scheme_ru.jpg";
import heistImage1 from "@public/assets/images/cases/heist/presale.jpg";
import heistImage2 from "@public/assets/images/cases/heist/modern.jpg";
import heistImage3 from "@public/assets/images/cases/heist/stacking.jpg";

import xilBanner from "@public/assets/images/cases/xillion/banner.jpg";
import xilBannerMob from "@public/assets/images/cases/xillion/banner_mob.jpg";
import xilScheme from "@public/assets/images/cases/xillion/scheme.jpg";
import xilImage1 from "@public/assets/images/cases/xillion/quiz.jpg";
import xilImage2 from "@public/assets/images/cases/xillion/dao.jpg";
import xilImage3 from "@public/assets/images/cases/xillion/stacking.jpg";

import sipsignalBanner from "@public/assets/images/cases/sipsignal/banner.jpg";
import sipsignalBannerMob from "@public/assets/images/cases/sipsignal/banner_mob.jpg";
import sipsignalImage1 from "@public/assets/images/cases/sipsignal/web.jpg";
import sipsignalImage2 from "@public/assets/images/cases/sipsignal/efax.jpg";
import sipsignalImage3 from "@public/assets/images/cases/sipsignal/admin.jpg";
import sipsignalClient from "@public/assets/images/cases/sipsignal/bogdan.jpg";
import sipsignalLogo from "@public/assets/images/cases/sipsignal/logo.png";

import charityplatformThumb from "@public/assets/images/cases/charityplatform/thumb.jpg";
import charityplatformThumbMob from "@public/assets/images/cases/charityplatform/thumb_mob.jpg";
import charityplatformBanner from "@public/assets/images/cases/charityplatform/banner.jpg";
import charityplatformBannerMob from "@public/assets/images/cases/charityplatform/banner_mob.jpg";
import charityplatformImage1 from "@public/assets/images/cases/charityplatform/dashboard.jpg";
import charityplatformImage2 from "@public/assets/images/cases/charityplatform/blocks.jpg";
import charityplatformImage3 from "@public/assets/images/cases/charityplatform/admin.jpg";

import hoarderThumb from "@public/assets/images/cases/hoarder/thumb.jpg";
import hoarderThumbMob from "@public/assets/images/cases/hoarder/thumb_mob.jpg";
import hoarderBanner from "@public/assets/images/cases/hoarder/banner.jpg";
import hoarderBannerMob from "@public/assets/images/cases/hoarder/banner_mob.jpg";
import hoarderImage1 from "@public/assets/images/cases/hoarder/data.jpg";
import hoarderImage1Dark from "@public/assets/images/cases/hoarder/dark-data.jpg";
import hoarderImage2 from "@public/assets/images/cases/hoarder/vizualization.jpg";
import hoarderImageDark from "@public/assets/images/cases/hoarder/dark-vizualization.jpg";
import hoarderImage3 from "@public/assets/images/cases/hoarder/subscription.jpg";
import hoarderImage3Dark from "@public/assets/images/cases/hoarder/dark-subscription.jpg";

import flatspaceThumb from "@public/assets/images/cases/flatspace/thumb.jpg";
import flatspaceThumbMob from "@public/assets/images/cases/flatspace/thumb_mob.jpg";
import flatspaceBanner from "@public/assets/images/cases/flatspace/banner.jpg";
import flatspaceBannerMob from "@public/assets/images/cases/flatspace/banner_mob.jpg";
import flatspaceImage1 from "@public/assets/images/cases/flatspace/auction.jpg";
import flatspaceImage2 from "@public/assets/images/cases/flatspace/actions.jpg";
import flatspaceImage3 from "@public/assets/images/cases/flatspace/choise.jpg";

import plagtvThumb from "@public/assets/images/cases/plagtv/thumb.jpg";
import plagtvThumbMob from "@public/assets/images/cases/plagtv/thumb_mob.jpg";
import plagtvBanner from "@public/assets/images/cases/plagtv/banner.jpg";
import plagtvBannerMob from "@public/assets/images/cases/plagtv/banner_mob.jpg";
import plagtvImage1 from "@public/assets/images/cases/plagtv/player.jpg";
import plagtvImage2 from "@public/assets/images/cases/plagtv/dictionary.jpg";
import plagtvImage3 from "@public/assets/images/cases/plagtv/self-test.jpg";
import plagtvImage4 from "@public/assets/images/cases/plagtv/admin-panel.jpg";

export const CASES: ICase[] = [
  {
    title: "FlatSpace",
    id: "flatspace",
    projectUrl: "https://flatspacenfts.com/",
    projectUrlTitle: "www.flatspacenfts.com",
    heroTitle: {
      en: "NFT-Marketplace «FlatSpace»",
      ru: "NFT-Маркетплейс «FlatSpace»",
    },
    categories: {
      en: ["Development of NFT-Marketplace «FlatSpace»"],
      ru: ["Разработка NFT-Маркетплейса «FlatSpace»"],
    },
    showCategoriesOnPage: false,
    icons: ["monitor", "phone02"],
    textColor: "black",
    technologies: [
      TECHNOLOGIES.nest,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.solidity,
    ],
    thumbnail: {
      desktop: flatspaceThumb.src,
      mob: flatspaceThumbMob.src,
    },
    heroBanner: {
      desktop: flatspaceBanner.src,
      mob: flatspaceBannerMob.src,
    },
    description: {
      en: "To create an NFT-marketplace for famous London Art Gallery where real artists with physical arts can sell their work as NFTs. Implement auction functionality and  fixed price payments.",
      ru: "Создать NFT-маркетплейс для известной Лондонской художественной галереи, где реальные художники с нарисованными картинами могут продавать свои работы как NFT. Реализовать функциональность продажи НФТ на аукционе и по фиксированной стоимости.",
    },
    params: {
      budget: {
        ru: 2000000,
        en: 25000,
      },
      period: 4,
      year: "2023",
    },
    main: [
      {
        title: {
          en: "Auction creation",
          ru: "Создание аукциона",
        },
        text: [
          {
            text: {
              en: "Approved artists can start an auction and everyone can bid to buy a masterpiece as an NFT. ",
              ru: "Одобренные художники могут начать аукцион, и все желающие могут принять участие в торгах, чтобы купить шедевр в качестве NFT. ",
            },
          },
        ],
        banner: flatspaceImage1.src,
      },
      {
        title: {
          en: "Real-time actions",
          ru: "Действия в режиме реального времени",
        },
        text: [
          {
            text: {
              en: "Easy-to-use dashboards to track the auction’s status with all necessary information.",
              ru: "Простые в использовании приборные панели для отслеживания статуса аукциона со всей необходимой информацией.",
            },
          },
        ],
        banner: flatspaceImage2.src,
      },
      {
        title: {
          en: "All artists have a choise",
          ru: "У всех художников есть выбор",
        },
        text: [
          {
            text: {
              en: "It doesn’t have the “Highest Bid -- Wins” pattern. The artist always can choose who’ll be the winner, no matter what’s the bid. Also, the artist doesn’t pay for mint -- all expenses are up to buyer.",
              ru: `Здесь нет схемы "Наибольшая ставка - победа". Художник всегда может выбрать, кто станет победителем, независимо от ставки. Кроме того, художник не платит за выпуск НФТ - все расходы ложатся на покупателя.`,
            },
          },
        ],
        banner: flatspaceImage3.src,
      },
      {
        title: {
          en: "Results",
          ru: "Результат",
        },
        text: [
          {
            text: {
              en: "High-end platform which encourage all types of artists -- from entry to expert levels. Smart contract ensure transparency and honesty and microservices architecture provide seamless user experience at all stages. ",
              ru: "Высококлассная платформа, которая поощряет все типы художников - от начального до экспертного уровня. Смарт-контракт обеспечивает прозрачность и честность, а архитектура микросервисов обеспечивает беспрепятственный пользовательский опыт на всех этапах.",
            },
          },
        ],
      },
    ],
    team: [
      TEAM.alexanderAksenov,
      TEAM.ilyaSmirnov,
      TEAM.yanSofronov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.andreyBarabanov,
      TEAM.vladislavKiribyatev,
    ],
  },
  {
    title: "PlagTV",
    id: "plagtv",
    projectUrl: "https://plagtv.com/",
    projectUrlTitle: "www.plagtv.com",
    heroTitle: {
      en: "English learning platform",
      ru: "Платформа для изучения английского",
    },
    categories: {
      en: ["English learning platform"],
      ru: ["Платформа для изучения английского"],
    },
    showCategoriesOnPage: false,
    icons: ["monitor", "phone02"],
    textColor: "white",
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.node,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.postgresql,
    ],
    thumbnail: {
      desktop: plagtvThumb.src,
      mob: plagtvThumbMob.src,
    },
    heroBanner: {
      desktop: plagtvBanner.src,
      mob: plagtvBannerMob.src,
    },
    description: {
      en: "To develop a platform where users can learn English through watching educational/entertaining content.",
      ru: "Разработать сервис, позволяющий пользователям изучать английский язык через  просмотр обучающего/развлекательного контента.",
    },
    goalPoints: [
      {
        en: "to develop a youtube-like platform for searching and watching videos",
        ru: "разработать youtube-like платформу для поиска и просмотра видео",
      },
      {
        en: "to implement smart subtitles and build-it translator",
        ru: "реализовать функционал умных субтитров и встроенный переводчик;",
      },
      {
        en: "to implement a dictionary of the studied words with the possibility of self-testing.",
        ru: "внедрить словарь изученных слов с возможностью самотестирования",
      },
    ],
    params: {
      budget: {
        ru: 2000000,
        en: 25000,
      },
      period: 4,
      year: "2022 - 2023",
    },
    main: [
      {
        title: {
          en: "Advanced video player",
          ru: "Продвинутый плеер",
        },
        text: [
          {
            text: {
              en: "So that you can conveniently search for videos, watch videos and translate unfamiliar words. Of course, with the functions of acceleration and rewinding, so that it was really convenient.",
              ru: "Чтобы можно было удобно искать видео, смотреть видео и переводить незнакомые слова. Конечно же с функциями ускорения и перемотки, чтобы было прям удобно.",
            },
          },
        ],
        banner: plagtvImage1.src,
      },
      {
        title: {
          en: "Convenient and cool dictionary",
          ru: "Удобный и классный словарь",
        },
        text: [
          {
            text: {
              en: "All unfamiliar words immediately get into the dictionary, so as not to forget for sure. They can be grouped as you want, deleted, edited and even printed.",
              ru: "Все незнакомые слова сразу попадают в словарь, чтобы точно не забыть. Их можно группировать как хочется, удалять, редактировать и даже распечатать.",
            },
          },
        ],
        banner: plagtvImage2.src,
      },
      {
        title: {
          en: "Ability to self-test knowledge",
          ru: "Возможность самопроверки знаний",
        },
        text: [
          {
            text: {
              en: "Run the test and check whether the word has really been stored in memory. Checks both in Russian and in English, plus, you can choose which specific words to check.",
              ru: "Повторение - мать учения! Запускаешь тест и проверяешь, действительно ли слово отложилось в памяти. Проверяет как на русском, так и на английском, плюс, можно выбрать какие конкретно слова проверить.",
            },
          },
        ],
        banner: plagtvImage3.src,
      },
      {
        title: {
          en: "Great admin panel",
          ru: "Крутая админ панель",
        },
        text: [
          {
            text: {
              en: "We have made the process of uploading content as simple and convenient as possible for the author. Add videos, edit videos, see statistics - all in one place.",
              ru: "Мы сделали процесс загрузки контента максимально простым и удобным для автора. Добавляйте видео, редактируйте видео, смотрите статистику - всё в одном месте.",
            },
          },
        ],
        banner: plagtvImage4.src,
      },
      {
        title: {
          en: "Results",
          ru: "Результат",
        },
        text: [
          {
            text: {
              en: "The platform is as friendly as possible, both for the user and for the author. It is built on a high-end architecture that guarantees scalability and trouble-free operation under load.",
              ru: "Максимально дружелюбная, как для пользователя, так и для автора платформа. Построена на high-end архитектуре, гарантирующей масштабируемость и бесперебойную работу под нагрузкой. ",
            },
          },
        ],
      },
    ],
    team: [
      TEAM.alexanderAksenov,
      TEAM.daniilSemenov,
      TEAM.ernestMironov,
      TEAM.yanSofronov,
      TEAM.alekseyChepurin,
      TEAM.maksimKlimchenko,
      TEAM.andreyBabenkov,
      TEAM.danilaSkablov,
    ],
  },
  {
    title: "Xillion",
    id: "xillion",
    heroTitle: {
      en: "Decentralized blockchain project incubator",
      ru: "Децентрализованный инкубатор блокчейн-проектов",
    },
    categories: {
      en: ["Blockchain project incubator"],
      ru: ["Инкубатор блокчейн-проектов"],
    },
    showCategoriesOnPage: false,
    icons: ["monitor", "bitcoin"],
    textColor: "white",
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.solidity,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.theGraph,
    ],
    thumbnail: {
      desktop: xilBanner.src,
      mob: xilBannerMob.src,
    },
    heroBanner: {
      desktop: xilBanner.src,
      mob: xilBannerMob.src,
    },
    description: {
      en: "Modernization of the investment DAO ecosystem in Polygon and BSC blockchain networks: refined the MVP version of the platform, created a separate P2E game module with quizzes, and integrated custom staking infrastructure into the existing decentralized community.",
      ru: "Модернизация инвестиционной DAO экосистемы в сетях Polygon и BSC: доработали MVP версию площадки, создали отдельный игровой модуль  с P2E-викторинами и интегрировали кастомную стейкинг инфраструктуру в существующее децентрализованное сообщество.",
    },
    params: {
      budget: {
        ru: 3500000,
        en: 50000,
      },
      period: 8,
      year: 2022,
    },
    main: [
      {
        title: {
          en: "Quiz mode",
          ru: "Режим викторины",
        },
        text: [
          {
            text: {
              en: "Xillion – is a constantly progressing product, which has been improved by our team implementing new services for the platform. During the development, owners noted the growing trend of Play2Earn projects in Polygon network. In an effort to improve the product and respond to the market, it was decided to create a separate rewarding blockchain quizzes platform. Together with the product team, we developed and integrated a separate project module running in Polygon network, where the community takes surveys and receives rewards for participation.",
              ru: "Xillion – это постоянно совершенствующийся продукт, который был улучшен нашей командой посредством реализации новых сервисов для платформы. В ходе разработки проекта владельцы отметили тенденцию роста популярности Play2Earn сегмента в сети Polygon. Так, в стремлении улучшить продукт и своевременно отреагировать на тенденции рынка было решено создать отдельную платформу для участия в поощеряемых блокчейн-викторинах. Совместно с командой продукта мы разработали и интегрировали отдельный модуль проекта, работающий в сети Polygon, где сообщество проходит опросы и получает вознаграждения за участие.",
            },
          },
        ],
        banner: xilImage1.src,
      },
      {
        title: {
          en: "DAO-incubator",
          ru: "DAO-инкубатор",
        },
        text: [
          {
            text: {
              en: "After investing in the listed projects on Xillion platform, each investor receives project tokens XIL. A separate smart contract of the platform is responsible for their distribution, which is the primitive of the entire protocol. It also automatically creates new smart contracts of listed projects that distribute unique tokens of incubated DAO products.",
              ru: "После инвестирования в размещенные проекты на площадке Xillion,  каждый из инвесторов получает токены проекта (XIL). За их дистрибьюцию отвечает отдельный смарт контракт платформы, который является основой всего протокола. Он также автоматически создает новые смарт контракты размещаемых проектов, которые распределяют уникальные токены инкубационных DAO продуктов.",
            },
          },
        ],
        banner: xilImage2.src,
      },
      {
        title: {
          en: "DAO voting and XIL staking",
          ru: "DAO голосование и XIL стейкинг",
        },
        text: [
          {
            text: {
              en: "Our team revamped on-chain voting for the projects promoted on the platform: each user can independently propose ideas to XillionDAO members. Any member of the DAO with a balance of at least 10k XIL tokens can take part in the decentralized voting.  The voting process is implemented by a staking smart contract: the members have to deposit XIL tokens, which will be returned to them along with a percentage of the investment when the promoted project is successfully launched.",
              ru: "Наша команда модернизировала логику on-chain голосования за продвигаемые на платформе проекты : каждый пользователь может самостоятельно  предложить свою идею участникам XillionDAO. Участие в децентрализованном голосовании может принять любой член сообщества Xillion с балансом не менее 10 тыс. XIL токенов.  Процесс голосования реализован при помощи стейкинг смарт контракта, в котором необходимо заблокировать XIL токены, которые вернуться пользователям вместе с процентов от инвестиций при успешном запуске продвигаемого проекта.",
            },
          },
        ],
        banner: xilImage3.src,
      },
      {
        title: {
          en: "Architectural solution",
          ru: "Архитектурное решение",
        },
        text: [
          {
            text: {
              en: "For storing project history, voting results, number of investments, and investor information, we used TheGraph protocol, which can simultaneously work with both old and updated blockchain project architectures.",
              ru: "Для сохранения истории проектов, результатов голосования, количества инвестиций и информации об инвесторах мы использовали протокол TheGraph, который может одновременно работать как и со старой, так и с обновленной архитектурой блокчейн-проектов.",
            },
          },
          {
            text: {
              en: "Xillion is deployed on two blockchain networks: Binance Smart Chain and Polygon. Differentiating access to sections of the website and using the capabilities of ether.js library made it comfy for users to switch from one network to another.",
              ru: "Xillion размещен одновременно сразу на двух блокчейн сетях: Binance Smart Chain и Polygon. Разграничение доступа к разделам сайта и использование возможностей библиотеки ether.js сделали удобными для пользователей переходы от одной сети к друг",
            },
          },
          {
            text: {
              en: "Also, the project uses a proxy architecture in the blockchain part of the project, which makes it easy to scale and add new modules in the future.",
              ru: "Также, в проекте используется прокси-архитектура для блокчейн части проекта, что позволяет с легкостью масштабировать продукт и в будущем добавлять новые модули.",
            },
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
      TEAM.ernestMironov,
      TEAM.alekseyKlimenko,
      TEAM.kirillElizarov,
      TEAM.danilaSkablov,
    ],
  },

  {
    title: "HoarderNest",
    id: "hoardernest",
    heroTitle: {
      en: "HoarderNest – innovative NFT aggregator",
      ru: "HoarderNest – инновационный NFT агрегатор",
    },
    thumbnail: {
      desktop: hoarderThumb.src,
      mob: hoarderThumbMob.src,
    },
    heroBanner: {
      desktop: hoarderBanner.src,
      mob: hoarderBannerMob.src,
    },
    categories: {
      en: ["HoarderNest – innovative NFT aggregator"],
      ru: ["HoarderNest – инновационный NFT агрегатор"],
    },
    description: {
      en: "For a crypto startup with a team of  Tesla and eBay formers, we developed  «HoarderNest» – a service with comprehensive data aggregation and further multilevel analysis.",
      ru: "Для крипто-стартапа с командой из выходцев Tesla и eBay мы разработали сервис  «HoarderNest» с комлексным агрегированием данных и их дальнейшим многоуровневым анализом.",
    },
    icons: ["monitor", "bitcoin"],
    params: {
      budget: {
        ru: 1500000,
        en: 22000,
      },
      period: 5,
      year: 2022,
    },
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.solidity,
      TECHNOLOGIES.node,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.postgresql,
    ],
    textColor: "white",
    showCategoriesOnPage: false,
    main: [
      {
        title: {
          en: "Data aggregation from multiple sources",
          ru: "Агрегирование данных из нескольких источников",
        },
        text: [
          {
            text: {
              en: "Our team has designed and implemented a project architecture where data is collected in both on-chain and off-chain ways. At current stage, «HoarderNest» supports Ethereum network, Discord and Twitter. ",
              ru: "Наша команда подготовила и реализовала архитектуру проекта, при которой данные собираются, как on-chain, так и off-chain способом. На данном этапе, «HoarderNest» поддерживает сеть Ethereum, Discord и Twitter. ",
            },
          },
          {
            text: {
              en: "Also, we developed a custom system so that it reacts to most significant events. As an example, this could be abnormal token flows on marketplaces or mentions of a collection by influencers on social networks.",
              ru: "Мы разработали кастомную систему таким образом, чтобы она реагировала на большинство значимых событий. Как пример, это могут быть аномальные движения токенов на маркетплейсах или же упоминания коллекции значимыми инфлюенсерами в социальных сетях.",
            },
          },
        ],
        banner: hoarderImage1.src,
        darkBanner: hoarderImage1Dark.src,
      },
      {
        title: {
          en: "Visualization",
          ru: "Визуализация",
        },
        text: [
          {
            text: {
              en: "Well-designed data aggregation and storage system is half of a successful project. In statistical products it is important to keep the balance between informativeness, usability and aesthetic appeal of the service. Through the joint efforts of the product designer and the client, we were able to unlock the potential of a complex technical solution in a simple and straightforward interface.",
              ru: "Разработанная система агрегирование и хранение данных – это половина успешного проекта. В статистических продуктах важно сохранить баланс между информативностью, удобством и эстетической привлекательностью сервиса. Совместными усилиями продуктового дизайнера и клиента, мы смогли раскрыть потенциал сложного технического решения в простом и понятном интерфейсе.",
            },
          },
        ],
        banner: hoarderImage2.src,
        darkBanner: hoarderImageDark.src,
      },
      {
        title: {
          en: "Paid subscription system",
          ru: "Система платной подписки",
        },
        text: [
          {
            text: {
              en: "The service offers limited functionality for all users along with expanded functionality in a paid subscription. It was important for the client to maintain the decentralized approach of the service, and so we implemented payment through a custom smart contract we developed.",
              ru: "Сервис предлагает ограниченный функционал для всех пользоваталей наряду с расширенным в платной подписке. Клиенту было важно сохранить децентрализованный подход сервиса, и поэтому мы реализовали оплату через разработанный нами кастомный смарт контракт. ",
            },
          },
        ],
        banner: hoarderImage3.src,
        darkBanner: hoarderImage3Dark.src,
      },
    ],
    review: {
      author: {
        name: {
          en: "Connor Walker",
          ru: "Коннор Волкер",
        },
        position: {
          en: "CEO of",
          ru: "исполнительный директор",
        },
        company: "«HoarderNest»",
        photo: "",
      },
      text: {
        en: "«It was a great experience from start to finish. The skilled team delivered exceptional results and the client is confident that the product launch will be a success. Unistory's frequent and clear communication about the project's status and roadblocks contributed to a smooth engagement.»",
        ru: "«Это был замечательный опыт от начала и до конца! Квалифицированная команда Unistory добилась исключительных результатов, и клиент уверен, что запуск продукта будет успешным. Своевременные и четкие оповещения о состоянии проекта и препятствиях по ходу разработки способствовали нашему взаимодействию.»",
      },
    },
    team: [
      TEAM.daniilSemenovHead,
      TEAM.ilyaSmirnov,
      TEAM.yanSofronov,
      TEAM.ernestMironov,
      TEAM.maksimKlimchenko,
      TEAM.alekseyChepurin,
      TEAM.andreyBarabanov,
      TEAM.andreyPaskarenko,
      TEAM.kirillElizarov,
      TEAM.danilaSkablov,
    ],
  },

  {
    title: "Gas Monsters",
    id: "gas-monsters",
    heroTitle: {
      en: "Creation of a gamified\n NFT collection",
      ru: "Создание геймифицированной\n NFT коллекции",
    },
    categories: {
      en: ["Creation of a gamified NFT collection"],
      ru: ["Создание геймифицированной NFT коллекции"],
    },
    showCategoriesOnPage: false,
    icons: ["monitor", "bitcoin"],
    textColor: "black",
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.solidity,
      TECHNOLOGIES.node,
      TECHNOLOGIES.chainlinkVrf,
      TECHNOLOGIES.chainlinkNode,
    ],
    thumbnail: {
      desktop: gasmonstersBanner.src,
      mob: gasmonstersBannerMob.src,
    },
    heroBanner: {
      desktop: gasmonstersBanner.src,
      mob: gasmonstersBannerMob.src,
    },
    description: {
      en: "The main goal of the project was to develop a minting website for the NFT collection, where users can buy NFTs and then upgrade them for the gas they spend on Ethereum network.",
      ru: "Основной целью проекта являлась разработка минтинг вебсайта для NFT коллекции, где пользователи могут приобрести NFT, а затем модернизировать их за потраченные газ комиссии в сети Ethereum.",
    },
    params: {
      budget: {
        ru: 3000000,
        en: 42000,
      },
      period: 6,
      year: 2022,
    },
    main: [
      {
        title: {
          en: "Upgradable NFTs",
          ru: "Модернизируемые NFT",
        },
        text: [
          {
            text: {
              en: "The main feature of the collection – NFT owners can upgrade their Dragons from level 1st to 7th. Upgrades are directly related to a user transactions in Ethereum network: the more transactions have been made, the more experience users gains, which he can spend to improve owned Dragon. This feature gives additional interest to the project, and besides, it is a really clear and, most importantly, transparent mechanics.",
              ru: "Юнистори выполнили свою работу очень профессионально. Они подготовили подробный график работ согласно смете и следовали ему без задержек. Назначенный проектный менеджер был доступен для нас все время и даже когда он вышел в отпуск, команда предоставила замену на этот период. Unistory предоставили необходимые технические консультации, а также проявили гибкость при выборе спецификаций и передовых технологий. Мы будем рады продолжить работать с ними в будущем.",
            },
          },
        ],
        banner: gasmonstersImage1.src,
      },
      {
        title: {
          en: "Randomly generated tokens",
          ru: "Случайно сгенерированные токены",
        },
        text: [
          {
            text: {
              en: "To define random NFT layers, our team used the Chainlink VRF blockchain service: with its help, we get randomized parameters inside the blockchain. After generating them, the layer data is directly written into the smart contract of the collection. As a result, this numerical combination serves as an identification file in a folder on IPFS. Subsequently, no one can change the NFT layers - everything is done in the best tradition of decentralized applications.",
              ru: "Для определения случайных слоев NFT, наша команда использовала блокчейн-сервис Chainlink VRF: с его помощью, мы получаем  рандомизированные параметры внутри блокчейна. После их генерации, данные о слоях напрямую записываются в смарт контракт коллекции. В результате, эта числовая комбинация служит идентификационным файлом в папке на IPFS. Впоследствии, никто не может изменить слои NFT – все выполнено в лучших традициях децентрализованных приложений.",
            },
          },
        ],
        banner: gasmonstersImage2.src,
      },
      {
        title: {
          en: "Architectural solution",
          ru: "Архитектурное решение",
        },
        text: [
          {
            subtitle: {
              en: "The goal",
              ru: "Задача",
            },
            text: {
              en: "For level up of a Dragon, the smart collection contract must receive data about ETH spent by users on commissions in Ethereum network. ",
              ru: "Для повышения уровня Дракона смарт контракт коллекции должен получать информацию о затраченых пользователями ETH на комиссии в сети Ethereum.",
            },
          },
          {
            subtitle: {
              en: "Solution",
              ru: "Решение",
            },
            text: {
              en: "We created an architecture in which a smart contract accesses the project backend via Chainlink, which in turn communicates with Etherscan blockchain-explorer. After receiving the user transaction data and conducting necessary calculations, the server application generates and uploads a new image with NFT metadata to IPFS. It is the data that will be displayed to the user when querying the collection smart contract.",
              ru: "Мы создали архитектуру, при которой смарт контракт обращается через Chainlink к бэкенду проекта, который в свою очередь взаимодействует с проводним блоков Etherscan . После  получения данных о пользовательских транзакций и необходимых вычислений серверное приложение генерирует и загружает новое изображение с метадатой NFT на IPFS. Именно эта данные и будут отоброжаться у пользователя при запросе к смарт контракту коллекции.",
            },
          },
        ],
        banner: gasmonstersScheme.src,
      },
    ],
    review: {
      author: {
        name: {
          en: "Hiroshi Shimo",
          ru: "Хироши Шимо",
        },
        position: {
          en: "CEO of",
          ru: "исполнительный директор",
        },
        company: "«Consensus-base Inc.»",
        photo: "",
      },
      text: {
        en: "«Unistory did a very professional job: submitted a detailed schedule prior to the estimate and followed it through with no delays. They were also available for technical consultation. They were flexible about ambiguous specifications and cutting edge technology. Other contracts are still ongoing, but we would like to continue to work with them in the future.»",
        ru: "«Юнистори выполнили работу профессионально: представили график работ согласно смете и следовали ему без задержек. Они были доступны для консультаций. Проявляли гибкость в отношении неоднозначных спецификаций и передовых технологий. Мы бы хотели продолжить совместную работу  в будущем.»",
      },
    },
    team: [
      TEAM.alexanderAksenov,
      TEAM.daniilSemenov,
      TEAM.yanSofronov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.vechyaslavValdykin,
      TEAM.andreyBarabanov,
      TEAM.danilaSkablov,
    ],
  },

  {
    title: "The Heist",
    id: "the-heist",
    heroTitle: {
      en: "The Heist – Play2Earn based on NFT collection",
      ru: "The Heist – Play2Earn игра на базе NFT коллекции",
    },
    categories: {
      en: ["P2E game based on NFT collection"],
      ru: ["P2E игра на базе NFT коллекции"],
    },
    showCategoriesOnPage: false,
    icons: ["monitor", "bitcoin"],
    textColor: "white",
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.solidity,
      TECHNOLOGIES.node,
    ],
    thumbnail: {
      desktop: heistBanner.src,
      mob: heistBannerMob.src,
    },
    heroBanner: {
      desktop: heistBanner.src,
      mob: heistBannerMob.src,
    },
    description: {
      en: "Creating a web application using NFT technology to implement game mechanics: developed the website, the in-game stacking system, the smart collection contract on the BSC network, and the tokenomics of the entire project.",
      ru: "Создание веб-приложения с использованием технологии NFT для реализации игровых механик: разработали вебсайт, внутриигровую стейкинг систему, смарт контракт коллекции в сети BSC и токеномику всего  проекта.",
    },
    params: {
      budget: {
        ru: 1500000,
        en: 21000,
      },
      period: 3,
      year: 2021,
    },
    main: [
      {
        title: {
          en: "Presale of NFTs",
          ru: "Предпродажа NFT коллекции",
        },
        text: [
          {
            text: {
              en: "Marketing tactics included pre-selling a limited amount of  NFTs  to early users. Our team prepared the logic of distributing a certain number of tokens, which have better characteristics compared to public NFT sale. One of the main differences: increased rewards with each game iteration. In this way, we helped raise more funds at the initial stage of the project.",
              ru: "Маркетинговая тактика включала в себя предпродажу части NFT коллекции ранним пользователям. Наша команда подготовила логику дистрибьюции ограниченного числа токенов, которые имеют лучшие характеристики, в сравнении с токенами публичной продажи. Одно из главных отличий: повышенные вознаграждения с каждой игровой итерации. Таким образом, мы помогли привлечь больше средств на начальном этапе проекта.",
            },
          },
        ],
        banner: heistImage1.src,
      },
      {
        title: {
          en: "Upgrades",
          ru: "Модернизация",
        },
        text: [
          {
            text: {
              en: "One of the features of the smart collection contract is unlimited creation of NFTs. To form a more predictable economy of the project, we have implemented a token upgrade feature. This method allows users to exchange 3 NFTs of the same kind and rarity for 1 NFT with more favorable characteristics. The exchanged tokens are withdrawn from the total supply, which increases the market value of NFTs and the capitalization of the entire collection.",
              ru: "Одна из особенностей смарт контракта коллекции – неограниченное создание NFT. Для формирования более предсказуемой экономики проекта, мы реализовали функцию модернизации токенов. Данный метод позволяет пользователям обменять 3 NFT одного вида и редкости на 1 NFT с более выгодными характеристиками. Обмененные токены выводятся из общего оборота, что повышает рыночную стоимость отдельной NFT и капитализацию всей коллекции.",
            },
          },
        ],
        banner: heistImage2.src,
      },
      {
        title: {
          en: "Staking",
          ru: "Стейкинг",
        },
        text: [
          {
            text: {
              en: "In addition to the NFT smart contract, our team developed $CIAO smart contract of fungible tokens. Users can deposit project assets for a certain period of time, with the expectation of making a profit in the future. Staking is also implemented with some game mechanics and has several different types. Users can join staking guilds, improve, destroy, or just receive passive income from staking pools.",
              ru: "Помимо NFT смарт контракта , наша команда разработала смарт контракт взаимозаменяемых токенов – $CIAO. Пользователи могут депонировать активы проекта на определенный период времени, в рассчете на  получение прибыли в будущем. Стейкинг так же реализован с некоторой игровой механикой и имеет несколько разных типов. Пользователи могут объединятся в стейкинг гильдии, улучшать, уничтожать, или же просто получать пассивный доход со стейкинг пулов.",
            },
          },
        ],
        banner: heistImage3.src,
      },
      {
        title: {
          ru: "",
          en: "",
        },
        text: [],
        banner: {
          en: heistScheme.src,
          ru: heistSchemeRu.src,
        },
      },
    ],
    team: [
      TEAM.daniilSemenovHead,
      TEAM.andreyJurin,
      TEAM.yanSofronov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.danilSilverstov,
      TEAM.andreyBarabanov,
      TEAM.alexanderYachevsky,
      TEAM.vechyaslavValdykin,
    ],
  },
  {
    title: "Charity Platform",
    id: "charityplatform",
    heroTitle: {
      en: "Development of Charity Platform",
      ru: "Благотварительная платформа Адрес.Люди",
    },
    categories: {
      en: ["Development of Charity Platform"],
      ru: ["Благотварительная платформа Адрес.Люди"],
    },
    showCategoriesOnPage: false,
    icons: ["monitor", "phone02"],
    textColor: "black",
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.node,
      TECHNOLOGIES.postgresql,
    ],
    thumbnail: {
      desktop: charityplatformThumb.src,
      mob: charityplatformThumbMob.src,
    },
    heroBanner: {
      desktop: charityplatformBanner.src,
      mob: charityplatformBannerMob.src,
    },
    description: {
      en: "The main goal of our team was to automate the company's existing processes. The client was not satisfied with too many user and employee actions during sales, which reduced the sales conversion rate and increased the company's costs.",
      ru: "Создание платформы, которая соединяет нуждающихся в помощи людей и тех кто им хочет помочь на безвозмездной основе. Пользователь площадки может разместить просьбу о помощи, а другой человек может помочь лекарствами, продуктами или другими средствами",
    },
    params: {
      budget: {
        ru: 1300000,
        en: 18000,
      },
      period: 3,
      year: "2022-2023",
    },
    main: [
      {
        title: {
          en: "Bulletin board",
          ru: "Доска объявлений",
        },
        text: [
          {
            text: {
              en: "Bulletin board with requests for help is the centerpiece of the platform. A registered user can place an advertisement and add all the necessary information: description, photos and contacts. Philanthropists can open the card they are interested in and contact the person in need directly. ",
              ru: "Доска объявлений с запросами о помощи является центральным элементом платформы. Зарегестрированный пользователь может разместить свое объявление и добавить всю необходимую информацию: описание, фото и контакты. Благотворители же могут открыть интересующую их карточку и напрямую связаться с нуждающимся человеком. ",
            },
          },
          {
            text: {
              en: "Our team was inspired by Avito.ru platform and recreated a similar user experience, tested over the years and by millions of people. We've also implemented filters in the feed and an automatic anti-spam system to detect fraud requests.",
              ru: "Наша команда вдохновлялась сервисом Avito.ru и воссоздала похожий пользовательский опыт, проверенный годами и миллионами людей. Также, мы реализовали блок с фильтрами в ленте и автоматическую анти-спам систему для распознавания мошеннических заявок.",
            },
          },
        ],
        banner: charityplatformImage1.src,
      },
      {
        title: {
          en: "Additional units",
          ru: "Дополнительные блоки",
        },
        text: [
          {
            text: {
              en: "In addition to the bulletin board, our team created a separate section with a poster of free events, psychologist tips, platform contacts, and articles from the project team. Each of the sections is represented by a separate page: for free events we developed a feed of upcoming events, and for psychologists' advices a section with a built-in media player for displaying videos by specialists.",
              ru: "Помимо доски объявлений, наша команда создала отедьную секцию с афишой бесплатных мероприятий, советами психологов, контактами платформы и со статьями от команды проекта. Каждая из секций представлена отдельной страницей: для бесплатных мероприятий мы разработали ленту ближайших событий, а для советов психологов раздел со встроенным медиа-плеером для отоброжения роликов специалистов.  ",
            },
          },
        ],
        banner: charityplatformImage2.src,
      },
      {
        title: {
          en: "Admin panel and personal account for users",
          ru: "Административная панель и личный кабинет для пользователей",
        },
        text: [
          {
            text: {
              en: "Developed a custom solution for website administration. The project team keeps track of published advertisements and other actions on the platform, obtaining the necessary data in a convenient form.",
              ru: "Разработали кастомное решение для администрирования площадки. Команда проекта прослеживает публикуемые объявления и остальные действия на площадке, получая необходимые данные в удобном виде.",
            },
          },
          {
            text: {
              en: "Users have access to a personal account where they can keep track of all requests for help, as well as edit active advertisements.",
              ru: "Пользователи же имееют доступ к личному кабинету, где могут отслеживать все запросы о помощи, а так же редактировать активные объявления.",
            },
          },
        ],
        banner: charityplatformImage3.src,
      },
    ],
    team: [
      TEAM.daniilSemenovHead,
      TEAM.ilyaSmirnov,
      TEAM.yanSofronov,
      TEAM.ernestMironov,
      TEAM.maksimKlimchenko,
      TEAM.alekseyChepurin,
      TEAM.alekseyKlimenko,
      TEAM.andreyPaskarenko,
      TEAM.vladislavKiribyatev,
      TEAM.kirillElizarov,
    ],
  },
  {
    title: "SipSignal",
    id: "sipsignal",
    heroTitle: {
      en: "Platform development for VoIP  provider",
      ru: "Разработка платформы для провайдера VoIP решений",
    },
    categories: {
      en: ["Development of a platform for VoIP provider"],
      ru: ["Разработка платформы для VoIP провайдера "],
    },
    showCategoriesOnPage: false,
    icons: ["monitor", "phone02"],
    textColor: "black",
    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.express,
      TECHNOLOGIES.node,
      TECHNOLOGIES.postgresql,
    ],
    thumbnail: {
      desktop: sipsignalBanner.src,
      mob: sipsignalBannerMob.src,
    },
    heroBanner: {
      desktop: sipsignalBanner.src,
      mob: sipsignalBannerMob.src,
    },
    description: {
      en: "The main goal of our team was to automate the company's existing processes. The client was not satisfied with too many user and employee actions during sales, which reduced the sales conversion rate and increased the company's costs.",
      ru: "Главной задачей нашей команды являлась автоматизация существующих процессов компании. Клиента не устраивало слишком большое количество действий пользователей и сотрудников во время продаж, что снижало коэффициент конверсии продаж и увеличивало расходы компании.",
    },
    params: {
      budget: {
        ru: 1400000,
        en: 20000,
      },
      period: 6,
      year: 2021,
    },
    main: [
      {
        title: {
          en: "Development of the main web application",
          ru: "Разработка основного веб-приложения",
        },
        text: [
          {
            text: {
              en: "We have developed easy-to-navigate e-commerce application for choosing and purchasing cloud and telecom services. From the ground up, we created a custom card where platform clients can select the product they are interested in, specify all the necessary information for purchase, and create their own account to track their chosen subscription plan.",
              ru: "Мы разработали удобное, и в то же время понятное приложение для электронной коммерции, позволяющее выбирать и приобретать облачные и телекоммуникационные услуги. С нуля создали пользовательскую карту, по которой клиенты платформы могут выбрать интересующий их товар, указать всю необходимую информацию для покупки и создать свой аккаунт для отслеживания выбранного плана подписок.",
            },
          },
        ],
        banner: sipsignalImage1.src,
      },
      {
        title: {
          en: "eFax application for platform customers",
          ru: "eFax приложение для клиентов платформы",
        },
        text: [
          {
            text: {
              en: "In addition to developing the main web application, we have created a separate eFax service that is distributed as SaaS. eFax is a fairly popular solution in the U.S., and is often used in conjunction with VoIP. It was important for our client to provide as wide a range of services as possible: that's how we came up with the idea of creating a separate custom fax application.",
              ru: "Помимо разработки основного веб-приложения, мы создали отдельный eFax сервис, который распространяется в виде программного обеспечения как услуги. eFax является довольно популярным решением в США, и зачастую используется совместно с VoIP. Нашему клиенту было важно предоставлять как можно более широкий спектр услуг: так мы пришли к идеи создания отдельного пользовательского приложения для факса.",
            },
          },
        ],
        banner: sipsignalImage2.src,
      },
      {
        title: {
          en: "Custom admin panel",
          ru: "Кастомная\n административная панель",
        },
        text: [
          {
            text: {
              en: "Our team developed an admin panel and integrated it with the existing CRM system and databases. We took into account all the client's wishes and created a unique solution that combines all the necessary functions: tracking the status of orders for individual products, monitoring the sales funnel, managing users, employees and content on the platform.",
              ru: "Наша команда разработала административную панель и интегрировала ее с уже существующими CRM-системой и Базами Данных. Мы учли все пожелания клиента и создали уникальное решение, которое сочетает в себе все необходимые функции: отслеживание статусов заказов по отдельным продуктам, мониторинг воронки продаж, управление пользователями, сотрудниками и контентом на платформе.",
            },
          },
        ],
        banner: sipsignalImage3.src,
      },
    ],
    review: {
      author: {
        name: {
          en: "Bogdan Pakhomenko",
          ru: "Богдан Пахоменко",
        },
        position: {
          en: "CEO of",
          ru: "исполнительный директор",
        },
        company: "«BP Networking & Design Inc.»",
        photo: sipsignalClient.src,
      },
      text: {
        en: "«Good work, friends! Unistory is a well-managed and structured team: weekly updates, quick response times, and quality order fulfillment. I would recommend the Unistory team for any project. We were so pleased with the results that we went straight to our next project. Thank you guys for your hard work!»",
        ru: "«Хорошая работа, друзья! Еженедельные обновления, быстрое реагирование и качественное выполнение заказов. Я бы рекомендовал команду Unistory для любого проекта. Мы были настолько довольны результатами, что сразу же приступили к следующему. Спасибо вам, ребята, за вашу тяжелую работу!»",
      },
    },
    logo: sipsignalLogo.src,
    team: [
      TEAM.alexanderAksenov,
      TEAM.daniilSemenov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.andreyBarabanov,
      TEAM.ernestMironov,
      TEAM.alekseyKlimenko,
      TEAM.andreyPaskarenko,
      TEAM.vladislavKiribyatev,
    ],
  },
  {
    title: "Personal",
    id: "personal",
    heroTitle: {
      en: "Personal – multi-platform\n HR application",
      ru: "Персонал – мультиплатформенное\n HR приложение",
    },
    categories: {
      en: ["Multi-platform\n HR application"],
      ru: ["Мультиплатформенное\n HR приложение"],
    },
    showCategoriesOnPage: false,
    icons: ["monitor", "phone01"],
    textColor: "white",
    technologies: [
      TECHNOLOGIES.nest,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.reactNative,
      TECHNOLOGIES.headhunter,
      TECHNOLOGIES.avito,
      TECHNOLOGIES.ukassa,
    ],
    thumbnail: {
      desktop: personalPromo.src,
      mob: personalPromoMob.src,
    },
    heroBanner: {
      desktop: personalPromo.src,
      mob: personalPromoMob.src,
    },
    description: {
      en: "Our team had to develop an HR aggregator application that helps collect all resumes in one place, facilitates communication with candidates and has integration with popular job search platforms.",
      ru: "Нашей команде предстояло разработать HR приложение-агрегатор, которое помогает собирать все резюме в  одном месте, облегчает общение с кандидатами и имеет интеграцию с популярными платформами для поиска работы.",
    },
    params: {
      budget: {
        ru: 2300000,
        en: 30000,
      },
      period: 9,
      year: 2022,
    },
    main: [
      {
        title: {
          en: "Integration with HR services",
          ru: "Интеграция с кадровыми сервисами",
        },
        text: [
          {
            text: {
              en: "To reduce the time it takes to browse employee search sites, and to bring all resumes together, we decided to aggregate the existing platforms into one application. In total, our team has integrated six major platforms, including HH.ru and Avito. Our integrations allow app users to seamlessly receive candidate resumes from multiple sources at once.",
              ru: "Чтобы сократить время на просмотр сайтов по поиску сотрудников, и собрать все резюме воедино – мы решили аггрегировать существующие площадки в одном приложении. Всего наша команда интегрировала 6 крупнейших платформ, включая HH.ru и Авито. Наши интеграции позволяют пользователям приложения бесшовно получать резюме кандидатов из сразу нескольких источников.",
            },
          },
        ],
        banner: personalImage1.src,
      },
      {
        title: {
          en: "Custom templates for interview invitations",
          ru: "Пользовательские шаблоны для приглашения на интервью",
        },
        text: [
          {
            text: {
              en: "We created a system to create customizable templates cards that users can send to job candidates. This solution significantly saves time in processing a large number of incoming resumes, and this is important, because optimization is the first priority for any business.",
              ru: "Мы создали систему по созданию кастомизируемых карточек-шаблонов, которые пользователи могут отправлять кандидатам на вакансию. Данное решение значительно экономит время на обработку большого количества входящих предложений, и это важно, ведь оптимизация  является первоочередной задачей для любого бизнеса.",
            },
          },
        ],
        banner: personalImage2.src,
      },
      {
        title: {
          en: "Built-in chat to display messages from HR services",
          ru: "Встроенный чат для вывода сообщений из других сервисов",
        },
        text: [
          {
            text: {
              en: "The app collects not only candidates resumes, but also their messages from various services. To make this process even more convenient, we created a built-in chat room where users can communicate with future employees from all necessary sources.",
              ru: "Приложение собирает не только резюме кандидатов, но и их сообщения с различных площадок. Чтобы сделать этот процесс еще более удобным, мы создали встроенный чат, в котором пользователи могут общаться с будущими работниками из всех необходимых источников.",
            },
          },
        ],
        banner: personalImage3.src,
      },
      {
        title: {
          en: "",
          ru: "",
        },
        text: [
          {
            subtitle: {
              en: "Smart tips for making up vacancies",
              ru: "Сбор подсказок для составления вакансий",
            },
            text: {
              en: "We parsed over ten thousand different job ads and used statistical analysis to collect the most common requirements. This made it possible to compile smart tips for all kinds of jobs.",
              ru: "Мы разобрали более десяти тысяч различных объявлений о работе и с помощью статистического анализа собрали наиболее часто встречающиеся требования. Это позволило составить умные подсказки для всех видов вакансий.",
            },
          },
          {
            subtitle: {
              en: "Placing vacancies in different services",
              ru: "Размещение вакансий в разных сервисах",
            },
            text: {
              en: "We have unified job requirements across all services, which allows the users to fill out only the app’s form.",
              ru: "Мы унифицировали требования к вакансиям во всех сервисах, что позволяет нам предоставить нашим пользователям возможность заполнять только нашу форму.",
            },
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
];
