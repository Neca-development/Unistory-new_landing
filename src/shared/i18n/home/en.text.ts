import { IMessage, IconsTypes } from "@shared/ui";

export const HeroEn = {
  title: {
    first: "Интегрируем будущее",
    second: "Веб-сервисы и приложения",
    third: "на базе AI & блокчейн",
  },
  subtitle: "анализируем / дизайним / разрабатываем",
};

export const ServicesEn = {
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

export const WorksEn = {
  title: `We help businesses develop
  <br />
  digital products`,
  moreCases: "More cases",
};

export const PrinciplesEn: {
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
      author: "Nursultan Begenov",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — is approach, culture and a\u00A0focus on performance. We tell you how teamwork works",
      date: "recently",
    },
    {
      author: "Nursultan Begenov",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — is approach, culture and a\u00A0focus on performance. We tell you how teamwork works",
      date: "recently",
    },
    {
      author: "Nursultan Begenov",
      avatar: "/assets/images/nursultan.jpg",
      message:
        "Unistory — is approach, culture and a\u00A0focus on performance. We tell you how teamwork works",
      date: "recently",
    },
  ],
  items: [
    {
      title: "Communication",
      description: {
        beforeHighlight: "",
        highlight: "Communication is important and we know that.",
        afterHighlight: ` We help you decide on the details of your project, answer all your questions,
      propose the best solution and keep you informed of all the developments
      on the project.`,
      },
    },
    {
      title: "Expertise",
      description: {
        beforeHighlight: "Planning",
        highlight: " a complex service or adoption of the latest technologies?",
        afterHighlight: ` We can help you to implement your ambitious plans, whether it's an international
      B2B marketplace or a new product with AI.`,
      },
    },
    {
      title: "Deadlines",
      description: {
        beforeHighlight: `	Deadline – is a cut-off date for a task and something we don't break.`,
        highlight: "Your plans will not be disrupted by poor work organization",
        afterHighlight: `, COVIDa or a UFO attack, because we are responsible.`,
      },
    },
  ],
};

export const ReviewsEN = {
  title: {
    // beforeHighlight: "Fact: ",
    highlight: "Сlients entrust us <br/>",
    afterHighlight: "with their digital products",
  },
};
