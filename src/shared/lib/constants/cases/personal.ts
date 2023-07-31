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
    en: "Our team had to develop an HR aggregator application that helps collect all resumes in one place, facilitates communication with candidates and has integration with popular job search platforms.",
    ru: "Нашей команде предстояло разработать HR приложение-агрегатор, которое помогает собирать все резюме в  одном месте, облегчает общение с кандидатами и имеет интеграцию с популярными платформами для поиска работы.",
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
            en: "To reduce the time it takes to browse employee search sites, and to bring all resumes together, we decided to aggregate the existing platforms into one application. In total, our team has integrated six major platforms, including HH.ru and Avito. Our integrations allow app users to seamlessly receive candidate resumes from multiple sources at once.",
            ru: "Чтобы сократить время на просмотр сайтов по поиску сотрудников, и собрать все резюме воедино – мы решили аггрегировать существующие площадки в одном приложении. Всего наша команда интегрировала 6 крупнейших платформ, включая HH.ru и Авито. Наши интеграции позволяют пользователям приложения бесшовно получать резюме кандидатов из сразу нескольких источников.",
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
            en: "We created a system to create customizable templates cards that users can send to job candidates. This solution significantly saves time in processing a large number of incoming resumes, and this is important, because optimization is the first priority for any business.",
            ru: "Мы создали систему по созданию кастомизируемых карточек-шаблонов, которые пользователи могут отправлять кандидатам на вакансию. Данное решение значительно экономит время на обработку большого количества входящих предложений, и это важно, ведь оптимизация  является первоочередной задачей для любого бизнеса.",
          },
        },
      ],
      banner: personalImage2.src,
    },
    {
      title: {
        en: "Built-in chat to display messages from HR services",
        ru: "Встроенный чат для вывода сообщений из других сервисов",
      },
      text: [
        {
          text: {
            en: "The app collects not only candidates resumes, but also their messages from various services. To make this process even more convenient, we created a built-in chat room where users can communicate with future employees from all necessary sources.",
            ru: "Приложение собирает не только резюме кандидатов, но и их сообщения с различных площадок. Чтобы сделать этот процесс еще более удобным, мы создали встроенный чат, в котором пользователи могут общаться с будущими работниками из всех необходимых источников.",
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
            en: "We parsed over ten thousand different job ads and used statistical analysis to collect the most common requirements. This made it possible to compile smart tips for all kinds of jobs.",
            ru: "Мы разобрали более десяти тысяч различных объявлений о работе и с помощью статистического анализа собрали наиболее часто встречающиеся требования. Это позволило составить умные подсказки для всех видов вакансий.",
          },
        },
        {
          subtitle: {
            en: "Placing vacancies in different services",
            ru: "Размещение вакансий в разных сервисах",
          },
          text: {
            en: "We have unified job requirements across all services, which allows the users to fill out only the app’s form.",
            ru: "Мы унифицировали требования к вакансиям во всех сервисах, что позволяет нам предоставить нашим пользователям возможность заполнять только нашу форму.",
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
    TEAM.andreyPaskarenko,
    TEAM.andreyBabenkov,
    TEAM.alekseyKlimenko,
    TEAM.ernestMironov,
    TEAM.kirillElizarov,
    TEAM.vladislavKiribyatev,
  ],
};
