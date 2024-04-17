import featureImage1 from "@public/assets/images/company/company-feature.jpg";

import teamImage1 from "@public/assets/images/company/team-aksenov.jpg";
import teamImage2 from "@public/assets/images/company/team-semenov.jpg";
import teamImage3 from "@public/assets/images/company/team-kiribiatiev.jpg";
import teamImage4 from "@public/assets/images/company/team-smolnikov.jpg";
import { TEAM } from "@shared/lib/constants/team";

export const CompanyHeroEn = {
  title: {
    first: "Hello!",
    second: "We are Unistory, AI and web3 ",
    third: "development company.",
  },
  subtitle: {
    first: "Our expertise lies in development of mobile applications,",
    second: "complex web services, and custom integrations.",
  },
};

export const CompanyFeaturesEn = [
  {
    title: "Cutting-edge stack",
    subtitle: "We operate on the basis of future technologies, including AI and web3.",
    image: featureImage1.src,
  },
  {
    title: "Сorporate events and team building",
    subtitle: "We organize active team building events to help employees connect.",
    image: featureImage1.src,
  },
  {
    title: "Opportunity for rapid growth",
    subtitle: "We facilitate growth: our juniors quickly gain experience and evolve into seniors.",
    image: featureImage1.src,
  },
  {
    title: "Breakthrough inventions",
    subtitle: "We create new, unique things. Unistory employees are true pioneers.",
    image: featureImage1.src,
  },
];

export const CompanyTeamEn = {
  title: "Our team",
  team: [
    {
      name: TEAM.alexanderAksenov.name.en,
      post: "Co-founder of the company and the CEO. A crypto enthusiast and a fan of decentralization.",
      image: teamImage1.src,
      socials: {
        linkedIn: "https://www.linkedin.com/in/aiaksenov/",
      },
    },
    {
      name: TEAM.daniilSemenov.name.en,
      post: "Head of the project office. The chief responsible for creating teams and managing projects.",
      image: teamImage2.src,
      socials: {
        linkedIn: "https://www.linkedin.com/in/danil2205/",
      },
    },
    {
      name: TEAM.vladislavKiribyatev.name.en,
      post: "The superior backend samurai and the unparalleled master of accurate estimates.",
      image: teamImage3.src,
      socials: {
        linkedIn: "https://ru.linkedin.com/in/vladislav-kirbiatev-2b2724216",
      },
    },
    {
      name: TEAM.antonSmolnikov.name.en,
      post: "Expert in new technologies. Will answer any questions about web3, neural networks, and artificial intelligence.",
      image: teamImage4.src,
      socials: {
        telegram: "https://t.me/Antonunistory",
      },
    },
  ],
};

export const CompanyVacanciesEn = {
  title: {
    first: "Always on the lookout ",
    second: "for talented ones",
  },
  sidebar: {
    title: "Didn't find the right vacancy?",
    desc: "If you are an expert willing to work with us, feel free to text us on Telegram",
    button: "Text Us",
    bottomText: "We’re waiting for your CVs",
  },
};
