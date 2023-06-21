import { IconsTypes } from "@shared/ui";

export const HeroEn = {
  description: {
    first: "Developing ",
    second: "digital",
    third: "solutions",
    fourth: "for web & mobile",
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
  message: {
    author: string;
    avatar: string;
    message: string;
    date: string;
  };
  items: Array<{
    title: string;
    description: {
      beforeHighlight: string;
      highlight: string;
      afterHighlight: string;
    };
  }>;
} = {
  message: {
    author: "Nursultan Begenov",
    avatar: "/assets/images/nursultan.jpg",
    message:
      "Unistory — is approach, culture and a focus on performance. We tell you how teamwork works",
    date: "recently",
  },
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
