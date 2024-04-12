import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import flatspaceImage2 from "@public/assets/images/cases/flatspace/actions.jpg";
import flatspaceImage1 from "@public/assets/images/cases/flatspace/auction.jpg";
import flatspaceBanner from "@public/assets/images/cases/flatspace/banner.jpg";
import flatspaceBannerMob from "@public/assets/images/cases/flatspace/banner_mob.jpg";
import flatspaceImage3 from "@public/assets/images/cases/flatspace/choise.jpg";
import flatspaceThumb from "@public/assets/images/cases/flatspace/thumb.jpg";
import flatspaceThumbMob from "@public/assets/images/cases/flatspace/thumb_mob.jpg";

export const FLATSPACE: ICase = {
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
  metaTitle: {
    en: "Development of the NFT marketplace FlatSpace",
    ru: "Разработка NFT-маркетплейса FlatSpace",
  },
  metaDescription: {
    en: "High-end platform which encourage all types of artists from entry to expert levels. Smart contract ensure transparency and honesty and microservices architecture provide seamless user experience at all stages.",
    ru: "Высококлассная платформа, которая поощряет все типы художников — от начального до экспертного уровня. Смарт-контракт обеспечивает прозрачность и честность, а архитектура микросервисов обеспечивает беспрепятственный пользовательский опыт на всех этапах.",
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
      ru: 2_000_000,
      en: 25_000,
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
};
