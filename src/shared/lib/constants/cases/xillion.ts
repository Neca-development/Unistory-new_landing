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
    en: "Development of the investment DAO ecosystem in Polygon and BSC blockchain networks: provided platform users with new investment opportunities, created a separate P2E game module with quizzes, and integrated custom staking infrastructure into the existing decentralized community.",
    ru: "Разработка инвестиционной DAO-экосистемы в сетях Polygon и BSC: дать пользователям площадки новые инвестиционные возможности; создать отдельный игровой модуль с P2E-викторинами; интегрировать кастомную стейкинг-инфраструктуру в существующее децентрализованное сообщество.",
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
            en: "Xillion is a crypto investment platform based in San Francisco. The main idea of the ecosystem is to help every investor earn money and build their financial independence.",
            ru: "Xillion — инвестиционная крипто-площадка с офисом в Сан-Франциско. Главная идея экосистемы — помочь каждому инвестору заработать и построить свою финансовую независимость.",
          },
        },
        {
          text: {
            en: "One of the tools that the service uses to achieve its goal is Play2Earn. In an effort to improve the product and respond to demand, the creators of Xillion decided to prepare a separate platform dedicated to blockchain quizzes.",
            ru: "Один из инструментов, который использует сервис для достижения своей цели — Play2Earn. В стремлении улучшить продукт и отреагировать на спрос создатели Xillion приняли решение подготовить отдельную платформу, посвященную блокчейн-викторинам.",
          },
        },
        {
          text: {
            en: "Together with the platform owners, we decided to give users another opportunity to earn money: take surveys and receive a reward for participation. The Unistory team took on the development and integration of the platform in the form of a separate module running on the Polygon blockchain network.",
            ru: "Вместе с владельцами площадки мы решили дать пользователям еще одну возможность заработать: пройти опросы и получить вознаграждение за участие. Команда Unistory взяла на себя разработку и интеграцию платформы в виде обособленного модуля, работающего в сети Polygon.",
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
            en: "The user invests in projects promoted on Xillion and then receives the project's tokens XIL. A separate smart contract of the platform, which is the basis of the entire protocol, is responsible for their distribution. It also automatically creates smart contracts for new projects that distribute unique tokens of incubated DAO products.",
            ru: "Пользователь инвестирует в размещенные на Xillion проекты, а затем получает токены проекта — XIL. За их дистрибуцию отвечает отдельный смарт-контракт платформы, который является основой всего протокола. Он также автоматически создает смарт-контракты новых проектов, которые распределяют уникальные токены инкубационных DAO-продуктов.",
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
            en: "The platform offers an on-chain voting function for projects that are posted and promoted by users. We have modernized the logic of this process: now every platform user who has at least 10k XIL tokens in their account can propose their idea to XillionDAO members.",
            ru: "На площадке доступна функция on-chain голосования за проекты, которые размещают и продвигают пользователи. Мы провели модернизацию логики этого процесса: теперь каждый пользователь платформы, у которого не менее 10 000 XIL-токенов на счету, может предложить свою идею участникам XillionDAO. ",
          },
        },
        {
          text: {
            en: "The Unistory team implemented the voting process using a staking smart contract: users block XIL tokens, which will be returned to them as a percentage of the investment if the project is successful.",
            ru: "Команда Unistory реализовала процесс голосования при помощи стейкинг смарт-контракта: пользователи блокируют XIL-токены, которые вернутся им в виде процентов от инвестиций, если проект окажется успешным.",
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
            en: "For storing project history, voting results, number of investments, and information about investors, we used the TheGraph protocol, which can simultaneously work with both the old and the updated architecture of blockchain projects.",
            ru: "Для сохранения истории проектов, результатов голосования, количества инвестиций и информации об инвесторах мы использовали протокол TheGraph, который может одновременно работать как со старой, так и с обновленной архитектурой блокчейн-проектов.",
          },
        },
        {
          text: {
            en: "Xillion is deployed simultaneously on two blockchain networks: Binance Smart Chain and Polygon. We differentiated access to sections of the platform and used the capabilities of the ether.js library to make the transition of users from one network to another more convenient.",
            ru: "Xillion размещен одновременно сразу на двух блокчейн сетях: Binance Smart Chain и Polygon. Мы разграничили доступ к разделам сайта и использовали возможности библиотеки ether.js, чтобы сделать переход пользователей от одной сети к другой более удобным. ",
          },
        },
        {
          text: {
            en: "Also, we used a proxy architecture in the blockchain part of the project, which makes it easy to scale and add new modules in the future.",
            ru: "Также использовали прокси-архитектуру для blockchain части проекта. Это позволит Xillion с легкостью масштабировать свой продукт и в будущем добавлять все новые модули.",
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
