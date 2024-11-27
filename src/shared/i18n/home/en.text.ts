import { IMessage } from "@shared/ui";

export const HeroEn = {
  title: {
    first: "Integrating the future",
    second: "Web services and applications",
    third: "based on AI & blockchain",
  },
  subtitle: "analytics / design / development",
};

export const ServicesEn = {
  LLM: {
    title: "LLM chat bots",
    subtitle: "AI assistants for your <br /> customers and employees",
    button: {
      text: "Learn more",
      url: "/cases/ai-chatbot/",
    },
  },
  COMPUTER_VISION: {
    title: "Computer vision",
    subtitle: "Detecting, classifying and <br /> analysing objects",
  },
  AI: {
    title: "Text, video, image AI generation",
    subtitle: "Automate content creation with <br /> AI tools",
  },
  WEB3: {
    title: "Web3 services",
    subtitle: "Wallets, block explorers, exchanges, analytical tools",
  },
  DECENTRALIZED: {
    title: "Decentralized apps",
    subtitle: "DApp — smart contract platforms",
  },
  INDIVIDUAL: {
    title: "Custom solution",
    subtitle: "We can do what others cannot",
    button: {
      text: "Get in touch",
      url: "#become-customer",
    },
  },
};

export const WorksEn = {
  title: "We change the world for the better",
  allCases: "All cases",
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
