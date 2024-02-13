import { IMessage, IconsTypes } from "@shared/ui";

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
    title: "LLM chat bots",
    subtitle: "Расширяем границы <br /> бизнес-коммуникаций",
  },
  COMPUTER_VISION: {
    title: "Computer vision",
    subtitle: "Будущее цифровой свободы и безопасности",
  },
  AI: {
    title: "Text, video, image AI generation",
    subtitle: "Гарантия безопасности <br /> и удобства",
  },
  WEB3: {
    title: "Web3 services",
    subtitle: "Кошельки, блокэксплореры, биржи, аналитические инструменты",
  },
  DECENTRALIZED: {
    title: "Decentralized apps",
    subtitle: "Будущее цифровой свободы <br /> и безопасности",
  },
  INDIVIDUAL: {
    title: "Индивидуальное решение",
    subtitle: "Закроем нетипичную задачу, сделаем то что другие не могут",
  },
};

export const WorksRu = {
  title: `Мы помогаем предприятиям<br/>разрабатывать цифровые продукты`,
  moreCases: "Еще кейсы",
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
