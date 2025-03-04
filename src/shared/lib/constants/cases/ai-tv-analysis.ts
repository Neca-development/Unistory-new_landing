import { ICase } from "@shared/lib/types";
import { TECHNOLOGIES } from "@shared/lib/constants/technologies.constats";
import { TEAM } from "@shared/lib/constants/team";

import thumbnailDesktop from "@public/assets/images/cases/ai-tv-analysis/ai-tv-analysis-mobile-preview-1000.jpg";
import thumbnailMobile from "@public/assets/images/cases/ai-tv-analysis/ai-tv-analysis-mobile-preview-square.jpg";
import image01Desktop from "@public/assets/images/cases/ai-tv-analysis/desktop/ai-tv-analysis-desktop-01.jpg";
import image02Desktop from "@public/assets/images/cases/ai-tv-analysis/desktop/ai-tv-analysis-desktop-02.jpg";
import image03Desktop from "@public/assets/images/cases/ai-tv-analysis/desktop/ai-tv-analysis-desktop-03.jpg";
import image04Desktop from "@public/assets/images/cases/ai-tv-analysis/desktop/ai-tv-analysis-desktop-04.jpg";
import image05Desktop from "@public/assets/images/cases/ai-tv-analysis/desktop/ai-tv-analysis-desktop-05.jpg";
import image01Mobile from "@public/assets/images/cases/ai-tv-analysis/mobile/ai-tv-analysis-mobile-01.jpg";
import image02Mobile from "@public/assets/images/cases/ai-tv-analysis/mobile/ai-tv-analysis-mobile-02.jpg";
import image03Mobile from "@public/assets/images/cases/ai-tv-analysis/mobile/ai-tv-analysis-mobile-03.jpg";
import image04Mobile from "@public/assets/images/cases/ai-tv-analysis/mobile/ai-tv-analysis-mobile-04.jpg";
import image05Mobile from "@public/assets/images/cases/ai-tv-analysis/mobile/ai-tv-analysis-mobile-05.jpg";

