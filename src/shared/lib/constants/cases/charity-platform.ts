import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import charityplatformImage3 from "@public/assets/images/cases/charityplatform/admin.jpg";
import charityplatformBanner from "@public/assets/images/cases/charityplatform/banner.jpg";
import charityplatformBannerMob from "@public/assets/images/cases/charityplatform/banner_mob.jpg";
import charityplatformImage2 from "@public/assets/images/cases/charityplatform/blocks.jpg";
import charityplatformImage1 from "@public/assets/images/cases/charityplatform/dashboard.jpg";
import charityplatformThumb from "@public/assets/images/cases/charityplatform/thumb.jpg";
import charityplatformThumbMob from "@public/assets/images/cases/charityplatform/thumb_mob.jpg";

export const CHARITY_PLATFORM: ICase = {
  title: "Charity Platform",
  id: "charityplatform",
  heroTitle: {
    en: "Development of Charity Platform",
    ru: "Благотворительная платформа Адрес.Люди",
  },
  categories: {
    en: ["Development of Charity Platform"],
    ru: ["Благотворительная платформа Адрес.Люди"],
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
      ru: 1_300_000,
      en: 18_000,
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
    TEAM.kirillElizarov,
  ],
};
