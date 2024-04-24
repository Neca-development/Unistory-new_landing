import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import gasmonstersBanner from "@public/assets/images/cases/gas-monsters/banner.jpg";
import gasmonstersBannerMob from "@public/assets/images/cases/gas-monsters/banner_mob.jpg";
import gasmonstersImage1 from "@public/assets/images/cases/gas-monsters/modern.jpg";
import gasmonstersImage2 from "@public/assets/images/cases/gas-monsters/random.jpg";
import gasmonstersScheme from "@public/assets/images/cases/gas-monsters/scheme.jpg";
import gasmonstersThumb from "@public/assets/images/cases/gas-monsters/thumb.jpg";
import gasmonstersThumbMob from "@public/assets/images/cases/gas-monsters/thumb_mob.jpg";

export const GAS_MONSTERS: ICase = {
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
  metaTitle: {
    en: "Gamified NFT collection Gas Monsters",
    ru: "Геймифицированная NFT-коллекция Gas Monsters",
  },
  metaDescription: {
    en: "The main goal of the project is to develop a minting website for the NFT collection, where users can buy NFTs and then upgrade them for the gas they spend on Ethereum network.",
    ru: "Основная цель проекта — разработка минтинг вебсайта для NFT коллекции, где пользователи могут приобрести NFT, а затем модернизировать их за потраченные газ комиссии в сети Ethereum.",
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "bitcoin"],
  textColor: "black",
  technologies: [
    TECHNOLOGIES.react,
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.solidity,
    TECHNOLOGIES.node,
    TECHNOLOGIES.chainlink,
  ],
  thumbnail: {
    desktop: gasmonstersThumb.src,
    mob: gasmonstersThumbMob.src,
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
      ru: 3_000_000,
      en: 42_000,
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
        ru: "CEO",
      },
      company: "«Consensus-base Inc.»",
      photo: "",
    },
    text: {
      en: "«Unistory performed the work professionally: they provided a schedule of work according to the estimate and adhered to it without delays. They were available for consultations and showed flexibility regarding ambiguous specifications and advanced technologies. Thanks to the Unistory developers, we were able to implement a complex technical product concept. We would definitely like to continue working with this company in the future».",
      ru: "«Unistory выполнили работу профессионально: представили график работ согласно смете и следовали ему без задержек. Они были доступны для консультаций. Проявляли гибкость в отношении неоднозначных спецификаций и передовых технологий. Благодаря разработчикам Unistory у нас получилось реализовать сложную техническую концепцию продукта. Мы бы хотели продолжить совместную работу с этой компанией в будущем».",
    },
  },
  team: [
    TEAM.alexanderAksenov,
    TEAM.daniilSemenov,
    TEAM.yanSofronov,
    TEAM.nikitaBobkov,
    TEAM.maksimKlimchenko,
    TEAM.andreyBarabanov,
    TEAM.danilaSkablov,
  ],
};
