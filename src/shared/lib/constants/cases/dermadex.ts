import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import dermadexBanner from "@public/assets/images/cases/dermadex/banner.jpg";
import dermadexImage1EN from "@public/assets/images/cases/dermadex/killer-feature-en.jpg";
import dermadexImage1RU from "@public/assets/images/cases/dermadex/killer-feature-ru.jpg";
import dermadexImage2EN from "@public/assets/images/cases/dermadex/monetization-en.jpg";
import dermadexImage2RU from "@public/assets/images/cases/dermadex/monetization-ru.jpg";
import dermadexImage3 from "@public/assets/images/cases/dermadex/kickoff-en.jpg";
import dermadexImage4EN from "@public/assets/images/cases/dermadex/dataset-en.jpg";
import dermadexImage4RU from "@public/assets/images/cases/dermadex/dataset-ru.jpg";
import dermadexImage5EN from "@public/assets/images/cases/dermadex/diagnostic-en.jpg";
import dermadexImage5RU from "@public/assets/images/cases/dermadex/diagnostic-ru.jpg";
import dermadexImage6EN from "@public/assets/images/cases/dermadex/appointment-en.jpg";
import dermadexImage6RU from "@public/assets/images/cases/dermadex/appointment-ru.jpg";
import dermadexImage7EN from "@public/assets/images/cases/dermadex/hipaa-en.jpg";
import dermadexImage7RU from "@public/assets/images/cases/dermadex/hipaa-ru.jpg";
import dermadexThumb from "@public/assets/images/cases/dermadex/thumb.jpg";
import dermadexThumbMob from "@public/assets/images/cases/dermadex/thumb_mob.jpg";

