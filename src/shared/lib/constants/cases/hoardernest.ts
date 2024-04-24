import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import hoarderBanner from "@public/assets/images/cases/hoarder/banner.jpg";
import hoarderBannerMob from "@public/assets/images/cases/hoarder/banner_mob.jpg";
import hoarderImage1Dark from "@public/assets/images/cases/hoarder/dark-data.jpg";
import hoarderImage3Dark from "@public/assets/images/cases/hoarder/dark-subscription.jpg";
import hoarderImageDark from "@public/assets/images/cases/hoarder/dark-vizualization.jpg";
import hoarderImage1 from "@public/assets/images/cases/hoarder/data.jpg";
import hoarderImage3 from "@public/assets/images/cases/hoarder/subscription.jpg";
import hoarderThumb from "@public/assets/images/cases/hoarder/thumb.jpg";
import hoarderThumbMob from "@public/assets/images/cases/hoarder/thumb_mob.jpg";
import hoarderImage2 from "@public/assets/images/cases/hoarder/vizualization.jpg";

export const HOARDER_NEST: ICase = {
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
  metaTitle: {
    en: "HoarderNest — an innovative NFT aggregator",
    ru: "HoarderNest — инновационный NFT-агрегатор",
  },
  metaDescription: {
    en: "For a crypto startup with a team from Tesla and eBay alumni, we have developed the HoarderNest service with comprehensive data aggregation and subsequent multi-level analysis. Our team has prepared and implemented the project architecture, where data is collected both on-chain and off-chain.",
    ru: "Для крипто-стартапа с командой из выходцев Tesla и eBay мы разработали сервис HoarderNest с комплексным агрегированием данных и их дальнейшим многоуровневым анализом. Наша команда подготовила и реализовала архитектуру проекта, при которой данные собираются как on-chain, так и off-chain способом.",
  },
  icons: ["monitor", "bitcoin"],
  params: {
    budget: {
      ru: 1_500_000,
      en: 22_000,
    },
    period: 5,
    year: 2022,
  },
  technologies: [
    TECHNOLOGIES.react,
    TECHNOLOGIES.nest,
    TECHNOLOGIES.postgresql,
    TECHNOLOGIES.solidity,
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
      en: "«We hired Unistory to develop a web app for blockchain and social media analytics. The developers provided me with a detailed outline of their work strategy right from the beginning of the project. The manager kept us informed of all the important details and discussed possible challenges with us in a timely manner. Thanks to this, the SaaS launch went smoothly and I never doubted it for a second while working with Unistory. It was a wonderful experience from start to finish!».",
      ru: "«Мы наняли Unistory, чтобы разработать веб-приложение для аналитики блокчейнов и социальных сетей. Разработчики детально расписали мне свою стратегию работы еще на старте проекта. Менеджер держал нас в курсе всех важных деталей и вовремя обсуждал с нами возможные челленджи. Благодаря этому запуск SaaS прошел гладко, и я ни секунды в этом не сомневался, работая с Unistory. Это был прекрасный опыт от начала до конца!».",
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
    TEAM.danilaSkablov,
  ],
};
