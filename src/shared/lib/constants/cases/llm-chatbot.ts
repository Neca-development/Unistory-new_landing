import { ICase } from "@shared/lib/types";
import llmBanner from "@public/assets/images/cases/llm-chatbot/banner.jpg";
import llmSolutionEN from "@public/assets/images/cases/llm-chatbot/solution-en.jpg";
import llmSolutionRU from "@public/assets/images/cases/llm-chatbot/solution-ru.jpg";
import llmArchitectureEN from "@public/assets/images/cases/llm-chatbot/architecture-en.jpg";
import llmArchitectureRU from "@public/assets/images/cases/llm-chatbot/architecture-ru.jpg";
import llmCUseEN from "@public/assets/images/cases/llm-chatbot/backend-development-en.jpg";
import llmCUseRU from "@public/assets/images/cases/llm-chatbot/backend-development-ru.jpg";
import llmDatabaseEN from "@public/assets/images/cases/llm-chatbot/database-en.jpg";
import llmDatabaseRU from "@public/assets/images/cases/llm-chatbot/database-ru.jpg";
import llmDeployEN from "@public/assets/images/cases/llm-chatbot/deploy-en.jpg";
import llmDeployRU from "@public/assets/images/cases/llm-chatbot/deploy-ru.jpg";
import llmSemanticEN from "@public/assets/images/cases/llm-chatbot/semantic-en.jpg";
import llmSemanticRU from "@public/assets/images/cases/llm-chatbot/semantic-ru.jpg";
import llmAzureEN from "@public/assets/images/cases/llm-chatbot/azure-en.jpg";
import llmAzureRU from "@public/assets/images/cases/llm-chatbot/azure-ru.jpg";
import llmGptTurboEN from "@public/assets/images/cases/llm-chatbot/gpt-turbo-en.jpg";
import llmGptTurboRU from "@public/assets/images/cases/llm-chatbot/gpt-turbo-ru.jpg";
import llmResultsEN from "@public/assets/images/cases/llm-chatbot/result-en.jpg";
import llmResultsRU from "@public/assets/images/cases/llm-chatbot/result-ru.jpg";
import llmBannerThumb from "@public/assets/images/cases/llm-chatbot/thumb.jpg";
import llmBannerThumbMob from "@public/assets/images/cases/llm-chatbot/thumb_mob.jpg";
import { TECHNOLOGIES } from "../technologies.constats";

