import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import personalImage1 from "@public/assets/images/cases/personal/integration.jpg";
import personalImage3 from "@public/assets/images/cases/personal/messenger.jpg";
import personalPromo from "@public/assets/images/cases/personal/promo.jpg";
import personalPromoMob from "@public/assets/images/cases/personal/promo_mob.jpg";
import personalScheme from "@public/assets/images/cases/personal/scheme.jpg";
import personalImage2 from "@public/assets/images/cases/personal/templates.jpg";

export const PERSONAL: ICase = {
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
  metaTitle: {
    en: "Personal — multi-platform HR application",
    ru: "Персонал — мультиплатформенное HR-приложение",
  },
  metaDescription: {
    en: "HR process optimization: we aggregated several popular job search platforms and compiled all vacancies on one platform. The service allows reducing HR efforts and optimizing hiring processes.",
    ru: "Оптимизация HR-процессов: мы агрегировали несколько популярных площадок по поиску работы и собрали все вакансии на одной платформе. Сервис позволяет сократить трудозатраты эйчаров и оптимизировать бизнес-процессы найма.",
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
    en: "Optimization of HR processes: collecting all resumes on one digital platform, simplifying communication with candidates, reducing the labor costs of HR staff. In order to achieve a business goal we decided to develop an aggregator application integrated with popular job search platforms.",
    ru: "Оптимизация HR-процессов: собрать все резюме на одной цифровой платформе, упростить общение с кандидатами, уменьшить трудозатраты эйчаров. Чтобы решить бизнес-задачу, мы предложили заказчику разработать приложение-агрегатор, интегрированное со всеми популярными площадками поиска работы.",
  },
  params: {
    budget: {
      ru: 2_300_000,
      en: 30_000,
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
            en: "The initial issue the client encountered was the excessive time spent by HR personnel on reviewing resumes from various services. To streamline managerial costs, we integrated major platforms. Our solution enables HR managers to access candidate resumes from multiple services on a single screen within a unified application.",
            ru: "Первая проблема, которая стояла перед клиентом — эйчары тратят слишком много времени на просмотр резюме из разных сервисов. Чтобы оптимизировать трудозатраты менеджеров, мы провели интеграцию крупнейших платформ. Наше решение позволяет эйчарам смотреть резюме кандидатов из нескольких сервисов на одном экране, в одном приложении.",
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
            en: "The second objective is to automate responses to candidates who have submitted their resumes. We have devised a system that allows any HR personnel within the application to create personalized response templates. To engage with a candidate, just click the 'Invite to Interview' button. The template can be easily edited if necessary.",
            ru: "Вторая задача — автоматизация ответов кандидатам, которые прислали свои резюме. Мы разработали систему, благодаря которой любой эйчар может создавать кастомные шаблоны ответа в приложении. Чтобы ответить соискателю, достаточно нажать одну кнопку «Пригласить на интервью». При необходимости шаблон легко отредактировать. ",
          },
        },
      ],
      banner: personalImage2.src,
    },
    {
      title: {
        en: "Built-in chat to display messages from HR services",
        ru: "Встроенный чат для сообщений из других сервисов",
      },
      text: [
        {
          text: {
            en: "The application aggregates not only candidates' resumes but also their messages from various platforms. We've developed an integrated chat where managers can communicate with candidates without leaving the application. Applicants send messages from various services, and the manager can respond to them without leaving the \"Personal\" interface.",
            ru: "Приложение агрегирует не только резюме кандидатов, но и их сообщения из разных площадок. Разработали встроенный чат, внутри которого менеджеры могут общаться с кандидатами, не покидая приложения. Соискатели пишут сообщения из разных сервисов, а менеджер отвечает всем, не выходя из «Персонала». ",
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
            en: 'We\'ve analyzed over 10,000 job listings and, through statistical analysis, compiled the most commonly encountered requirements. Now, the HR specialist creating a job listing within the "Personal" application can utilize smart tips to prepare the advertisement.',
            ru: "Мы разобрали более 10 0000 вакансий и с помощью статистического анализа собрали требования, которые встречаются чаще других. Теперь эйчар, который составляет вакансию внутри «Персонала», может использовать умные подсказки для подготовки объявления.",
          },
        },
        {
          subtitle: {
            en: "Placing vacancies in different services",
            ru: "Размещение вакансий в разных сервисах",
          },
          text: {
            en: "We've developed a unified job posting interface. Managers only need to fill out the job listing once within the application, and it will instantly appear on popular services.",
            ru: "Разработали единый интерфейс размещения вакансии. Менеджеру достаточно один раз заполнить вакансию внутри приложения, чтобы она сразу появилась в популярных сервисах.",
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
    TEAM.vladislavKiribyatev,
  ],
};
