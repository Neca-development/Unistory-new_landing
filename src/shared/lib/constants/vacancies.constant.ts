import { ILang } from "../types";

interface IJobPoint {
  title: string;
  listItems: string[];
}

export interface IVacancy {
  id: number;
  post: ILang<string>;
  location: ILang<string>;
  format: ILang<string>;
  description: ILang<string[]>;
  jobPoints: ILang<IJobPoint[]>;
}

export const VACANCIES: IVacancy[] = [
  {
    id: 18674821,
    post: {
      en: "Frontend developer",
      ru: "Frontend разработчик",
    },
    location: {
      en: "Remote job",
      ru: "Питер",
    },
    format: {
      en: "Full-time",
      ru: "Full-time",
    },
    description: {
      en: [
        "The number of projects is growing, and we are actively expanding our development team. Currently, we are in need of a Junior Frontend Developer.",
        "At Unistory, it is customary to grow specialists within the company. We have a well-established system of mentoring and developing employees with little experience in development. We are ready to consider candidates with at least one year of commercial development experience.",
      ],
      ru: [
        "Количество проектов растет, и мы активно расширяем команду разработки. На данный момент нам нужен фронтенд-разработчик.",
        "В Unistory принято выращивать специалистов внутри компании, у нас хорошо налажена система наставничества и развития сотрудников с небольшим опытом в разработке. Мы готовы рассмотреть кандидатов с опытом от года коммерческой разработки.",
      ],
    },
    jobPoints: {
      en: [
        {
          title: "Your future tasks:",
          listItems: [
            "Development of projects.",
            "Working with APIs.",
            "Bug fixing.",
            "Collaborating with other team members: developers, testers, designers, and project managers.",
          ],
        },
        {
          title: "For successful work with us, you need:",
          listItems: [
            "Understanding of web application architecture.",
            "Understanding of REST architecture and object-oriented programming principles.",
            "Strong HTML/CSS coding skills.",
            "Knowledge of JavaScript fundamentals and experience with the React framework.",
            "Experience or desire to develop in blockchain development.",
            "Intermediate level of English.",
            "Knowledge of the FSD methodology.",
            "Most importantly, the ability and willingness to work in a team.",
          ],
        },
        {
          title: "Advantages of working in our team:",
          listItems: [
            "Involvement in all project cycles, including the development of specifications and design.",
            "Progressive task levels: task complexity will grow along with your professionalism.",
            "Minimal bureaucracy: only Redmine and clear technical tasks.",
            "Professional and career growth: the company is actively developing, and we primarily promote employees to new roles within the company.",
            "Competitive salary: the final salary level is discussed during the interview and depends on the candidate's experience and competencies.",
            "Flexible start to the workday.",
            "Paid vacation and sick leave.",
            "Interesting corporate events and team building activities.",
          ],
        },
      ],
      ru: [
        {
          title: "Твои будущие задачи:",
          listItems: [
            "Разработка фронтенд-части проектов.",
            "Работа с API.",
            "Устранение багов.",
            "Взаимодействие с другими участниками команды: разработчиками, тестировщиками, дизайнером и проектным менеджером.",
          ],
        },
        {
          title: "Для успешной работы тебе понадобится:",
          listItems: [
            "Понимание архитектуры web-приложений.",
            "Понимание, что такое REST-архитектура и принципы ООП.",
            "Уверенный код на HTML/CSS.",
            "Знание основ JavaScript и опыт работы с фреймворком React.",
          ],
        },
        {
          title: "Будет твоим преимуществом:",
          listItems: [
            "Опыт или желание развиваться в blockchain разработке.",
            "Уровень английского — intermediate.",
            "Знание методологии FSD.",
            "И самое важное — умение и желание работать в команде.",
          ],
        },
        {
          title: "Плюсы работы в Unistory:",
          listItems: [
            "Мы даем корректную обратную связи и обсуждаем цели для развития. Поэтому у тебя будет возможность профессионального и карьерного роста.",
            "Уровень сложности задач растет постепенно вместе с твоим профессионализмом.",
            "Уровень бюрократии сведен к 0, только Redmine и четкие технические задачи.",
            "Команда увлеченных технологиями людей.",
            "Возможность влиять на процессы в компании, предлагать свои идеи и реализовывать их.",
          ],
        },
        {
          title: "Условия работы:",
          listItems: [
            "Конкурентная зарплата, 2 раза в месяц.",
            "Гибкое начало рабочего дня.",
            "Гибридный формат: офис / удаленка по договоренности с руководителем.",
            "Оплачиваемые отпуск и больничные.",
            "Интересные корпоративы и тимбилдинги.",
            "Кофе, чай, фрукты в офисе.",
          ],
        },
      ],
    },
  },
  {
    id: 7563829,
    post: {
      en: "Project Manager",
      ru: "Project Manager",
    },
    location: {
      en: "Remote job",
      ru: "Питер",
    },
    format: {
      en: "Full-time",
      ru: "Full-time",
    },
    description: {
      en: [
        "The number of projects is growing, and we are actively expanding our development team. Currently, we are in need of a Project Manager with at least 2 years of experience in managing IT projects..",
      ],
      ru: [
        "Количество проектов растет, и мы активно расширяем команду разработки. На данный момент нам нужен менеджер проектов.",
      ],
    },
    jobPoints: {
      en: [
        {
          title: "Your future tasks:",
          listItems: [
            "Managing non-standard projects (simultaneously working on about 4 projects).",
            "Development planning: creating a roadmap, task decomposition, task estimation, sprint management.",
            "Monitoring the work and results of developers.",
            "Financial control over the project.",
            "Communication with the client and handling objections.",
          ],
        },
        {
          title: "Description of our perfect candidate:",
          listItems: [
            "You have at least 2 years of experience in managing IT projects, more complex than website development.",
            "You enjoy being the center of power and driving force behind project development.",
            "You have English language proficiency at the B2 level or higher (we have many English-speaking clients, so this is critical).",
            "You have general knowledge of how code works and the architecture of IT projects.",
            "Knowledge in blockchain and AI will be an additional advantage.",
          ],
        },
        {
          title: "Benefits of working at Unistory:",
          listItems: [
            "We provide constructive feedback and discuss development goals. Therefore, you will have the opportunity for professional and career growth.",
            "The complexity level of tasks gradually increases along with your professionalism.",
            "Minimal bureaucracy: only Redmine and clear technical tasks.",
            "A team of technology enthusiasts.",
            "The opportunity to influence processes in the company, suggest your ideas, and implement them.",
            "Competitive salary, paid twice a month.",
            "Flexible start to the workday.",
            "Hybrid format: office/remote work by agreement with the manager.",
            "Paid vacation and sick leave.",
            "Interesting corporate events and team building activities.",
            "Coffee, tea, and fruits in the office.",
          ],
        },
      ],
      ru: [
        {
          title: "Твои будущие задачи:",
          listItems: [
            "Ведение нестандартных проектов (одновременно в работе около 4 проектов).",
            "Планирование разработки: составление роадмапа, декомпозиция задач, оценка тасок, ведение спринтов.",
            "Контроль за работой и результатами разработчиков.",
            "Финансовый контроль за проектом.",
            "Коммуникация с заказчиком и обработка возражений.",
          ],

},
        {
          title: "Для успешной работы тебе понадобится:",
          listItems: [
            "Опыт от 2 лет в управлении IT-проектами, сложнее разработки сайтов.",
            "Желание быть центром силы и двигателем разработки проекта.",
            "Владение английским языком на уровне B2 и выше (у нас много англоязычных заказчиков, поэтому это критично).",
            "Общие знания, как устроен код, архитектура IT-проектов.",
            "Понимание технологий AI, ML, blockchain и web3.",
          ],

},
        {
          title: "Плюсы работы в Unistory:",
          listItems: [
            "Мы даем корректную обратную связи и обсуждаем цели для развития. Поэтому у тебя будет возможность профессионального и карьерного роста.",
            "Уровень сложности задач растет постепенно вместе с твоим профессионализмом.",
            "Уровень бюрократии сведен к 0, только Redmine и четкие технические задачи.",
            "Команда увлеченных технологиями людей.",
            "Возможность влиять на процессы в компании, предлагать свои идеи и реализовывать их.",
          ],

},
        {
          title: "Условия работы:",
          listItems: [
            "Конкурентная зарплата, 2 раза в месяц.",
            "Гибкое начало рабочего дня.",
            "Гибридный формат: офис / удаленка по договоренности с руководителем.",
            "Оплачиваемые отпуск и больничные.",
            "Интересные корпоративы и тимбилдинги.",
            "Кофе, чай, фрукты в офисе.",
          ],
        },
      ],
    },
  },
  {
    id: 7564783,
    post: {
      en: "",
      ru: "Дизайнер",
    },
    location: {
      en: "",
      ru: "Питер",
    },
    format: {
      en: "Full-time",
      ru: "Full-time",
    },
    description: {
      en: [],
      ru: [
        "Количество проектов растет, и мы активно расширяем команду разработки. На данный момент нам нужен дизайнер.",
      ],
    },
    jobPoints: {
      en: [],
      ru: [
        {
          title: "Твои будущие задачи:",
          listItems: [
            "Проектировать и отрисовывать полезные и удобные сервисы, мобильные приложения и сайты.",
            "Подготавливать материал для разработчиков, контролировать реализацию.",
            " Структурировать своё рабочее время, попадать в дедлайны поставленных задачах или вовремя предупреждать об изменениях.",
          ],
        },
        {
          title: "Для успешной работы тебе понадобится:",
          listItems: [
            "Уверенное владение Figma.",
            "Знание гайдов, интерфейсов, UX и UI. Желание быть в курсе трендов.",
            "Понимание процесса создания интерфейсов — от аналитики до их конечной реализации.",
            "Понимание верстки интерфейсов.",
            "Английский на уровне письменного и устного общения.",
            "Готовность развиваться с наставником и самостоятельно.",
            "Отличные коммуникативные навыки.",
            "Ответственность за результат и соблюдение сроков.",
            "Портфолио с примерами сервисов, мобильных приложений и сайтов. Могут быть учебные работы.",
            "Навыки иллюстрации / анимации / 3d дизайна будут плюсом при рассмотрении.",
          ],
},
        {
          title: "Плюсы работы в Unistory:",
          listItems: [
            "Мы даем корректную обратную связи и обсуждаем цели для развития. Поэтому у тебя будет возможность профессионального и карьерного роста.",
            "Уровень сложности задач растет постепенно вместе с твоим профессионализмом.",
            "Уровень бюрократии сведен к 0, только Redmine и четкие технические задачи.",
            "Команда увлеченных технологиями людей.",
            "Возможность влиять на процессы в компании, предлагать свои идеи и реализовывать их.",
          ],
},
        {
          title: "Условия работы:",
          listItems: [
            " Конкурентная зарплата, 2 раза в месяц.",
            "Гибкое начало рабочего дня.",
            "Гибридный формат: офис / удаленка по договоренности с руководителем.",
            "Оплачиваемые отпуск и больничные.",
            "Интересные корпоративы и тимбилдинги.",
            "Кофе, чай, фрукты в офисе.",
          ],
},
      ],
    },
  },
  {
    id: 23263271,
    post: {
      en: "",
      ru: "Backend Developer",
    },
    location: {
      en: "",
      ru: "Питер",
    },
    format: {
      en: "Full-time",
      ru: "Full-time",
    },
    description: {
      en: [],
      ru: [ "Количество проектов растет, и мы активно расширяем команду разработки. На данный момент нам нужен бэкенд-разработчик.",],
    },
    jobPoints: {
      en: [],
      ru: [
        {
          title: "Твои будущие задачи:",
          listItems: [
            "Разработка бэкенд-части проектов.",
            "Работа с API.",
            "Разработка и работа с базами данных.",
            "Устранение багов.",
            "Взаимодействие с другими участниками команды: разработчиками, тестировщиком и проектным менеджером.",
          ],
        },
        {
          title: "Для успешной работы тебе понадобится:",
          listItems: [
            "Опыт коммерческой разработки от полугода или собственные pet-проекты.",
            "Понимание принципов ООП и SOLID.",
            "Опыт работы с typeORM и PostgresQL.",
            "Уверенное владение Nest.js, Typescipt.",
            "Владение английским языком на уровне, достаточном для чтения технической документации.\n",
            "И самое важное — умение и желание работать в команде.",
          ],
        },
        {
          title: "Будет твоим преимуществом:",
          listItems: [
            "Наличие активного GitHub аккаунта.",
            "Опыт работы с библиотеками: jsonwebtoken, class-validator, class-transformer, Automapper TypeScript.",
            "Понимание устройства блокчейна и AI.",
            "Участие в олимпиадах или хакатонах.",
          ],
        },
        {
          title: "Плюсы работы в Unistory:",
          listItems: [
            "Мы даем корректную обратную связи и обсуждаем цели для развития. Поэтому у тебя будет возможность профессионального и карьерного роста.",
            "Уровень сложности задач растет постепенно вместе с твоим профессионализмом.",
            "Уровень бюрократии сведен к 0, только Redmine и четкие технические задачи.",
            "Команда увлеченных технологиями людей.",
            "Возможность влиять на процессы в компании, предлагать свои идеи и реализовывать их.",
          ],
        },
        {
          title: "Условия работы:",
          listItems: [
            "Конкурентная зарплата, 2 раза в месяц.",
            "Гибкое начало рабочего дня.",
            "Гибридный формат: офис / удаленка по договоренности с руководителем.",
            "Оплачиваемые отпуск и больничные.",
            "Интересные корпоративы и тимбилдинги.",
            "Кофе, чай, фрукты в офисе.",
          ],
        },
      ],
    },
  },
];