export const LLM_CHATBOT: ICase = {
  title: {
    en: "LLM Chatbot",
    ru: "LLM чат-бот",
  },
  id: "llm-chatbot",
  heroTitle: {
    en: "LLM chatbot — a business assistant for a major manufacturer and distributor of electrical installation products",
    ru: "LLM чат-бот — бизнес-ассистент для крупного производителя и дистрибьютора электромонтажных изделий",
  },
  categories: {
    en: ["Assistant for Electrical Installation Product Distributor"],
    ru: ["Ассистент для дистрибьютора электромонтажных изделий"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [TECHNOLOGIES.csharp, TECHNOLOGIES.react, TECHNOLOGIES.azure],
  thumbnail: {
    desktop: llmBannerThumb.src,
    mob: llmBannerThumbMob.src,
  },
  heroBanner: {
    desktop: llmBanner.src,
    mob: llmBanner.src,
  },
  description: {
    en: "Development of a chatbot for prompt responses to customer queries. Automation of sales funnels and reducing labor costs of the call center. Helping the client to ensure a high level of customer service by providing users with accurate information about products and stock availability.",
    ru: "Создать чат-бот для оперативных ответов на запросы клиентов компании. Автоматизировать воронки продаж и разгрузить колл-центр. Помочь заказчику обеспечить высокий уровень обслуживания и клиентского сервиса: предоставить пользователям точную информацию о товарах и остатках на складах.",
  },
  params: {
    budget: {
      ru: 3_200_000,
      en: 32_000,
    },
    client: "NDA",
    period: 4.5,
    year: "2024",
  },
  main: [
    {
      title: {
        en: "Solution: AI Chatbot",
        ru: "Решение: AI чат-бот",
      },
      text: [
        {
          text: {
            en: "To address the tasks set before us, together with the client, we decided to develop a chatbot based on artificial intelligence. This is a chatbot capable of communicating with users in natural human language. Through interaction with various APIs, the bot always knows stock availability and can provide all the necessary information about the products.",
            ru: "Чтобы решить поставленные перед нами задачи, мы вместе с заказчиком решили разработать чат-бот на основе искусственного интеллекта. Это чат-бот, способный общаться с пользователями на естественном человеческом языке. Благодаря взаимодействию с различными API бот всегда точно знает остатки на складе и может предоставить всю нужную информацию о продукции.",
          },
        },
      ],
      banner: {
        en: llmSolutionEN.src,
        ru: llmSolutionRU.src,
      },
    },
    {
      title: {
        en: "Architecture and Components of the Chatbot:",
        ru: "Архитектура и компоненты чат-бота",
      },
      text: [
        {
          text: {
            en: "The language model can autonomously select APIs to interact with, retrieve user conversation history, and order information.",
            ru: "Языковая модель способна сама выбирать API для обращения, получать историю переписки и заказов пользователя.",
          },
        },
        {
          text: {
            en: "For the project development, we utilized the Microsoft Azure ecosystem. We deployed a secure dedicated server, connected and trained GPT-4, configured modules for working with the vector database using Azure AI search, connected the DBMS, and integrated with the client's API—data from the website about call center operations and their contacts. To select the information source, we orchestrated the language model using LangChain.",
            ru: "Для разработки проекта мы использовали экосистему Microsoft Azure. Развернули защищенный выделенный сервер, подключили и обучили GPT 4, настроили модули для работы с векторной базой данных с помощью Azure AI search, подключили СУБД и провели интеграцию с API заказчика — данные с сайта о работе колл-центров и их контакты. Для выбора источника информации провели оркестрацию языковой модели с помощью LangChain.",
          },
        },
        {
          text: {
            en: "Typical interaction scenarios with users are stored in the vector database. Thus, we achieved a standardized response format and provided the language model with the necessary context for responses. The relational database stores the conversation history with the user and information that is periodically updated (e.g., operating hours of trading points).",
            ru: "В векторной базе данных хранятся типовые сценарии взаимодействия с пользователем. Таким образом, мы добились типизированного формата ответов и предоставили языковой модели необходимый для ответа контекст. В реляционной базе данных хранится история переписки с пользователем и информация, которая обновляется с установленной периодичностью (например, время работы торговых точек).",
          },
        },
        {
          text: {
            en: "Quality control and adherence to communication standards with users are evaluated by the discriminator (GPT agent). An administrative panel is provided for outputting analytical data, debugging the chatbot, and communicating with users. The quality assessment of the chatbot's responses is implemented using a feedback system.",
            ru: "Контроль качества и соблюдение стандартов коммуникации с пользователями оценивается дискриминатором (GPT-агентом). Для вывода аналитических данных, отладки чат бота и общения с пользователями предусмотрена административная панель. Оценка качества ответов чат-бота реализована с помощью системы обратной связи.",
          },
        },
      ],
      banner: {
        en: llmArchitectureEN.src,
        ru: llmArchitectureRU.src,
      },
    },
    {
      title: {
        en: "Chatbot Workflow",
        ru: "Основной сценарий работы чат-бота",
      },
      text: [
        {
          text: {
            en: "1. The user interacts with the chatbot UI and submits a query.",
            ru: "1. Пользователь обращается к UI чат-бота и оставляет запрос.",
          },
        },
        {
          text: {
            en: "2. The backend service processes the query: the user's request and conversation history are sent to the language model.",
            ru: "2. Запрос обрабатывается бэкендом сервиса: Запрос пользователя и история переписки пользователя поступают в языковую модель.",
          },
        },
        {
          text: {
            en: "3. The language model selects APIs and/or accesses the Embedding model based on the user's query theme and primary classification.",
            ru: "3. Языковая модель выбирает API и/или обращается к Embedding модели на основе тематики запроса пользователя и первичной классификации.",
          },
        },
        {
          text: {
            en: "4. The language model retrieves necessary information from sources and generates a response.",
            ru: "4. Языковая модель получает необходимую информацию из источников и генерирует ответ.",
          },
        },
        {
          text: {
            en: "5. The user's query is filtered by the GPT agent for legality and/or to check for question correctness (e.g., questions about competitors and prices).",
            ru: "5. Запрос пользователя фильтруется GPT агентом на момент законности и/или на предмет некорректности вопроса (вопросы о конкурентах и ценах).",
          },
        },
        {
          text: {
            en: "6. The response is returned to the backend and recorded in the database to save the user conversation.",
            ru: "6. Ответ возвращается в бэкенд и записывается в базу данных для сохранения пользовательской переписки.",
          },
        },
        {
          text: {
            en: "7. The response is delivered to the user.",
            ru: "7. Ответ передается пользователю.",
          },
        },
        {
          text: {
            en: "8. The user provides feedback, which is recorded in the relational database and displayed in the admin panel.",
            ru: "8. Пользователь оставляет обратную связь, которая записывается в реляционную базу данных и выводится в админ. панель",
          },
        },
      ],
    },
    {
      title: {
        en: "UI of the Chatbot",
        ru: "UI чат-бота",
      },
      text: [
        {
          text: {
            en: "Integrated into the client's website as a web widget, User Interface enables access to support services. Developed using React, HTML 5, CSS 3, it utilizes webhooks to communicate with the backend.",
            ru: "Служит для взаимодействия пользователя с сервисом. Интегрирован в сайт заказчика в виде веб-виджета и обеспечивает возможность обращения к сервису поддержки и оценки работы. Разработан на React, HTML 5, CSS 3. Для связи с бэкендом используются webhooks.",
          },
        },
      ],
      banner: {
        en: llmCUseEN.src,
        ru: llmCUseRU.src,
      },
    },
    {
      title: {
        en: "Backend",
        ru: "Backend",
      },
      text: [
        {
          text: {
            en: "The backend houses the core logic of the service. Integrated with the database of user conversations and orders, as well as the language model, it processes user requests, manages user conversation history, and interacts with the language model. Load balancer and instance replication are utilized. The backend is designed to enable the creation of replicas of existing instances and distribute the load through the load balancer. This ensures stable chatbot operation on the website during peak times.",
            ru: "Бэкенд хранит в себе основную логику сервиса. Интегрирован с базой пользовательских переписок и заказов, а также языковой моделью. Служит для обработки запросов пользователей, обработки истории пользовательской переписки, связи с языковой моделью.",
          },
        },
        {
          text: {
            en: "",
            ru: "Также мы использовали лоадбалансер и репликацию инстансов — бэкенд реализован таким образом, чтобы была возможность поднять реплику существующего инстанса и через лоадбалансер перераспределить нагрузку. Это обеспечивает стабильную работу чат-бота на сайте в прайм-тайм.",
          },
        },
      ],
      banner: {
        en: llmDatabaseEN.src,
        ru: llmDatabaseRU.src,
      },
    },
    {
      title: {
        en: "Relational Database",
        ru: "Реляционная база данных",
      },
      text: [
        {
          text: {
            en: "For the development of the relational database, we used PostgreSQL. This approach has several advantages:",
            ru: "1. Возможность реализовать транзакции ACID и откаты. Вся история взаимодействия пользователя сохраняется даже при обрыве связи с ним.",
          },
        },
        {
          text: {
            en: "<ul><li>Ability to implement ACID transactions and rollbacks. The entire user interaction history is preserved even in case of connection loss.</li><li>Scalability: Postgres can easily be distributed across multiple servers to handle large volumes of data.</li><li>Security: Postgres ensures a high level of security through flexible access control, authentication and encryption mechanisms, cryptography, auditing, and backup.</li></ul>",
            ru: "2. Масштабируемость: Postgres легко распределяется на несколько серверов для обработки больших объемов данных.",
          },
        },
        {
          text: {
            en: "",
            ru: "3. Безопасность: Postgres обеспечивает высокий уровень безопасности благодаря гибкому управлению правами доступа, средствам аутентификации и шифрования, криптографии, аудиту и резервному копированию.",
          },
        },
      ],
      banner: {
        en: llmDeployEN.src,
        ru: llmDeployRU.src,
      },
    },
    {
      title: {
        en: "Large Language Model (LLM)",
        ru: "Large language model (LLM)",
      },
      text: [
        {
          text: {
            en: "There are two options for developing the chatbot's language model:",
            ru: "Для разработки чат-бота есть два варианта языковой модели:",
          },
        },
        {
          text: {
            en: "<ol><li>Using the commercial GPT-4 Turbo API.</li><li>Deploying the GPT-4 model on a private Azure server.</li></ol>",
            ru: "<ol><li>Использование коммерческого API GPT-4 Turbo</li><li>Развертывание модели GPT 4 на приватном сервере Azure.</li></ol>",
          },
        },
        {
          text: {
            en: "The first option has several drawbacks:",
            ru: "У первого варианта есть ряд недостатков:",
          },
        },
        {
          text: {
            en: "<ul><li>The GPT API does not guarantee 100% uptime and may restrict access during overloads, unlike a dedicated GPT model.</li><li>GPT-4 has a limit on daily requests. The limit increases over time, so initially, the chatbot will have a limited number of interactions.</li></ul>",
            ru: "<ul><li>Для оплаты GPT-4 Turbo нужна иностранная карта. Оплата производится только с включенным VPN.</li><li>GPT API не гарантирует 100% аптайма и может ограничиваться в доступе при перегрузках, в отличие от выделенной GPT модели.</li><li>У GPT-4 есть лимит ежедневных запросов. Лимит повышается со временем использования, то есть первое время у чат-бота будет ограниченное количество обращений.</li></ul>",
          },
        },
        {
          text: {
            en: "We chose the second option with a local model because it has several advantages:",
            ru: "Мы выбрали второй вариант с локальной моделью, так как он имеет ряд преимуществ:",
          },
        },
        {
          text: {
            en: "<ul><li>Provides greater stability for the chatbot since the model is deployed on its own server. It eliminates risks associated with changes in the terms of use of third-party APIs.</li><li>Offers full control over computational resources and performance.</li><li>Guarantees the confidentiality and security of personal data, which are not transmitted to third parties.</li><li>Provides greater flexibility in configuring and scaling the model architecture to meet project requirements.</li></ul>",
            ru: "<ul><li>Обеспечивает бОльшую стабильность работы чат-бота, поскольку модель развернута на собственном сервере. Исключает риски, связанные с изменением условий использования сторонним API.</li><li>Предоставляет полный контроль над вычислительными ресурсами и производительностью.</li><li>У GPT-4 есть лимит ежедневных запросов. Лимит повышается со временем использования, то есть первое время у чат-бота будет ограниченное количество обращений.</li><li>Дает большую гибкость в настройке и масштабировании архитектуры модели под требования проекта.</li></ul>",
          },
        },
      ],
      banner: {
        en: llmDeployEN.src,
        ru: llmDeployRU.src,
      },
    },
    {
      title: {
        en: "Embedding Model",
        ru: "Embedding модель",
      },
      text: [
        {
          text: {
            en: "This model translates natural language queries into vector representations. It is directly integrated with the semantic search engine for use in the vector database. We used Azure OpenAI Embeddings Ada as the embedding model.",
            ru: "Данная модель переводит запросы на естественном языке в векторное представление. Напрямую интегрирована с движком семантического поиска для использования векторной базы данных. В качестве embedding модели мы использовали Azure OpenAI Embeddings Ada. ",
          },
        },
      ],
      banner: {
        en: llmSemanticEN.src,
        ru: llmSemanticRU.src,
      },
    },
    {
      title: {
        en: "Semantic Search Engine:",
        ru: "Движок семантического поиска",
      },
      text: [
        {
          text: {
            en: "For semantic search, we used Azure AI Search. The service is a leading information retrieval platform for creating RAG models. In addition to configuring semantic search, the service allows integration between LLM, embedding models, the semantic search engine, and the vector database within the Microsoft Azure ecosystem.",
            ru: "Для осуществления семантического поиска мы использовали Azure AI search. Сервис является ведущей информационно-поисковой платформой для создания RAG моделей.",
          },
        },
        {
          text: {
            en: "",
            ru: "Кроме настройки семантического поиска, сервис позволяет интегрировать между собой LLM, embedding модель, движок семантического поиска и векторную базу данных внутри одной экосистемы Microsoft Azure.",
          },
        },
      ],
      banner: {
        en: llmAzureEN.src,
        ru: llmAzureRU.src,
      },
    },
    {
      title: {
        en: "Vector Database",
        ru: "Векторная база данных ",
      },
      text: [
        {
          text: {
            en: "The vector database is populated with standard communication scenarios, general information about project solutions, and product usage regulations. The chatbot accesses the vector database through the Azure AI Search semantic search engine.",
            ru: "Векторная база данных наполнена стандартными сценариями общений и общей информацией о проектных решениях, а также регламентами использования продукции. Чат-бот обращается к векторной БД через движок семантического поиска Azure AI search. ",
          },
        },
      ],
    },
    {
      title: {
        en: "API Request Orchestration",
        ru: "Оркестрация API запросов ",
      },
      text: [
        {
          text: {
            en: "To enable the model to automatically determine which API to use, we employed LangChain orchestration.",
            ru: "Для того, чтобы модель могла автоматически определять, какой API использовать, мы использовали LangСhain-оркестрацию.",
          },
        },
        {
          text: {
            en: "<ol><li>Upon receiving a user request, the first Large Language Model (LLM), acting as an intent classifier, determines the theme of the question—whether it involves technical specifications of electrical installation products or commercial information.</li><li>Depending on the theme, the second LLM (router) selects the appropriate API from the available options (e.g., ERP API or website API).</li><li>The third LLM (response generator) shapes the final response by accessing the previously selected API and utilizing the obtained data.</li><li>The response is returned to the user.</li></ol>",
            ru: "<ol><li>При получении запроса пользователя первая LLM (intent classifier) определяет тематику вопроса — технические характеристики электромонтажной продукции или коммерческая информация.</li><li>В зависимости от темы вторая LLM (router) выбирает соответствующий API из доступных (например, API ERP или API сайта).</li><li>Третья LLM (response generator) формирует конечный ответ, обратившись к выбранному ранее API и используя полученные данные.</li><li>Ответ возвращается пользователю.</li></ol>",
          },
        },
      ],
      banner: {
        en: llmGptTurboEN.src,
        ru: llmGptTurboRU.src,
      },
    },
    {
      title: {
        en: "GPT Agent Discriminator",
        ru: "Дискриминатор GPT-агент",
      },
      text: [
        {
          text: {
            en: "The GPT agent serves as a discriminator, processing the final response from the language model immediately before delivering it to the user. The discriminator verifies that the model has not included information about prices and competitors in its response.",
            ru: "Исполняет роль дискриминатора - обрабатывает конечный ответ языковой модели непосредственно перед выводом ответа пользователю. Дискриминатор проверяет, что модель не включила в свой ответ информацию о ценах и конкурентах. ",
          },
        },
        {
          text: {
            en: "The agent is based on the GPT 3.5 Turbo language model deployed on an Azure server. It can be modified through the administrator panel and has the ability to act based on pre-defined prompts.",
            ru: "В основе агента лежит языковая модель GPT 3.5 Turbo, развернутая на сервере Azure. Агент может быть модифицирован через панель администратора и имеет возможность действовать, исходя из заранее прописанных промтов.",
          },
        },
      ],
      banner: {
        en: llmGptTurboEN.src,
        ru: llmGptTurboRU.src,
      },
    },
    {
      title: {
        en: "Results",
        ru: "Результаты",
      },
      text: [
        {
          text: {
            en: "Users instantly receive the necessary information about the company's products. The chatbot addresses 80% of customer inquiries, and only in 1 out of 5 cases do users request assistance from an operator.",
            ru: "Пользователи мгновенно получают нужную информацию о продукции компании. Чат-бот закрывает запросы 80% покупателей. Лишь в 1 из 5 случаев пользователи запрашивают помощь оператора.",
          },
        },
      ],
      banner: {
        en: llmResultsEN.src,
        ru: llmResultsRU.src,
      },
    },
  ],
};
