import { IMessage, IconsTypes } from "@shared/ui";

export const HeroEn = {
  description: {
    first: "Developing ",
    second: "digital",
    third: "solutions",
    fourth: "for",
    fifth: "web & mobile",
  },
  params: {
    teamSize: "team <br/>members",
    projects: "successful <br/>projects",
    rating: "Clutch <br/>rating",
  },
};

export const ServicesEn: Array<{
  id: number;
  title: string;
  icon: IconsTypes;
  header: string;
  description: string;
}> = [
  {
    id: 1,
    title: "Product design",
    icon: "grid",
    header: "From your ideas to design prototype",
    description: `We provide a modern and user-friendly design based on your ideas
    and our expertise. We follow a transparent process, developed
    through years of practice, and your feedback to get a design that
    meets all the goals of the project.`,
  },
  {
    id: 2,
    title: "Development",
    icon: "layout",
    header: "Web & Mobile development",
    description: `We develop a web service or mobile application to solve your
    unique business tasks.
    <br /> <br />
    - frontend: React, Angular, Vue, TS
    <br />
    - backend: Node.js, C#
    <br />- mobile: React native, Kotlin, Swift`,
  },
  {
    id: 3,
    title: "Blockchain и AI",
    icon: "bitcoin",
    header: "",
    description: `      
    <div class="bg-light-bg/[0.8] dark:bg-dark-bg/[0.8] p-4 lg:p-6">
      <h4 class="mb-3 text-xl lg:text-3xl font-semibold">Blockchain integration</h4>
      <ul>
        <li>— Tokenomics development</li>
        <li>— Smark-contracts development</li>
        <li>— DeFi-integration for web and mobile applications</li>
      </ul>
      </div>
      <div class="bg-light-bg/[0.8] dark:bg-dark-bg/[0.8] p-4 lg:p-6 mt-4">
      <h4 class="mb-3 text-xl lg:text-3xl font-semibold">Artificial Intelligence</h4>
      <ul>
        <li>— Research and processing data</li>
        <li>— Machine learning</li>
        <li>— Integration of ChatGPT / Azure OpenAI</li>
      </ul>
    </div>`,
  },
  {
    id: 3,
    title: "Maintain & Support",
    icon: "layout",
    header: "Maintain & Support",
    description: `Provide an online or offline formed team of professionals to your
    project at any stage of product development. We will refine,
    improve or completely modernize existing IT solutions.
    <br /> <br />
    And you don’t even have to invite us to team buildings! Though we
    certainly wouldn’t refuse :)`,
  },
];

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
    beforeHighlight: "Fact: ",
    highlight: "9 of 10 customers<br />recommend us",
    afterHighlight: " and here's why",
  },
};
