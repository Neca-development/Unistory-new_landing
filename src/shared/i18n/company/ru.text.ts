import featureImage1 from "@public/assets/images/company/company-feature.jpg";

import teamImage1 from "@public/assets/images/company/team-aksenov.jpg";
import teamImage2 from "@public/assets/images/company/team-semenov.jpg";
import teamImage3 from "@public/assets/images/company/team-kiribiatiev.jpg";
import teamImage4 from "@public/assets/images/company/team-smolnikov.jpg";
import { TEAM } from "@shared/lib/constants/team";

export const CompanyHeroRu = {
  title: {
    first: "Привет!",
    second: "Мы — студия AI и web3",
    third: "разработки Unistory.",
  },
  subtitle: {
    first: "Делаем продукты на основе тех самых нейросетей, ",
    second: "искусственного интеллекта и блокчейна.",
  },
};

export const CompanyFeaturesRu = [
  {
    title: "Передовые технологии",
    subtitle: "Мы работаем на основе актуального стека и технологий будущего, AI и web3.",
    image: featureImage1.src,
  },
  {
    title: "Крутые корпоративы и тимбилдинги",
    subtitle: "Проводим активные тимбилдинги, помогаем сотрудникам установить коннект.",
    image: featureImage1.src,
  },
  {
    title: "Возможность быстрого роста",
    subtitle: "Обеспечиваем рост: наши джуны быстро набирают  опыт и превращаются в сеньоров.",
    image: featureImage1.src,
  },
  {
    title: "Наши сотрудники — изобретатели",
    subtitle: "Создаем новые, уникальные вещи. Сотрудники Unistory — настоящие первопроходцы.",
    image: featureImage1.src,
  },
];

export const CompanyTeamRu = {
  title: "Наша команда",
  team: [
    {
      name: TEAM.alexanderAksenov.name.ru,
      post: "CEO. Фанат децентрализации и блокчейн-энтузиаст.",
      image: teamImage1.src,
      socials: {
        linkedIn: "https://www.linkedin.com/in/aiaksenov/",
      },
    },
    {
      name: TEAM.daniilSemenov.name.ru,
      post: "Руководитель проектного офиса. Менеджерит менеджеров проектов, а они менеджерят разработчиков.",
      image: teamImage2.src,
      socials: {
        linkedIn: "https://www.linkedin.com/in/danil2205/",
      },
    },
    {
      name: TEAM.vladislavKiribyatev.name.ru,
      post: "Главный бэкенд-самурай и монстр адекватных эстимейтов.",
      image: teamImage3.src,
      socials: {
        linkedIn: "https://ru.linkedin.com/in/vladislav-kirbiatev-2b2724216",
      },
    },
    {
      name: TEAM.antonSmolnikov.name.ru,
      post: "Эксперт по новым технологиям. Ответит на любые вопросы о web3, нейросетях и искусственном интеллекте.",
      image: teamImage4.src,
      socials: {
        telegram: "https://t.me/Antonunistory",
      },
    },
  ],
};

export const CompanyVacanciesRu = {
  title: {
    first: "Мы всегда в поиске ",
    second: "толковых ребят",
  },
  sidebar: {
    title: "Не нашли подходящую вакансию?",
    desc: "Если вы крутой и хотите работать с нами, то пишите в Telegram",
    button: "Написать",
    bottomText: "Мы ждем ваши CV",
  },
  vacancyCTA: {
    title: "Как откликнуться на вакансию:",
    desc: "Для отклика на вакансию пишите нам в Telegram.",
    buttonText: "Написать в Telegram ",
  },
};

export const CompanyMapRu = {
  title: "Наши клиенты — со всего мира",
};