export const AI_TV_ANALYSIS: ICase = {
  // Tech variables
  id: "ai-tv-analysis",
  icons: [],
  textColor: "white",

  // Meta content
  metaTitle: {
    en: "Five neural networks for TV broadcast analysis",
    ru: "ИИ-разработка для анализа телеэфира",
  },
  metaDescription: {
    en: "The Unistory team has developed a service for TV broadcast analysis, integrating LLM, computer vision, speech-to-text, and OCR into a unified system.",
    ru: "Команда Unistory разработала сервис для анализа телеэфира, объединив в единую систему модели LLM, computer vision, speech-to-text и OCR.",
  },

  // Case card content
  thumbnail: {
    desktop: thumbnailDesktop.src,
    mob: thumbnailMobile.src,
  },
  title: {
    en: "AI-Powered TV Broadcast Analysis",
    ru: "AI-анализ телеэфира",
  },
  categories: {
    en: ["Helping Marketers Deliver Personalized Ads to TV Viewers"],
    ru: ["Помогаем маркетологам показывать персональную рекламу зрителям TV"],
  },

  // Case page content
  showCategoriesOnPage: false,
  heroTitle: {
    en: "How We Developed a System of Five Neural Networks for TV Broadcast Analysis",
    ru: "Как мы разработали систему из 5 нейросетей для анализа TV эфира",
  },
  heroBanner: {
    desktop: image01Desktop.src,
    mob: image01Mobile.src,
  },
  description: {
    en: "Our client is a developer of digital tools for marketers. This time, our task was to create a service for TV broadcast analysis. The goal of this analysis is to fine-tune advertising for TV viewers based on the content they watch.",
    ru: "Наш заказчик — разработчик цифровых инструментов для маркетологов. В этот раз нашей задачей стало создание сервиса для анализа телевизионного вещания. Цель этого анализа — тонкая настройка рекламы для зрителей TV на основе контента, который они смотрят.",
  },
  params: {
    period: 6,
    year: "2024",
  },
  technologies: [
    TECHNOLOGIES.csharp,
    TECHNOLOGIES.yolo,
    TECHNOLOGIES.openai,
    TECHNOLOGIES.postgresql,
  ],
  main: [
    {
      title: {
        en: "What We Decided to Analyze and Which Neural Networks We Used",
        ru: "Что мы решили анализировать и какие нейросети использовали",
      },
      text: [
        {
          text: {
            en: "For video content analysis, we integrated five neural networks into the project:",
            ru: "Для анализа видеоконтента мы использовали в проекте пять нейросетей:",
          },
        },
        {
          text: {
            en: "<ul><li>The first YOLOv8 detects logos.</li><li>The second YOLOv8 identifies common objects (umbrella, ball, person, sneakers, dog, etc.).</li><li>Rev AI transcribes speech and sends the text to ChatGPT.</li><li>ChatGPT extracts mentions of brands, cities, and celebrities from the transcript and determines sentiment (positive/negative attitude of the speaker toward an entity).</li><li>Tesseract recognizes static text within the video frame, such as subtitles, captions, and text-based logos.</li></ul>",
            ru: "<ul><li>Первая YoloV8 распознает логотипы.</li><li>Вторая YoloV8 распознает обычные предметы и объекты (зонт, мяч, человек, кроссовки, собака и т. д.).</li><li>Rev AI транскрибирует речь и передает расшифровку в ChatGPT.</li><li>ChatGPT находит в расшифровке упоминания брендов, городов и селебрити, а также определяет сентимент (позитивное / негативное отношение спикера к объекту).</li><li>Tesseract распознает статичный текст внутри видеоряда: субтитры, надписи, текстовые логотипы.</li></ul>",
          },
        },
      ],
      banner: {
        desktop: image02Desktop.src,
        mob: image02Mobile.src,
      },
    },
    {
      title: {
        en: "How the Project Works: A Look at Microservices",
        ru: "Как устроен проект: немного о микросервисах",
      },
      text: [
        {
          text: {
            en: "TV broadcast analysis needs to be fast, making performance a major challenge. To ensure smooth operation, we implemented a microservice architecture.",
            ru: "Анализ телевизионного вещания должен быть быстрым, и это — сложная задача с точки зрения производительности. Чтобы обеспечить бесперебойную работу сервиса, мы реализовали на проекте микросервисную архитектуру.",
          },
        },
        {
          text: {
            en: "The product consists of multiple services, each handling a specific task. This approach makes the project highly scalable, allowing the owner to add new services to enhance performance and increase network capacity as needed.",
            ru: "Продукт состоит из нескольких сервисов, каждый из которых выполняет отдельную задачу. Благодаря этому проект легко масштабировать. Владелец может подключать все новые сервисы для повышения производительности и увеличения пропускной способности сети.",
          },
        },
      ],
      banner: {
        desktop: image03Desktop.src,
        mob: image03Mobile.src,
      },
    },
    {
      title: {
        en: "Where We Got the Datasets for Logo Detection",
        ru: "Где мы взяли датасеты для поиска логотипов",
      },
      text: [
        {
          text: {
            en: "To train YOLOv8 to recognize standard objects like people, cars, animals, and clothing, we used the COCO dataset without making any modifications.",
            ru: "Чтобы научить YoloV8 находить стандартные объекты вроде людей, автомобилей, животных и одежды, мы обучили модель на датасете COCO. Не вносили в датасет никаких изменений.",
          },
        },
        {
          text: {
            en: "Logo detection was more challenging, but we ultimately chose the open-source OpenLogo dataset, which contains data on 352 logos and 27,000 labeled images.",
            ru: "С логотипами было сложнее, но в итоге остановились на опенсорсном датасете OpenLogo, в котором есть данные по 352 логотипам и 27 000 размеченных изображений.",
          },
        },
      ],
      banner: {
        desktop: image04Desktop.src,
        mob: image04Mobile.src,
      },
    },
    {
      title: {
        en: "Augmentation and Balancing",
        ru: "Аугментировали и балансировали",
      },
      text: [
        {
          text: {
            en: "After discussions with the client, we decided to add 40 more logos to our dataset. To train the neural network to detect each logo, we gathered at least 50 images per logo and augmented them threefold.",
            ru: "Посовещались с заказчиком и решили добавить 40 логотипов в наш датасет. Чтобы обучить нейросеть искать 1 логотип, нашли на каждый минимум 50 изображений, а затем аугментировали материал х3.",
          },
        },
        {
          text: {
            en: "We also had to adjust the original OpenLogo dataset. The number of images per logo was uneven—some logos had only 20 images, while others had 150.",
            ru: "С изначальным датасетом OpenLogo тоже пришлось поработать. Количество изображений для разных логотипов было неравномерным: могло приходиться на один лого по 20 картинок, а на другие по 150.",
          },
        },
        {
          text: {
            en: "To fix this, we balanced the dataset. Before training, we identified logos with fewer images than others. During training, we penalized the model more heavily when it missed logos with fewer labeled images.",
            ru: "Чтобы исправить ситуацию, мы балансировали датасет. Заранее, до обучения, нашли, по каким логотипам у нас меньше картинок, чем по другим. Во время обучения сильнее штрафовали модель, если она пропускала те логотипы, по которым было меньше размеченных изображений.",
          },
        },
      ],
      banner: {
        desktop: image05Desktop.src,
        mob: image05Mobile.src,
      },
    },

    {
      title: {
        en: "Project Status and Next Steps",
        ru: "На какой стадии сейчас проект. И что будет дальше",
      },
      text: [
        {
          text: {
            en: "Currently, our service analyzes video files uploaded by users. It takes 5 minutes to process a 10-minute video. In the near future, we plan to integrate WebSocket support and expand the gateway to enable live TV broadcast analysis.",
            ru: "Сейчас наш сервис анализирует видеофайлы, загруженные пользователем. На анализ 10-минутного ролика уходит 5 минут. В ближайшем будущем мы планируем подключать веб-сокет и расширять гейтвей, чтобы обеспечить возможность анализа телевизионного вещания.",
          },
        },
        {
          text: {
            en: "Next, we will integrate the project's backend as an API into the client’s digital products. This will allow European marketers to use our service to launch ads at the most relevant moments.",
            ru: "После этого интегрируем бэкенд проекта в качестве API в диджитал-продукты заказчика. Европейские маркетологи смогут использовать наш сервис, чтобы запускать рекламу в эфире в наиболее подходящее время.",
          },
        },
        {
          text: {
            en: "For example, if the main character in an action movie is wearing Nike sneakers, why not reinforce the impact with a Nike commercial right after the film?",
            ru: "Например, если герой боевика носит кроссовки Nike — почему бы маркетологам этого бренда не подкрепить эффект рекламным роликом сразу после фильма!",
          },
        },
      ],
    },
  ],

  team: [TEAM.daniilSemenov, TEAM.yuriUmnov, TEAM.danilaSkablov, TEAM.ivanPetrov],
};
