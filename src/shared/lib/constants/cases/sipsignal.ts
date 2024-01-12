import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import sipsignalImage3 from "@public/assets/images/cases/sipsignal/admin.jpg";
import sipsignalBanner from "@public/assets/images/cases/sipsignal/banner.jpg";
import sipsignalBannerMob from "@public/assets/images/cases/sipsignal/banner_mob.jpg";
import sipsignalClient from "@public/assets/images/cases/sipsignal/bogdan.jpg";
import sipsignalImage2 from "@public/assets/images/cases/sipsignal/efax.jpg";
import sipsignalLogo from "@public/assets/images/cases/sipsignal/logo.png";
import sipsignalThumb from "@public/assets/images/cases/sipsignal/thumb.jpg";
import sipsignalThumbMob from "@public/assets/images/cases/sipsignal/thumb_mob.jpg";
import sipsignalImage1 from "@public/assets/images/cases/sipsignal/web.jpg";

export const SIPSIGNAL: ICase = {
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
    desktop: sipsignalThumb.src,
    mob: sipsignalThumbMob.src,
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
      ru: 1_400_000,
      en: 20_000,
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
    TEAM.vladislavKiribyatev,
  ],
};
