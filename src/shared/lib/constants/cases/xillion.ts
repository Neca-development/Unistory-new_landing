import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import xilBanner from "@public/assets/images/cases/xillion/banner.jpg";
import xilBannerMob from "@public/assets/images/cases/xillion/banner_mob.jpg";
import xilImage2 from "@public/assets/images/cases/xillion/dao.jpg";
import xilImage1 from "@public/assets/images/cases/xillion/quiz.jpg";
import xilScheme from "@public/assets/images/cases/xillion/scheme.jpg";
import xilImage3 from "@public/assets/images/cases/xillion/stacking.jpg";

export const XILLION: ICase = {
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
      ru: 3_500_000,
      en: 50_000,
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
};
