import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import csusmBannerEN from "@public/assets/images/cases/university-chatbot/banner-en.jpg";
import csusmBannerRU from "@public/assets/images/cases/university-chatbot/banner-ru.jpg";
import csusmImage1EN from "@public/assets/images/cases/university-chatbot/uikit-en.jpg";
import csusmImage1RU from "@public/assets/images/cases/university-chatbot/uikit-ru.jpg";
import csusmImage2EN from "@public/assets/images/cases/university-chatbot/answering-en.jpg";
import csusmImage2RU from "@public/assets/images/cases/university-chatbot/answering-ru.jpg";
import csusmImage3EN from "@public/assets/images/cases/university-chatbot/actions-en.jpg";
import csusmImage3RU from "@public/assets/images/cases/university-chatbot/actions-ru.jpg";
import csusmImage4 from "@public/assets/images/cases/university-chatbot/architecture.jpg";
import csusmThumb from "@public/assets/images/cases/university-chatbot/thumb.jpg";
import csusmThumbMob from "@public/assets/images/cases/university-chatbot/thumb_mob.jpg";

export const UNIVERSITY_CHATBOT: ICase = {
  title: {
    en: "University Chatbot",
    ru: "Чат-бот для университета",
  },
  id: "university-chatbot",
  heroTitle: {
    en: "Azure-based Chatbot: Assistant for Students of a University in the USA",
    ru: "Чат-бот на основе Azure: помощник студентов и абитуриентов университета в США",
  },
  categories: {
    en: ["Clever Assistant for Students"],
    ru: ["Помощник студентов и абитуриентов"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [
    TECHNOLOGIES.azure,
    TECHNOLOGIES.openai,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.react,
    TECHNOLOGIES.postgresql,
  ],
  thumbnail: {
    desktop: csusmThumb.src,
    mob: csusmThumbMob.src,
  },
  heroBanner: {
    desktop: {
      en: csusmBannerEN.src,
      ru: csusmBannerRU.src,
    },
    mob: {
      en: csusmBannerEN.src,
      ru: csusmBannerRU.src,
    },
  },
  description: {
    en: "Automation of communication between the American university, its applicants, and students. Reduction of the workload of operators and costs associated with the call center operations. Providing users with accurate information from the university's data 24/7. Segmentation of applicants into multiple distinct audiences for marketing purposes.",
    ru: "Автоматизировать общение между американским университетом, его абитуриентами и студентами. Снизить нагрузку на операторов и затраты на работу колл-центра. Предоставлять пользователям достоверную информацию из данных вуза в режиме 24/7. Сегментировать абитуриентов по нескольким разным аудиториям в маркетинговых целях.",
  },
  params: {
    budget: {
      ru: 4_000_000,
      en: 40_000,
    },
    period: 4,
    year: "2023",
  },
  main: [
    {
      title: {
        en: "Smart Assistant",
        ru: "Умный помощник",
      },
      text: [
        {
          text: {
            en: "To help the university solve all its tasks, we decided to develop a smart chatbot based on LLM (large language model). The university collaborates with Microsoft Corporation, thus having full access to the infrastructure for creating such a tool.",
            ru: "Чтобы помочь университету решить все его задачи, мы решили разработать умный чат-бот на основе LLM (большой языковой модели). Университет сотрудничает с корпорацией Microsoft, и поэтому имеет полный доступ к инфраструктуре для создания такого инструмента.",
          },
        },
        {
          text: {
            en: "We became partners with the educational institution and took on the development of the chatbot based on a set of Microsoft products: Azure and Dynamics base.",
            ru: "Мы стали партнерами учебного заведения и взяли на себя разработку чат-бота на основе набора продуктов от Microsoft: Azure и базы Dynamics.",
          },
        },
      ],
      banner: {
        en: csusmImage1EN.src,
        ru: csusmImage1RU.src,
      },
    },
    {
      title: {
        en: "How the chatbot works",
        ru: "Как работает чат-бот",
      },
      text: [
        {
          text: {
            en: 'At first glance, it\'s a regular interactive chat: the user asks a question, and the bot responds. The main challenge faced by customers and developers of such tools is how to make the bot useful to the user, rather than just causing irritation and a desire to say "Get me an operator".',
            ru: "С виду это обычный интерактивный чат: пользователь задает вопрос, бот отвечает. Главная проблема, с которой сталкиваются заказчики и разработчики таких инструментов: как сделать так, чтобы бот был полезен пользователю, а не вызывал лишь раздражение и желание написать «Позови оператора»? ",
          },
        },
        {
          text: {
            en: "To develop a really useful product, we taught the bot to understand a variety of questions and recognize user intentions. All this is done using Microsoft Azure services.",
            ru: "Чтобы разработать полезный продукт, мы научили бота понимать множество вопросов и распознавать намерения пользователей. Все это — с помощью сервисов Microsoft Azure. ",
          },
        },
      ],
      banner: {
        en: csusmImage2EN.src,
        ru: csusmImage2RU.src,
      },
    },
    {
      title: {
        en: "Question Variability",
        ru: "Вариативность вопросов",
      },
      text: [
        {
          text: {
            en: "We uploaded a list of questions and answers to Azure and then connected a separate Microsoft service - Question Answering. From that moment on, the bot was already able to respond, but only if the question matched exactly what was specified in Azure. Naturally, we needed to create many question variations so that the bot could interact with real people.",
            ru: "Мы загрузили в Azure список вопросов и ответы на них, а затем подключили отдельный сервис Microsoft — Question Answering. С этого момента бот был уже способен отвечать, но только если вопрос буква-в-букву совпадает с тем, что указан в Azure. Естественно, нам нужно было создать много вариантов вопросов, чтобы бот мог общаться с живым человеком. ",
          },
        },
        {
          text: {
            en: "To achieve this goal, we generated a huge number of questions through Chat GPT. We uploaded them to Azure, and now our bot can provide consultations to real people who use natural language. You can ask questions in various formulations, and the bot will be able to find the right answer in its database.",
            ru: "Для достижения этой цели мы сгенерировали огромное количество вопросов через Chat GPT. Загрузили их в Azure, и теперь наш бот получил возможность давать консультации живым людям, которые пользуются естественным человеческим языком. Вы можете задавать вопрос в самых разных формулировках, и бот сможет найти правильный ответ в своей базе. ",
          },
        },
      ],
      banner: {
        en: csusmImage3EN.src,
        ru: csusmImage3RU.src,
      },
    },
    {
      title: {
        en: "How the bot recognizes intentions",
        ru: "Как бот распознает намерения",
      },
      text: [
        {
          text: {
            en: "A good chatbot should not only answer questions but also help the user perform a specific action. To recognize user intentions and what action they want to take, we connected Microsoft Orchestration Workflow.",
            ru: "Хороший чат-бот должен не только отвечать на вопросы, но и помогать пользователю совершить целевое действие. Чтобы распознать намерения пользователей, и какое действие они хотят совершить, мы подключили Microsoft Orchestration Workflow.",
          },
        },
        {
          text: {
            en: "Thus, our bot learned to understand what the user wants - to ask a question, log in to the system, or complain about a professor. This last intention triggers a feedback form where the student can indicate which professors they are dissatisfied with and why. The message is sent to the university administration via email.",
            ru: "Так наш бот научился понимать, чего хочет пользователь — задать вопрос, авторизоваться в системе или, (внимание!), пожаловаться на профессора. Это последнее намерение вызывает форму обратной связи, где студент может указать, кем из преподавателей он недоволен и почему. Сообщение уходит в администрацию университета в виде email. ",
          },
        },
      ],
      banner: csusmImage4.src,
    },
    {
      title: {
        en: "Where the bot will communicate",
        ru: "Где будет общаться бот",
      },
      text: [
        {
          text: {
            en: "1. SMS messages. We connected the Twilio API service for messaging.",
            ru: "1. SMS-сообщения. Подключили API сервиса Twilio для рассылок.",
          },
        },
        {
          text: {
            en: "2. A web widget on the university's website.",
            ru: "2. Веб-виджет на сайте университета. ",
          },
        },
        {
          text: {
            en: "3. Telegram. Here we are testing the assistant's performance.",
            ru: "3. Telegram. Здесь мы тестируем работу помощника. ",
          },
        },
      ],
    },
    {
      title: {
        en: "Audience segmentation",
        ru: "Сегментация аудиторий",
      },
      text: [
        {
          text: {
            en: "Student data and their conversations with the bot are stored within Microsoft Dynamics. In the future, we plan to launch automatic user segmentation by audiences and send mailings to these segments.",
            ru: "Данные о студентах и их разговорах с ботом хранятся внутри Microsoft Dynamics. В будущем мы планируем запустить автоматическую сегментацию пользователей по аудиториям и рассылки по этим сегментам. ",
          },
        },
        {
          text: {
            en: 'For example, if a user asks, "What documents are needed for admission?" we can include them in the prospective student segment. Later, this audience will receive separate mailings from the university tailored to their needs and goals.',
            ru: "Например, если пользователь задает вопрос «Какие документы нужны для поступления?» мы сможем занести его в сегмент абитуриентов. Позже такая аудитория будет получать отдельную рассылку от университета, соответствующую ее потребностям и целям вуза. ",
          },
        },
      ],
    },
  ],
  team: [
    TEAM.daniilSemenovHead,
    TEAM.ilyaSmirnov,
    TEAM.maksimKlimchenko,
    TEAM.andreyPaskarenko,
    TEAM.daniilBoiko,
    TEAM.yanBortsov,
  ],
};
