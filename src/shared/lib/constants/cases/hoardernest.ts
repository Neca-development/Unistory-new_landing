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
};
