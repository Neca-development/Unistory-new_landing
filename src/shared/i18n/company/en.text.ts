import featureImage1 from "@public/assets/images/company/feature-team-building.jpg";
import featureImage2 from "@public/assets/images/company/feature-techs.jpg";
import featureImage3 from "@public/assets/images/company/feature-growth.jpg";
import featureImage4 from "@public/assets/images/company/feature-spirit.jpg";

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
    title: "Team Building",
    subtitle:
      "We go hiking, boating on the lake, handcraft stone saunas, and organize tours of St. Petersburg bars.",
    image: featureImage1.src,
  },
  {
    title: "Technologies",
    subtitle:
      "We don't just create simple websites and landing pages. Instead, we develop complex web services and applications with AI and blockchain.",
    image: featureImage2.src,
  },
  {
    title: "Rapid Growth ",
    subtitle:
      "The team works on complex projects under the careful guidance of team leaders. Developers constantly exchange expertise.",
    image: featureImage3.src,
  },
  {
    title: "Spirit of Innovation",
    subtitle:
      "We create what no one has done before us: decentralized AI, disease detection through photos, and LiDAR work.",
    image: featureImage4.src,
  },
];

export const CompanyTeamEn = {
  title: "Our team",
  team: [
    {
      name: TEAM.alexanderAksenov.name.en,
      post: "CEO of Unistory. Keen on surfing the waves of the Fourth Industrial Revolution.",
      image: teamImage1.src,
    },
    {
      name: TEAM.daniilSemenov.name.en,
      post: "Head of the project office. Takes care of developers and is always ready to assist PMs.",
      image: teamImage2.src,
    },
    {
      name: TEAM.vladislavKiribyatev.name.en,
      post: "The superior backend samurai and the unparalleled master of accurate estimates.",
      image: teamImage3.src,
    },
    {
      name: TEAM.antonSmolnikov.name.en,
      post: "Expert in new technologies. Will answer any questions about web3 and neural networks.",
      image: teamImage4.src,
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
  vacancyCTA: {
    title: "How to apply for the vacancy:",
    desc: "To apply for the vacancy, please contact us on Telegram.",
    buttonText: "Contact via Telegram ",
  },
};

export const CompanyMapEn = {
  title: "Our clients represent the whole world",
};
