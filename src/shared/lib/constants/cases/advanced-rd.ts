import { ICase } from "@shared/lib/types";
import { TECHNOLOGIES } from "../technologies.constats";
import advancedRDBanner from "@public/assets/images/cases/advanced-rd/banner.jpg";
import advancedRDImage1 from "@public/assets/images/cases/advanced-rd/image-1.jpg";
import advancedRDImage2 from "@public/assets/images/cases/advanced-rd/image-2.jpg";
import advancedRDImage3 from "@public/assets/images/cases/advanced-rd/image-3.jpg";
import advancedRDThumb from "@public/assets/images/cases/advanced-rd/thumb.jpg";
import advancedRDThumbMob from "@public/assets/images/cases/advanced-rd/thumb_mob.jpg";

export const ADVANCED_RD: ICase = {
  title: "Advanced RD",
  id: "advanced-rd",
  projectUrl: "https://invest.unistory.app",
  projectUrlTitle: "www.invest.unistory.app",
  heroTitle: {
    en: "Advanced RD",
    ru: "Advanced RD",
  },
  categories: {
    en: ["Blockchain powered property investment platform"],
    ru: ["Платформа для инвестиций в недвижимость на базе блокчейна"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [
    TECHNOLOGIES.angular,
    TECHNOLOGIES.nest,
    TECHNOLOGIES.postgresql,
    TECHNOLOGIES.solidity,
  ],
  thumbnail: {
    desktop: advancedRDThumb.src,
    mob: advancedRDThumbMob.src,
  },
  heroBanner: {
    desktop: advancedRDBanner.src,
    mob: advancedRDBanner.src,
  },
  description: {
    en: "Development of a real estate investment platform with blockchain integration. The platform allows purchasing real estate assets in fractions alongside other investors. The service's employees take care of renting out the properties, while users can calmly receive dividends and withdraw them in fiat.",
    ru: "Разработка платформы для инвестиций в недвижимость с блокчейн-интеграцией. Площадка дает возможность купить объект недвижимости по частям вместе с другими инвесторами. О сдаче объектов в аренду позаботятся сотрудники сервиса, а пользователи могут спокойно получать дивиденды и выводить их в фиат.",
  },
  params: {
    budget: {
      ru: 10_000_000,
      en: 100_000,
    },
    period: 6,
    year: "2022-2023",
  },
  main: [
    {
      title: {
        en: "Assets, Smart Contracts, Stablecoin",
        ru: "Объекты, смарт-контракты, стейблкоин",
      },
      text: [
        {
          text: {
            en: "We have developed smart contracts for each real estate asset that appears on the platform. When a user tops up their balance and buys a part of the asset, they receive tokens from this smart contract. The token is a stablecoin pegged to the euro and serves as a guarantee of ownership rights.",
            ru: "Разработали смарт-контракты для каждого объекта недвижимости, который появляется на платформе. Когда пользователь пополняет баланс и покупает часть объекта, то получает токены этого смарт-контракта. Токен — стейблокоин, привязанный к евро, и служит гарантией права собственности.  ",
          },
        },
      ],
      banner: advancedRDImage1.src,
    },
    {
      title: {
        en: "Wallet and Personal Account",
        ru: "Кошелек и личный кабинет",
      },
      text: [
        {
          text: {
            en: "On the Wallet page, investors can track their earnings and withdraw them in fiat. For investor login authentication, we used the Know Your Customer (KYC) system and opted for Sumsub. During registration, the user provides their details, a photo of their ID, and undergoes video verification. This technology serves two functions: it addresses legal nuances and ensures user security.",
            ru: "На странице Wallet инвестор может следить за своими доходами и выводить их в фиат. Для авторизации в личный кабинет инвестора использовали систему Know your customer (KYC). Выбрали вариант Sumsub. Во время регистрации пользователь указывает свои данные, фото удостоверения личности и проходит подтверждение по видео. Эта технология несет две функции: решает юридические нюансы и гарантирует безопасность пользователя.",
          },
        },
      ],
      banner: advancedRDImage2.src,
    },
    {
      title: {
        en: "Advanced referral system",
        ru: "Продвинутая реферальная система",
      },
      text: [
        {
          text: {
            en: "We implemented a referral system, allowing users to collectively purchase real estate and subsequently receive dividends. It minimizes legal complexities and enables investment in real estate even with small amounts.",
            ru: "Внедрили реферальную систему, благодаря которой пользователи могут вместе купить недвижимость, а затем получать дивиденды. Минимум юридических сложностей и возможность инвестировать в недвижимость даже небольшие суммы.",
          },
        },
      ],
      banner: advancedRDImage3.src,
    },
    {
      title: {
        en: "Admin Panel",
        ru: "Админ-панель",
      },
      text: [
        {
          text: {
            en: "We developed an admin panel from scratch, allowing service employees to manage real estate assets, add them to the platform, and edit information. Additionally, smart contracts for assets are deployed in the admin panel simultaneously with the publication of real estate on the website.",
            ru: "Разработали с нуля админ-панель, где сотрудники сервиса могут управлять объектами недвижимости, добавлять их на площадку и редактировать информацию. Также в админ-панели выпускается смарт-контракт для объектов — одновременно с публикацией недвижимости на сайте. ",
          },
        },
      ],
    },
    {
      title: {
        en: "Outcome",
        ru: "Результат",
      },
      text: [
        {
          text: {
            en: "We have implemented extensive blockchain integration to make investments a straightforward and transparent process. We have taken on all functionality from smart contracts to creating stablecoins. Furthermore, we have developed a convenient admin panel for employees, while users have been provided with the option of authentication via KYC.",
            ru: "Мы внедрили обширную блокчейн-интеграцию, чтобы сделать инвестиции легким и прозрачным процессом. Взяли на себя весь функционал от смарт-контрактов до создания стейблкоина. Кроме того, разработали удобную админ-панель для сотрудников, а пользователям предоставили возможность авторизации через KYC",
          },
        },
      ],
      sectionClassnames: "!pb-[7.5rem] !t-xs:pb-16",
    },
  ],
};
