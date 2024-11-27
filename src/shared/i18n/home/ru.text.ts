import { IMessage } from "@shared/ui";

export const HeroRu = {
  title: {
    first: "Интегрируем будущее",
    second: "Веб-сервисы и приложения",
    third: "на базе AI & блокчейн",
  },
  subtitle: "анализируем / дизайним / разрабатываем",
};

export const ServicesRu = {
  LLM: {
    title: "LLM чатботы",
    subtitle: "Умные помощники <br /> клиентов и сотрудников",
    button: {
      text: "Подробнее",
      url: "/cases/ai-chatbot/",
    },
  },
  COMPUTER_VISION: {
    title: "Компьютерное зрение",
    subtitle: "Найдем и распознаем объекты, <br /> а потом расскажем о них",
  },
  AI: {
    title: "Генерация текста, видео, изображений",
    subtitle: "Автоматизируем создание контента",
  },
  WEB3: {
    title: "Web3 сервисы",
    subtitle: "Кошельки, блокэксплореры, биржи, аналитические инструменты",
  },
  DECENTRALIZED: {
    title: "Децентрализованные приложения",
    subtitle: "DApp — софт на основе смарт-контрактов",
  },
  INDIVIDUAL: {
    title: "Индивидуальное решение",
    subtitle: "Закроем нетипичную задачу, сделаем то, что другие не могут",
    button: {
      text: "Оставить заявку",
      url: "#become-customer",
    },
  },
};

export const WorksRu = {
  title: "Изменяем мир к лучшему",
  allCases: "Все кейсы",
};

export const PrinciplesRu: {
  messages: IMessage[];
  items: Array<{
    title: string;
    description: {
      beforeHighlight: string;
      highlight: string;
      afterHighlight: string;
    };
  }>;
} = {
  messages: [
    {
      author: "Нурсултан Бегенов",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра",
      date: "только что",
    },
    {
      author: "Нурсултан Бегенов",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра",
      date: "только что",
    },
    {
      author: "Нурсултан Бегенов",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — это подход, культура и фокус на показателях. Рассказываем, как устроена командная игра",
      date: "только что",
    },
  ],
  items: [
    {
      title: "Коммуникация",
      description: {
        beforeHighlight: "",
        highlight: "Коммуникация важна и точка.",
        afterHighlight: ` Мы ответим на все вопросы и поможем определиться с деталями проекта.
        Подскажем лучшее решение и будем держать в курсе всех событий на
        проекте.`,
      },
    },
    {
      title: "Экспертность",
      description: {
        beforeHighlight: "Планируете",
        highlight: " сложный сервис или использование новейших технологии?",
        afterHighlight: ` Поможем реализовать ваши амбициозные планы будь это международный
        B2B маркетплейс или новый продукт с AI.`,
      },
    },
    {
      title: "Сроки",
      description: {
        beforeHighlight: `Дедлайн – крайний срок выполнения задачи и то, что мы не нарушаем.`,
        highlight: " Ваши планы не сорвутся из-за плохой организации работ",
        afterHighlight: `, COVIDa или атаки НЛО, потому что мы ответственные.`,
      },
    },
  ],
};

export const ReviewsRU = {
  title: {
    // beforeHighlight: "Факт: ",
    highlight: "Клиенты доверяют нам <br/>",
    afterHighlight: "свои цифровые продукты",
  },
};