export const DERMADEX: ICase = {
  title: "Dermadex",
  id: "dermadex",
  heroTitle: {
    en: "Dermadex App: photo-based AI dermatologic diagnosis",
    ru: "Приложение Dermadex: определяем болезни кожи по фото с помощью AI",
  },
  categories: {
    en: ["Photo-based AI skin diagnosis"],
    ru: ["Определяем болезни кожи по фото с помощью AI"],
  },
  metaTitle: {
    en: "Dermadex App: photo-based AI dermatologic diagnosis",
    ru: "Dermadex: определяем болезни кожи по фото с помощью AI",
  },
  metaDescription: {
    en: "Together with our dermatologist clients from Canada, we have developed an application that identifies dermatological diagnoses based on photos of problematic skin. Our specially trained CLIP neural network allows identifying 30 groups of different diseases and providing recommendations to the user.",
    ru: "Вместе с нашими клиентами-дерматологами из Канады мы разработали приложение, определяющее дерматологический диагноз по фото проблемной кожи. Специально обученная нами нейросеть CLIP позволяет определить 30 групп различных заболеваний и помочь ему записаться к специалисту.",
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [
    TECHNOLOGIES.reactNative,
    TECHNOLOGIES.csharp,
    TECHNOLOGIES.python,
    TECHNOLOGIES.postgresql,
    TECHNOLOGIES.openai,
    TECHNOLOGIES.react,
  ],
  thumbnail: {
    desktop: dermadexThumb.src,
    mob: dermadexThumbMob.src,
  },
  heroBanner: {
    desktop: dermadexBanner.src,
    mob: dermadexBanner.src,
  },
  description: {
    en: "Rami immigrated to Canada from Iran many years ago. Back in his homeland, he left his business partner - Dr. Khoddami, a professional dermatologist. Together, they decided to develop an application where a neural network would determine dermatological diagnosis based on photos of problematic skin - and entrusted us with this task. The goal of the application is to help patients worldwide treat skin conditions.",
    ru: "Рами иммигрировал в Канаду из Ирана много лет назад. На Родине у него остался партнер по бизнесу — доктор Худами, профессиональный дерматолог. Вместе они решили сделать приложение, где нейросеть будет определять дерматологический диагноз по фото проблемной кожи — и доверили эту задачу нам. Цель приложения — помочь пациентам по всему миру лечить кожные заболевания.",
  },
  params: {
    budget: {
      ru: 4_000_000,
      en: 44_000,
    },
    period: 6,
    year: "2023",
  },
  main: [
    {
      title: {
        en: "Killer feature – AI",
        ru: "Киллер-фича — AI",
      },
      text: [
        {
          text: {
            en: "Why artificial intelligence? Firstly, it's the only way to provide a diagnosis based on a photograph of a problematic skin area. Neural networks enable automating the process and offering users basic recommendations. Secondly, utilizing AI as a telemedicine tool is a powerful PR move for promoting the application.",
            ru: "Почему искусственный интеллект? Во-первых, это единственный способ дать диагноз по фотографии проблемного участка кожи. Нейросеть позволяет автоматизировать процесс и дать пользователям базовые рекомендации. Во-вторых, использовать AI как инструмент телемедицины — мощный пиар-ход для продвижения приложения.",
          },
        },
      ],
      banner: {
        en: dermadexImage1EN.src,
        ru: dermadexImage1RU.src,
      },
    },
    {
      title: {
        en: "Concept",
        ru: "Концепция",
      },
      text: [
        {
          text: {
            en: "At the outset, Rami and Dr. Khoddami defined the main user scenario:",
            ru: "Рами и доктор Худами на старте определили главный пользовательский сценарий:",
          },
        },
        {
          text: {
            en: "1. The user with a problematic skin area takes a photo of it and uploads it to the application.",
            ru: "1. Пользователь с проблемным участком кожи делает его фотографию и загружает в приложение.",
          },
        },
        {
          text: {
            en: "2. Artificial intelligence provides a preliminary diagnosis, identifies the condition, and recommends treatment options.",
            ru: "2. Искусственный интеллект ставит первичный диагноз — определяет заболевание и рекомендует пути лечения. ",
          },
        },
        {
          text: {
            en: "3. Immediately afterward, the user can schedule a consultation with a professional dermatologist.",
            ru: "3. Сразу же после этого пользователь может записаться на консультацию к профессиональному дерматологу.",
          },
        },
      ],
    },
    {
      title: {
        en: "Monetization",
        ru: "Монетизация",
      },
      text: [
        {
          text: {
            en: 'The application is free: patients receive recommendations from artificial intelligence. The primary monetization model involves dermatologists who register on the platform and confirm their qualifications paying a small commission for each paid consultation. Additionally, Rami has planned other monetization options: standard in-app advertising and sponsored articles in the "Helpful Materials" section.',
            ru: "Приложение бесплатное: пациенты получают рекомендации от искусственного интеллекта. Основной вариант монетизации: дерматолог, который зарегистрировался на платформе и подтвердил свою квалификацию, будет отдавать небольшую комиссию с каждой платной консультации. Запланировали и другие опции монетизации: стандартная реклама в приложениях и спонсированные статьи в разделе «Полезные материалы».",
          },
        },
      ],
      banner: {
        en: dermadexImage2EN.src,
        ru: dermadexImage2RU.src,
      },
    },
    {
      title: {
        en: "Project Kickoff",
        ru: "Начало проекта",
      },
      text: [
        {
          text: {
            en: "The task is ambitious — to turn the neural network into a professional diagnostician for skin diseases. With this in mind, Rami turned to Upwork, and here comes Unistory into play!",
            ru: "Задача амбициозная — превратить нейросеть в профессионального диагноста по кожным заболеваниям. С ней Рами пошел на Upwork, и тут в игру вступаем мы, Unistory! ",
          },
        },
        {
          text: {
            en: "Our managers have worked out the project structure and selected technologies: for the web version, we decided to use React, for the mobile application — React Native, and to implement the overall backend in C#.",
            ru: "Наши менеджеры проработали структуру проекта и подобрали технологии: для веб-версии решили использовать React, для мобильного приложения — React Native, а общий бэкенд реализовать на C#.",
          },
        },
        {
          text: {
            en: "Together with the client, we immediately agreed that our primary focus would be on finding datasets, selecting the appropriate AI model, and training it. Everything else comes later. First, we need a killer feature!",
            ru: "Вместе с заказчиком сразу определились, что в первую очередь сконцентрируемся на поиске датасетов, выборе нужной модели AI и ее обучении. Все остальное — потом. Сначала нам нужна киллер-фича! ",
          },
        },
      ],
      banner: dermadexImage3.src,
    },
    {
      title: {
        en: "Development of Proof of Concept",
        ru: "Разработка Proof of concept",
      },
      text: [
        {
          text: {
            en: "The first stage of development was the preparation of the Proof of Concept (PoC). We often deal with experimental projects, more frequently involving blockchain and AI technologies, which is why we have a dedicated R&D engineer for creating PoCs. It is this individual who tests the riskiest technical hypotheses, thereby saving money and time on the development of the entire product.",
            ru: "Первым этапом разработки стала подготовка Proof of concept (PoC). Мы часто работаем с экспериментальными проектами, еще чаще — на технологиях блокчейн и AI, поэтому для создания PoC у нас есть специальный сотрудник — R&D-инженер. Именно он проверяет самые рискованные технические гипотезы — а значит, экономит деньги и время на разработку всего продукта.",
          },
        },
        {
          text: {
            en: "At this stage, we decided that to test hypotheses and develop the Proof of Concept, it would be sufficient to train the neural network to identify six groups of diseases. The next task is to find data (datasets) for training the neural networks.",
            ru: "На этом этапе решили, что для проверки гипотез и разработки Proof of concept будет достаточно научить нейросеть определять шесть групп заболеваний. Следующая задача — найти данные (датасеты) для обучения нейросетей.",
          },
        },
      ],
      banner: { en: dermadexImage4EN.src, ru: dermadexImage4RU.src },
    },
    {
      title: {
        en: "Datasets and Testing",
        ru: "Датасеты и тестирование",
      },
      text: [
        {
          text: {
            en: "We explored open-source repositories and found 21 datasets. To our disappointment, there wasn't as much high-quality material in them as we had hoped. To address this issue, we decided to rely on zero-shot and few-shot testing.",
            ru: "Исследовали open-source репозитории, и нашли 21 датасет. К нашему разочарованию оказалось, что качественного материала в них не так много. Чтобы решить эту проблему, решили полагаться на zero-shot и few-shot при тестировании. ",
          },
        },
        {
          text: {
            en: "Developers tested several AI models and chose CLIP — a base model capable of classifying images, identifying objects within them, and generating text based on the images.",
            ru: "Разработчики протестировали несколько моделей AI, и выбрали CLIP — базовую модель, которая позволяет классифицировать изображения, находить на них объекты и генерировать текст на основе изображений.",
          },
        },
      ],
    },
    {
      title: {
        en: "Zero-shot and Fine-tuning",
        ru: "Zero-shot и fine-tuning",
      },
      text: [
        {
          text: {
            en: "1. Zero-shot: Evaluated the capabilities of models without prior training on datasets. This means that the model was tested on tasks or datasets it had not encountered before.",
            ru: "1. Zero-shot. Оценивали возможности моделей без предварительного обучения на датасетах. Это означает, что модель тестировалась на задачах или датасетах, с которыми до этого не имела дела. ",
          },
        },
        {
          text: {
            en: "2. Fine-tuning (few-shot): In this approach, models underwent additional training on our datasets.",
            ru: "2. Fine-tuning (few-shot). Здесь модели проходили дополнительное обучение на наших датасетах",
          },
        },
      ],
      banner: { en: dermadexImage5EN.src, ru: dermadexImage5RU.src },
    },
    {
      title: {
        en: "Development Outcome",
        ru: "Результат разработки",
      },
      text: [
        {
          text: {
            en: "The trained neural network achieved a 99% accuracy in diagnosis given high-quality photographs! We taught CLIP to identify over 60 different diseases grouped into six major categories: acne, psoriasis, rosacea, eczema, herpes, and vitiligo.",
            ru: "Обученная нейросеть выдала 99% точности диагноза при условии качественной фотографии! Научили CLIP находить 60+ разных заболеваний, объединенных в шесть больших групп: акне, псориаз, розацеа, экзема, герпес, витилиго.",
          },
        },
      ],
    },
    {
      title: {
        en: "Data Volume",
        ru: "Объем данных",
      },
      text: [
        {
          text: {
            en: "The main challenge faced by the developers remained consistent — a shortage of data and insufficiently high-quality datasets available in the public domain.",
            ru: "Главная проблема, с которой столкнулись разработчики, все та же — нехватка данных и недостаточно качественные датасеты из открытого доступа.",
          },
        },
        {
          text: {
            en: "The solution came in the form of data augmentation — we expanded the database by generating artificial data based on real ones. By introducing minor distortions into the images, we were able to significantly enhance the dataset for model training. We are currently continuing our search for datasets for training, with the goal of teaching CLIP to work with 30 disease groups.",
            ru: "Решением стала аугментация данных — мы расширили базу, сгенерировав искусственные данные на основе реальных. Добавив незначительные искажения в изображения, смогли существенно расширить базу для обучения модели. Сейчас продолжаем искать датасеты для обучения, цель — научить CLIP работать с 30 группами заболеваний. ",
          },
        },
      ],
      banner: { en: dermadexImage6EN.src, ru: dermadexImage6RU.src },
    },
    {
      title: {
        en: "HIPAA",
        ru: "Стандартизация HIPAA",
      },
      text: [
        {
          text: {
            en: "While our R&D engineer was working on the Proof of Concept, and managers were preparing the structure, the client was dealing with legal matters. Rami studied what the application should be like to pass HIPAA standardization for future launch in the USA. HIPAA certification indicates that the product meets security requirements regarding patient data.",
            ru: "Пока наш R&D-инженер работал над Proof of Concept, а менеджеры готовили структуру, заказчик занимался юридическими вопросами. Рами изучил, каким должно быть приложение, чтобы пройти стандартизацию HIPAA для будущего запуска в США.  HIPAA — сертификация, говорящая о том, что продукт удовлетворяет требованиям безопасности по отношению к данным пациентов.",
          },
        },
        {
          text: {
            en: "To obtain HIPAA certification, we preplanned logging everything: every user request must be recorded in the database. Information must be stored about all actions of patients, doctors, and administrators. However, nobody should have access to patient data.",
            ru: "Чтобы получить лицензию HIPAA, мы заранее проработали логирование всего и вся: каждый запрос пользователя должен записываться в базу данных. Информация должна сохраняться о всех действиях пациентов, врачей и администраторов. При этом доступ к данным о пациентах не должен иметь никто. ",
          },
        },
      ],
    },
    {
      title: {
        en: "Launch of the Application",
        ru: "Запуск приложения",
      },
      text: [
        {
          text: {
            en: "Rami is currently preparing to launch the application in Canada. After that, we plan to scale into the US and European markets. The launch will proceed gradually, as each country has its own heathcare nuances.",
            ru: "Рами сейчас готовит запуск приложения в Канаде. После этого планируем масштабироваться на рынке США и Европы. Запуск будет идти поэтапно, ведь в каждой стране свои нюансы здравоохранения. ",
          },
        },
      ],
      banner: { en: dermadexImage7EN.src, ru: dermadexImage7RU.src },
    },
  ],
  review: {
    author: {
      name: {
        en: "(c) Rami",
        ru: "(c) Рами",
      },
      position: {
        en: "",
        ru: "",
      },
      company: "Dermadex",
      photo: "",
    },
    text: {
      en: "«I posted a task on Upwork, and one of the responses was from the Unistory team. The company's portfolio impressed me: expertise in neural networks and computer vision, experience in the medical field. I immediately decided that these guys are perfect for us, and I was not mistaken: from that moment until now, everything has been amazing. Initially, Dr. Khoddami and I were not sure if we could implement our idea — but Unistory managed it».",
      ru: "«Я выложил задачу на Upwork, и один из откликов был от команды Unistory. Кейсы компании впечатлили меня: экспертиза в нейросетях и компьютерном зрении, опыт работы в медицинской сфере. Я сразу решил, что эти ребята нам отлично подходят, и не ошибся: с того момента и до сих пор все было потрясающе. Unistory полностью справились со сложной задачей, которую мы поставили».",
    },
  },
  team: [
    TEAM.daniilSemenovHead,
    TEAM.ilyaSmirnov,
    TEAM.alekseyChepurin,
    TEAM.yuriUmnov,
    TEAM.andreyBabenkovRN,
    TEAM.yanBortsov,
    TEAM.vladislavKiribyatev,
    TEAM.rostislavPetrov,
  ],
};
