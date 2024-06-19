import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";

import udbaraPreview from "@public/assets/images/cases/udbara/preview-big.jpg";
import udbaraPreviewHi from "@public/assets/images/cases/udbara/preview-big-hires.jpg";
import udbaraPreviewMob from "@public/assets/images/cases/udbara/preview-square.jpg";
import udbaraPlatformRu from "@public/assets/images/cases/udbara/platform-ru.jpg";
import udbaraPlatformEn from "@public/assets/images/cases/udbara/platform-en.jpg";
import udbaraMinRu from "@public/assets/images/cases/udbara/min-ru.jpg";
import udbaraMinEn from "@public/assets/images/cases/udbara/min-en.jpg";
import udbaraHowRu from "@public/assets/images/cases/udbara/how-ru.jpg";
import udbaraHowEn from "@public/assets/images/cases/udbara/how-en.jpg";
import udbaraDownloadRu from "@public/assets/images/cases/udbara/download-ru.jpg";
import udbaraDownloadEn from "@public/assets/images/cases/udbara/download-en.jpg";
import udbaraAppRu from "@public/assets/images/cases/udbara/app-ru.jpg";
import udbaraAppEn from "@public/assets/images/cases/udbara/app-en.jpg";
import udbaraAiRu from "@public/assets/images/cases/udbara/ai-ru.jpg";
import udbaraAiEn from "@public/assets/images/cases/udbara/ai-en.jpg";

