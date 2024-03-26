import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import bvksBanner from "@public/assets/images/cases/bvks/banner.jpg";
import bvksThumb from "@public/assets/images/cases/bvks/thumb.png";
import bvksThumbMob from "@public/assets/images/cases/bvks/thumb_mob.png";
import bvksImage1EN from "@public/assets/images/cases/bvks/client-en.jpg";
import bvksImage1RU from "@public/assets/images/cases/bvks/client-ru.jpg";
import bvksImage2EN from "@public/assets/images/cases/bvks/automatization-en.jpg";
import bvksImage2RU from "@public/assets/images/cases/bvks/automatization-ru.jpg";
import bvksImage3EN from "@public/assets/images/cases/bvks/elasticsearch-en.jpg";
import bvksImage3RU from "@public/assets/images/cases/bvks/elasticsearch-ru.jpg";
import bvksImage4EN from "@public/assets/images/cases/bvks/moderation-en.jpg";
import bvksImage4RU from "@public/assets/images/cases/bvks/moderation-ru.jpg";

export const BVKS: ICase = {
  title: "BVKS",
  id: "bvks",
  heroTitle: {
    en: "BVKS — A video hosting platform with automatic transcription of videos into text",
    ru: "BVKS — Видеохостинг с автоматической транскрибацией видео в текст",
  },
  categories: {
    en: ["Video to Text Translation Automation"],
    ru: ["Автоматизация перевода видео в текст"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "bitcoin"],
  textColor: "white",
  technologies: [TECHNOLOGIES.typescript, TECHNOLOGIES.firebase, TECHNOLOGIES.openai],
  thumbnail: {
    desktop: bvksThumb.src,
    mob: bvksThumbMob.src,
  },
  heroBanner: {
    desktop: bvksBanner.src,
    mob: bvksBanner.src,
  },
  description: {
    en: "The goal of this project is to help followers of the missionary Bhakti Vikasa Swami gain access to his lectures in various formats. Develop a platform for viewing videos, automate the transcription of lectures, and implement word search within all videos.",
    ru: "Цель этого проекта — помочь последователям миссионера Бхакти Викаша Свами получить доступ к его лекциям в разных форматах. Разработать площадку для просмотра видео, автоматизировать транскрибацию лекций и реализовать поиск по слову внутри всех видео. ",
  },
  params: {
    budget: {
      ru: 1_500_000,
      en: 21_000,
    },
    period: 2,
    year: 2024,
  },
  main: [
    {
      title: {
        en: "Customer and His Platform",
        ru: "Заказчик и его площадка",
      },
      text: [
        {
          text: {
            en: "Bhakti Vikasa Swami is one of the leading gurus of the organization, personally trained by Prabhupada, the founder of the faith. The preacher constantly delivers lectures in various countries and actively manages his YouTube channel: currently, it has over 120 thousand subscribers, with more than 2500 videos uploaded.",
            ru: "Бхакти Викаша Свами — один из ведущих гуру организации, лично учился у Прабхупады, основателя конфессии. Проповедник постоянно читает лекции в разных странах, активно занимается своим YouTube: сейчас там больше 120 тысяч подписчиков, загружено больше 2500 видео.",
          },
        },
        {
          text: {
            en: "Two years ago, we developed a separate website for Bhakti and his lectures, a mini-YouTube for followers and disciples. We developed everything on Firebase, a large Google database that allows web services and applications to work without a backend. Lectures in video and audio formats are published on YouTube and the proprietary platform in large numbers.",
            ru: "Два года назад мы разработали для Бхакти и его лекций отдельный сайт, мини-YouTube для последователей и учеников. Разработали все на Firebase, большой базе данных от Google, которая позволяет веб-сервисам и приложениям работать без бэкенда. Лекции в формате видео и аудио выходят на YouTube и собственной площадке в большом количестве.",
          },
        },
      ],
      banner: {
        en: bvksImage1EN.src,
        ru: bvksImage1RU.src,
      },
    },
    {
      title: {
        en: "Automating Video Transcription",
        ru: "Автоматизировать транскрибацию видео",
      },
      text: [
        {
          text: {
            en: "Two years after the platform development, the customer returned to us with a new idea: to place transcriptions of video lectures on the website. It turned out that a significant portion of Bhakti's audience prefers the textual format. However, manually transcribing hundreds and thousands of lectures is an arduous task. Our task was to automate this process.",
            ru: "Через два года после разработки площадки заказчик вернулся к нам с новой идеей: разместить на сайте расшифровки видеолекций. Оказалось, что значительная часть аудитории Бхакти предпочитает именно текстовый формат. Но транскрибировать сотни и тысячи лекций вручную — непосильный труд. Нашей задачей стала автоматизация этого процесса.",
          },
        },
        {
          text: {
            en: 'How to do it? If the phrase "neural networks" crossed your mind, congratulations, you are correct. Further in the case study, we explain in detail how we automated the translation from video to text, the nuances involved, and why our technology is superior to any transcription service.',
            ru: "Как это сделать? Если вам пришло в голову слово «нейросети», — поздравляем, вы не ошиблись. Дальше в кейсе подробно рассказываем, как мы автоматизировали перевод из видео в текст, с какими нюансами, и почему наша технология лучше любого сервиса транскрибации.",
          },
        },
      ],
      banner: {
        en: bvksImage2EN.src,
        ru: bvksImage2RU.src,
      },
    },
    {
      title: {
        en: "Integrating with Elasticsearch",
        ru: "Провести интеграцию с Elasticsearch",
      },
      text: [
        {
          text: {
            en: "Another idea from the customer was to help users search for information more precisely on the platform. A typical use case: a follower visits the YouTube channel to see what his spiritual teacher thinks about relationships in a couple. The search results yield videos, but not all of them are relevant to the query: some are about relationships with the guru or friends, while others are about the relationship with God.",
            ru: "Еще одна идея заказчика: помочь пользователям более точечно искать информацию на платформе. Типичный юзеркейс: последователь приходит на YouTube-канал, чтобы посмотреть, например, что его духовный учитель думает об отношениях в семейной паре. Поиск выдает ролики, и далеко не все из них релевантны запросу: некоторые про отношения с гуру или друзьями, другие — про взаимоотношения с Богом.",
          },
        },
        {
          text: {
            en: "Another issue: even if the user finds the desired video, it may last two or three hours and contain many thoughts on various topics. Together with the customer, we decided to help Bhakti's followers find answers to their questions.",
            ru: "Еще одна проблема: даже если пользователь нашел нужное видео, оно может длиться два или три часа и содержать много мыслей на самые разные темы. Вместе с заказчиком мы решили помочь последователям Бхакти найти ответы на их вопросы.",
          },
        },
      ],
      banner: {
        en: bvksImage3EN.src,
        ru: bvksImage3RU.src,
      },
    },
    {
      title: {
        en: "Whisper AI and ChatGPT",
        ru: "Whisper AI и ChatGPT",
      },
      text: [
        {
          text: {
            en: "To transcribe videos, we decided to use the specialized neural network Whisper AI. Artificial intelligence copes well with the transcription task, but the resulting text is usually not presentable enough. The material still requires manual processing, and in our case, due to the huge number of videos, this was not feasible. To create a quality draft of lectures manually, it would have been necessary to employ several dozen employees for a month.",
            ru: "Чтобы транскрибировать видео, мы решили использовать специализированную нейросеть Whisper AI. Искусственный интеллект хорошо справляется с задачей транскрибации, но итоговый текст, как правило, недостаточно презентабельный. Материал все равно требует ручной обработки, а в нашем случае из-за огромного количества видео это не представлялось возможным. Чтобы сделать качественный чистовик лекций вручную, пришлось бы загрузить несколько десятков сотрудников работой на месяц.",
          },
        },
        {
          text: {
            en: "To process the text after transcription, we implemented an algorithm that runs the transcription through ChatGPT. The result is a higher quality transcription of the lecture, stylistically coherent and error-free.",
            ru: "Чтобы обработать текст после транскрибации, мы реализовали алгоритм, который прогоняет расшифровку через ChatGPT. Результат — более качественная расшифровка лекции, стилистически выверенная и без ошибок.",
          },
        },
        {
          text: {
            en: "The script processed lectures for several months. Yes, it's long — but a thousand times faster and cheaper than doing it manually.",
            ru: "Скрипт проводил обработку лекций в течение нескольких месяцев. Да, это долго — но в тысячу раз быстрее и дешевле, чем делать вручную.",
          },
        },
      ],
    },
    {
      title: {
        en: "Moderation Feature",
        ru: "Возможность модерации",
      },
      text: [
        {
          text: {
            en: "When processing text through ChatGPT, there is still a probability of errors, both stylistically and factually. We decided to give users the ability to point out these errors. Visitors to the platform can report any errors they find to the administrator, who then corrects the text or rejects the report. We are currently finalizing the technical implementation of this feature.",
            ru: "При обработке текста через ChatGPT все равно сохраняется вероятность ошибок, стилистических и фактических. Мы решили дать пользователям возможность указать на эти ошибки. Посетитель площадки может репортить о найденной ошибке администратору, который затем исправляет текст или отклоняет репорт. Сейчас заканчиваем работу над технической реализацией этой фичи.",
          },
        },
      ],
      banner: {
        en: bvksImage4EN.src,
        ru: bvksImage4RU.src,
      },
    },
    {
      title: {
        en: "Search Within Videos",
        ru: "Поиск по слову внутри видео",
      },
      text: [
        {
          text: {
            en: "Having transformed audio and video into text, we faced another challenge — assisting users in finding specific words within lectures. As a solution, we opted for Elasticsearch — a tool capable of searching data within vast datasets.",
            ru: "Мы превратили аудио и видео в текст, но перед нами стояла еще одна задача — помочь пользователям найти внутри лекций отдельные слова. В качестве решения мы выбрали Elasticsearch — инструмент, который позволяет искать данные в огромных датасетах.",
          },
        },
        {
          text: {
            en: "Since Elasticsearch cannot search for words within audio or video directly, the search on the platform operates based on the transcriptions of lectures, which we automated in the previous stage of our work. Each transcription is linked to its corresponding video/audio version, allowing Elasticsearch to determine how many times the user's desired word was mentioned in a particular lecture.",
            ru: "Elasticsearch не может искать слово в аудио или видео, поэтому поиск на платформе происходит по расшифровкам лекций, которые мы автоматизировали на предыдущем этапе работ. Каждая расшифровка привязана к своей видео/аудио версии, поэтому Elasticsearch может найти, сколько раз в той или иной лекции упоминалось нужное пользователю слово.",
          },
        },
        {
          text: {
            en: "Within the UI, we divided the search into two options: standard search and Deepsearch, which enables searching within lectures. Users can choose whether to search for a lecture by its title or by the words mentioned within it.",
            ru: "В рамках UI мы разделили поиск на два варианта: обычный поиск и Deepsearch, поиск внутри лекций. Пользователь может выбрать, искать ему лекцию по названию или по словам, которые в ней упоминаются.",
          },
        },
      ],
    },
    {
      title: {
        en: "Outcome and further plans",
        ru: "Результат и планы",
      },
      text: [
        {
          text: {
            en: "We successfully tackled both tasks for the client, relying on AI-generated text transcriptions. Users of the platform now have the ability to read the preacher's lectures and search for desired videos based on their content, rather than just their titles.",
            ru: "У клиента было две задачи, и мы решили обе, полагаясь на AI-расшифровки текста. Пользователи площадки получили возможность читать лекции проповедника и точечно искать нужные видео на основе самого контента, а не только названия.",
          },
        },
        {
          text: {
            en: "In the near future, we plan to enhance the Deepsearch feature by displaying precise timestamps when Bhakti spoke the searched word in the video. These timestamps will also be pulled from the textual version.",
            ru: "В ближайших планах — при запросе Deepsearch показывать точные тайминги, в которые Бхакти говорил искомое слово на видео. Тайминги также будут подтягиваться из текстовой версии.",
          },
        },
      ],
    },
  ],
  team: [
    TEAM.ilyaSokolov,
    TEAM.ivanPetrov,
    TEAM.yanBortsov,
    TEAM.ilyaVylegzhanin,
    TEAM.rostislavPetrov,
  ],
};
