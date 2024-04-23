import featureImage1 from "@public/assets/images/company/feature-team-building.jpg";
import featureImage2 from "@public/assets/images/company/feature-techs.jpg";
import featureImage3 from "@public/assets/images/company/feature-growth.jpg";
import featureImage4 from "@public/assets/images/company/feature-spirit.jpg";
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
    title: "Тимбилдинг",
    subtitle:
      "Ходим в горы, плаваем на лодках по озеру, вручную делаем баню из камней, устраиваем туры по питерским барам.",
    image: featureImage1.src,
  },
  {
    title: "Технологии",
    subtitle:
      "Мы не пилим простые сайты и лендинги. Вместо этого разрабатываем сложные веб-сервисы и приложения с AI и блокчейном.",
    image: featureImage2.src,
  },
  {
    title: "Быстрый рост",
    subtitle:
      "Команда работает над сложными проектами под чутким наставничеством тимлидов. Разработчики постоянно обмениваются обытом.",
    image: featureImage3.src,
  },
  {
    title: "Дух изобретательства",
    subtitle:
      "Создаем то, чего до нас никто не делал: децентрализованный AI, определение болезни по фото, работа с лидаром.",
    image: featureImage4.src,
  },
];

export const CompanyTeamRu = {
  title: "Наша команда",
  team: [
    {
      name: TEAM.alexanderAksenov.name.ru,
      post: "CEO Unistory. Увлекается сёрфингом по волнам четвёртой технологической революции\n",
      image: teamImage1.src,
    },
    {
      name: TEAM.daniilSemenov.name.ru,
      post: "Руководитель проектного офиса. Заботится о разработчиках и всегда готов прийти на помощь ПМ'ам",
      image: teamImage2.src,
    },
    {
      name: TEAM.vladislavKiribyatev.name.ru,
      post: "Главный бэкенд-самурай и монстр адекватных эстимейтов.",
      image: teamImage3.src,
    },
    {
      name: TEAM.antonSmolnikov.name.ru,
      post: "Business development manager, хотя сам предпочитает просто sales. Эксперт в области AI и web3.",
      image: teamImage4.src,
    },
  ],
};

export const CompanyVacanciesRu = {
  title: {
    first: "Мы всегда в поиске ",
    second: "толковых ребят",
  },
  sidebar: {
    title: "Нет подходящей вакансии?",
    desc: "Если ты крутой и хочешь работать с нами, то пиши в Telegram",
    button: "Написать",
    bottomText: "Мы ждем твое резюме",
  },
  vacancyCTA: {
    title: "Как откликнуться на вакансию:",
    desc: "Для отклика на вакансию пиши нам в Telegram.",
    buttonText: "Написать в Telegram ",
  },
};

export const CompanyMapRu = {
  title: "Наши клиенты — со всего мира",
};