export const UDBARA: ICase = {
  links: [
    {
      label: "App Store",
      link: "https://apps.apple.com/ru/app/udbara-%D8%A3%D8%B6%D8%A8%D8%A7%D8%B1%D8%A9/id6447759146",
      iconName: "appStore",
    },
    {
      label: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.app.udbara&hl=sr_Latn",
      iconName: "googlePlay",
    },
  ],
  title: {
    en: "Udbara",
    ru: "Udbara",
  },
  id: "udbara",
  heroTitle: {
    en: "Udbara App — Telemedicine with AI-Driven Blood Test Analysis",
    ru: "Приложение Udbara — телемедицина с AI-расшифровкой анализов крови",
  },
  categories: {
    en: ["AI-Integrated Telemedicine"],
    ru: ["Телемедицина с AI-интеграцией"],
  },
  metaTitle: {
    en: "AI-Integrated Telemedicine Application",
    ru: "Телемедицинское приложение с интеграцией искусственного интеллекта",
  },
  metaDescription: {
    en: "At Unistory, we have developed an application for residents of Arab countries who want access to high-quality medical services from the best specialists.",
    ru: "Компания Unistory разработала мобильное приложение для жителей арабских стран, которые хотят получить доступ к высококлассным медицинским услугам.",
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [TECHNOLOGIES.java, TECHNOLOGIES.reactNative, TECHNOLOGIES.angular],
  thumbnail: {
    desktop: udbaraPreview.src,
    mob: udbaraPreview.src,
  },
  heroBanner: {
    desktop: {
      en: udbaraPreviewHi.src,
      ru: udbaraPreviewHi.src,
    },
    mob: {
      en: udbaraPreviewMob.src,
      ru: udbaraPreviewMob.src,
    },
  },
  description: {
    en: "Granting the residents of Arab countries an opportunity to receive medical consultations from European and American doctors.",
    ru: "Создать инструмент, благодаря которому жители арабских стран смогут получить медицинские консультации от европейских и американских докторов.",
  },
  params: {
    budget: {
      ru: 3_000_000,
      en: 30_000,
    },
    period: 6,
    year: "2024",
  },
  main: [
    {
      title: {
        en: "How the Idea for the App Came About",
        ru: "Как родилась идея приложения",
      },
      text: [
        {
          text: {
            en: "Our client, Abdullah Chahin, is an American professor of medicine and a human rights advocate. Dr. Abdullah's mission is to assist Arabic-speaking people worldwide.",
            ru: "Наш клиент — Абдулла Чахин, американский профессор медицины и правозащитник родом с Ближнего Востока. Миссия доктора Абдуллы — помощь арабоязычным людям со всего мира.",
          },
        },
        {
          text: {
            en: "We proposed to the client to develop an app where users can seek consultations from top-tier medical specialists. An additional feature of the project is AI integration for interpreting lab test results.",
            ru: "Мы предложили клиенту разработать приложение, где пользователи смогут обратиться за консультацией к медицинским специалистам высшего класса. Вишенкой на торте стала AI-интеграция для расшифровки результатов анализов.",
          },
        },
      ],
      banner: {
        en: udbaraAppEn.src,
        ru: udbaraAppRu.src,
      },
    },
    {
      title: {
        en: "Preparation for Development",
        ru: "Подготовка к разработке",
      },
      text: [
        {
          text: {
            en: "Before creating the mockups, we meticulously planned the user journey. We made assumptions using the How Might We (HMW) methodology and solved several dozen problems during the design phase.",
            ru: "Перед тем, как рисовать макеты, мы детально продумали путь пользователя. Сделали предположения по методологии How Might We (HMW) и решили несколько десятков проблем еще на этапе проектирования.",
          },
        },
      ],
      banner: {
        en: udbaraHowEn.src,
        ru: udbaraHowRu.src,
      },
    },
    {
      title: {
        en: "App Structure and Functionality",
        ru: "Структура и работа приложения",
      },
      text: [
        {
          text: {
            en: "The app has three main sections for the patient: the home page, 'Medical Record,' and 'Consultations.' On the home page, we implemented a search function for documents and records.",
            ru: "В приложении три основных раздела для пациента: главная страница, «Медицинская карточка» и «Консультации». На главной странице мы реализовали поиск по документам и записям.",
          },
        },
      ],
      banner: {
        en: udbaraMinEn.src,
        ru: udbaraMinRu.src,
      },
    },
    {
      title: {
        en: "How Consultations Work",
        ru: "Как устроены консультации",
      },
      text: [
        {
          text: {
            en: "Consultations take place in a text chat format, where patients and specialists can share documents and images. After the consultation, the patient receives a detailed final report from the doctor.",
            ru: "Консультация проходит в формате текстового чата, где пациент и специалист могут делиться документами и изображениями. После консультации пациент получает от врача подробный финальный отчет.",
          },
        },
      ],
      banner: {
        en: udbaraPlatformEn.src,
        ru: udbaraPlatformRu.src,
      },
    },
    {
      title: {
        en: "AI Integration for Lab Test Analysis",
        ru: "AI-интеграция для расшифровки анализов",
      },
      text: [
        {
          text: {
            en: "Users can upload their medical test results and receive an interpretation. To implement this functionality, we used the Tesseract AI model.",
            ru: "Пользователь может загрузить результаты медицинских анализов и получить их расшифровку. Для реализации этого функционала мы воспользовались AI-моделью Tesseract.",
          },
        },
      ],
      banner: {
        en: udbaraAiEn.src,
        ru: udbaraAiRu.src,
      },
    },
    {
      title: {
        en: "Monetization Scheme",
        ru: "Схема монетизации",
      },
      text: [
        {
          text: {
            en: "Cloud storage is a resource that costs money, so each user has a limited amount of storage space. Subscription payments allow you to increase your storage capacity.",
            ru: "Место в облаке — это ресурс, который стоит денег, поэтому у каждого пользователя есть лишь ограниченное место для хранения данных. Оплата подписки позволяет увеличить объем вашего хранилища.",
          },
        },
        {
          text: {
            en: "Users pay separately for each consultation with doctors. Medical specialists receive a percentage of each consultation conducted.",
            ru: "Пользователи оплачивают каждую консультацию с докторами отдельно. Медицинские специалисты получают процент от каждой проведенной консультации.",
          },
        },
      ],
      banner: {
        en: udbaraDownloadEn.src,
        ru: udbaraDownloadRu.src,
      },
    },
    {
      title: {
        en: "What We Plan to Do Next",
        ru: "Что мы планируем сделать еще",
      },
      text: [
        {
          text: {
            en: "To help users find the right specialist, we are working on further integration with neural networks. Integration with a large language model like ChatGPT will allow us to create an AI assistant capable of helping users at any time.",
            ru: "Чтобы помочь пользователю найти нужного специалиста, проводим дополнительную интеграцию с нейросетями. Интеграция с большой языковой моделью, такой как ChatGPT, позволит создать AI-ассистента, способного оказать помощь пользователю в любой момент.",
          },
        },
      ],
    },
    {
      title: {
        en: "Where to Download the App",
        ru: "Где скачать приложение",
      },
      text: [
        {
          text: {
            en: "The app is available on marketplaces, and you can explore its features right now on your smartphone:",
            ru: "Приложение загружено на маркетплейсы, и вы можете изучить функционал прямо сейчас на своем смартфоне:",
          },
        },
      ],
    },
  ],
  team: [TEAM.alexanderRusakov, TEAM.peterGurin, TEAM.andreyBabenkov],
};
