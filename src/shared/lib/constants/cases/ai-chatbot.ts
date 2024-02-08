import { ICase } from "@shared/lib/types";
import chatbotBannerEN from "@public/assets/images/cases/ai-chatbot/banner-en.jpg";
import chatbotBannerRU from "@public/assets/images/cases/ai-chatbot/banner-ru.jpg";
import chatbotBanner1EN from "@public/assets/images/cases/ai-chatbot/reduction-en.jpg";
import chatbotBanner1RU from "@public/assets/images/cases/ai-chatbot/reduction-ru.jpg";
import chatbotBanner2EN from "@public/assets/images/cases/ai-chatbot/sales-en.jpg";
import chatbotBanner2RU from "@public/assets/images/cases/ai-chatbot/sales-ru.jpg";
import chatbotBanner3EN from "@public/assets/images/cases/ai-chatbot/llm-en.jpg";
import chatbotBanner3RU from "@public/assets/images/cases/ai-chatbot/llm-ru.jpg";
import chatbotBannerThumb from "@public/assets/images/cases/ai-chatbot/thumb.jpg";
import chatbotBannerThumbMob from "@public/assets/images/cases/ai-chatbot/thumb_mob.jpg";

export const AI_CHATBOT: ICase = {
  title: {
    en: "Product",
    ru: "Услуга",
  },
  id: "ai-chatbot",
  heroTitle: {
    en: "Product: LLM chatbot",
    ru: "Услуга: разработка умного чат-бота на основе LLM",
  },
  categories: {
    en: ["AI chatbot development"],
    ru: ["Разработка умного чат-бота"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  thumbnail: {
    desktop: chatbotBannerThumb.src,
    mob: chatbotBannerThumbMob.src,
  },
  heroBanner: {
    desktop: {
      en: chatbotBannerEN.src,
      ru: chatbotBannerRU.src,
    },
    mob: {
      en: chatbotBannerEN.src,
      ru: chatbotBannerRU.src,
    },
  },
  main: [
    {
      title: {
        en: "Problem and Solution",
        ru: "Проблема и решение",
      },
      text: [
        {
          text: {
            en: 'The standard scenario for a chatbot is when a person enters a chat with a problem, sees that they are talking to a bot, and writes "Get me the operator." 70% of users do this.',
            ru: "Стандартный сценарий чат-бота — человек заходит в чат с проблемой, видит, что ему отвечает бот, и пишет «Позовите оператора». Так делают 70% пользователей.",
          },
        },
        {
          text: {
            en: "To solve this problem, we create AI chatbots based on LLM. Thanks to this, 70% of users get the necessary information without the involvement of an operator.",
            ru: "Чтобы решить эту проблему, мы делаем умных чат-ботов на основе искусственного интеллекта. Благодаря этому 70% пользователей получают нужную информацию без участия оператора.",
          },
        },
      ],
    },
    {
      title: {
        en: "Bots for Customers and Employees",
        ru: "Боты для клиентов и для сотрудников",
      },
      text: [
        {
          text: {
            en: "1. Company's Customer Bot - answers to customer questions and automates the sales funnel.",
            ru: "1. Бот для клиентов компании — ответы на вопросы клиентов и автоматизация воронки продаж.",
          },
        },
        {
          text: {
            en: "2. Internal bot - assistance to employees in completing daily tasks.",
            ru: "2. Внутренний бот — обучение сотрудников и помощь в выполнении задач. ",
          },
        },
      ],
    },
    {
      title: {
        en: "Reduction of Labor Costs",
        ru: "Работаем на снижение затрат",
      },
      text: [
        {
          text: {
            en: "Implementing a bot reduces the workload on operators and decreases the expenses. Each operator requires extensive training. In contrast, a chatbot is already trained during the development stage and is ready to respond to users. Implementing a chatbot once means reducing the number of required operators.",
            ru: "Внедрение бота снижает нагрузку на операторов и уменьшает расходы на их содержание. Каждый оператор требует длительного обучения. В отличие от них, чат-бот уже обучен на стадии разработки и готов отвечать пользователям. Внедрить чат-бот один раз — означает сократить количество необходимых операторов.",
          },
        },
      ],
      banner: {
        en: chatbotBanner1EN.src,
        ru: chatbotBanner1RU.src,
      },
    },
    {
      title: {
        en: "Increased Sales",
        ru: "Способствуем увеличению продаж",
      },
      text: [
        {
          text: {
            en: "Customers promptly receive reliable information, thus remaining in the sales funnel. Conversion to sales increases. The number of users who leave the page due to incorrect robot responses or long operator responses decreases.",
            ru: "Клиенты оперативно получают достоверную информацию и поэтому остаются в воронке продаж. Конверсия в продажу повышается. Уменьшается число пользователей, которые «отвалились» из-за некорректного ответа робота или долгого ответа оператора.",
          },
        },
      ],
      banner: {
        en: chatbotBanner2EN.src,
        ru: chatbotBanner2RU.src,
      },
    },
    {
      title: {
        en: "Why LLM Chatbot?",
        ru: "Почему LLM чат-бот?",
      },
      text: [
        {
          text: {
            en: 'LLM stands for "large language model." This is artificial intelligence trained on vast amounts of textual information. Thanks to this technology, the chatbot can converse in natural language, thus providing real assistance to your customers and employees.',
            ru: "LLM — с английского «large language model», т. е. большая языковая модель. Так называют искусственный интеллект, обученный на огромных объемах текстовой информации. Благодаря этой технологии чат-бот умеет разговаривать на естественном языке — а значит, может оказать вашим клиентам и сотрудникам настоящую помощь. ",
          },
        },
      ],
      banner: {
        en: chatbotBanner3EN.src,
        ru: chatbotBanner3RU.src,
      },
    },
  ],
  disableOtherProjects: true,
};
