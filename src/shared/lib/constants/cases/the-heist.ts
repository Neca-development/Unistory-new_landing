import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import heistBanner from "@public/assets/images/cases/heist/banner.jpg";
import heistBannerMob from "@public/assets/images/cases/heist/banner_mob.jpg";
import heistImage2 from "@public/assets/images/cases/heist/modern.jpg";
import heistImage1 from "@public/assets/images/cases/heist/presale.jpg";
import heistScheme from "@public/assets/images/cases/heist/scheme_en.jpg";
import heistSchemeRu from "@public/assets/images/cases/heist/scheme_ru.jpg";
import heistImage3 from "@public/assets/images/cases/heist/stacking.jpg";
import heistThumb from "@public/assets/images/cases/heist/thumb.jpg";
import heistThumbMob from "@public/assets/images/cases/heist/thumb_mob.jpg";

export const THE_HEIST: ICase = {
  title: "The Heist",
  id: "the-heist",
  heroTitle: {
    en: "The Heist – Play2Earn based on NFT collection",
    ru: "The Heist – Play2Earn игра на базе NFT коллекции",
  },
  metaTitle: {
    en: "The Heist: Play2Earn based on NFT collection",
    ru: "The Heist — Play2Earn игра на базе NFT-коллекции",
  },
  metaDescription: {
    en: "Creating a web application using NFT technology to implement game mechanics: development of the website, the in-game stacking system, the smart collection contract on the BSC network, and the tokenomics of the entire project.",
    ru: "Создание веб-приложения с использованием технологии NFT для реализации игровых механик: разработали вебсайт, внутриигровую стейкинг систему, смарт-контракт коллекции в сети BSC и токеномику всего проекта.",
  },
  categories: {
    en: ["P2E game based on NFT collection"],
    ru: ["P2E игра на базе NFT коллекции"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "bitcoin"],
  textColor: "white",
  technologies: [
    TECHNOLOGIES.react,
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.nest,
    TECHNOLOGIES.solidity,
    TECHNOLOGIES.node,
  ],
  thumbnail: {
    desktop: heistThumb.src,
    mob: heistThumbMob.src,
  },
  heroBanner: {
    desktop: heistBanner.src,
    mob: heistBannerMob.src,
  },
  description: {
    en: "Creating a web application using NFT technology to implement game mechanics: developed the website, the in-game stacking system, the smart collection contract on the BSC network, and the tokenomics of the entire project.",
    ru: "Создание веб-приложения с использованием технологии NFT для реализации игровых механик: разработали вебсайт, внутриигровую стейкинг систему, смарт контракт коллекции в сети BSC и токеномику всего  проекта.",
  },
  params: {
    budget: {
      ru: 1_500_000,
      en: 21_000,
    },
    period: 3,
    year: 2021,
  },
  main: [
    {
      title: {
        en: "Presale of NFTs",
        ru: "Предпродажа NFT коллекции",
      },
      text: [
        {
          text: {
            en: "Marketing tactics included pre-selling a limited amount of  NFTs  to early users. Our team prepared the logic of distributing a certain number of tokens, which have better characteristics compared to public NFT sale. One of the main differences: increased rewards with each game iteration. In this way, we helped raise more funds at the initial stage of the project.",
            ru: "Маркетинговая тактика включала в себя предпродажу части NFT коллекции ранним пользователям. Наша команда подготовила логику дистрибьюции ограниченного числа токенов, которые имеют лучшие характеристики, в сравнении с токенами публичной продажи. Одно из главных отличий: повышенные вознаграждения с каждой игровой итерации. Таким образом, мы помогли привлечь больше средств на начальном этапе проекта.",
          },
        },
      ],
      banner: heistImage1.src,
    },
    {
      title: {
        en: "Upgrades",
        ru: "Модернизация",
      },
      text: [
        {
          text: {
            en: "One of the features of the smart collection contract is unlimited creation of NFTs. To form a more predictable economy of the project, we have implemented a token upgrade feature. This method allows users to exchange 3 NFTs of the same kind and rarity for 1 NFT with more favorable characteristics. The exchanged tokens are withdrawn from the total supply, which increases the market value of NFTs and the capitalization of the entire collection.",
            ru: "Одна из особенностей смарт контракта коллекции – неограниченное создание NFT. Для формирования более предсказуемой экономики проекта, мы реализовали функцию модернизации токенов. Данный метод позволяет пользователям обменять 3 NFT одного вида и редкости на 1 NFT с более выгодными характеристиками. Обмененные токены выводятся из общего оборота, что повышает рыночную стоимость отдельной NFT и капитализацию всей коллекции.",
          },
        },
      ],
      banner: heistImage2.src,
    },
    {
      title: {
        en: "Staking",
        ru: "Стейкинг",
      },
      text: [
        {
          text: {
            en: "In addition to the NFT smart contract, our team developed $CIAO smart contract of fungible tokens. Users can deposit project assets for a certain period of time, with the expectation of making a profit in the future. Staking is also implemented with some game mechanics and has several different types. Users can join staking guilds, improve, destroy, or just receive passive income from staking pools.",
            ru: "Помимо NFT смарт контракта , наша команда разработала смарт контракт взаимозаменяемых токенов – $CIAO. Пользователи могут депонировать активы проекта на определенный период времени, в рассчете на  получение прибыли в будущем. Стейкинг так же реализован с некоторой игровой механикой и имеет несколько разных типов. Пользователи могут объединятся в стейкинг гильдии, улучшать, уничтожать, или же просто получать пассивный доход со стейкинг пулов.",
          },
        },
      ],
      banner: heistImage3.src,
    },
    {
      title: {
        ru: "",
        en: "",
      },
      text: [],
      banner: {
        en: heistScheme.src,
        ru: heistSchemeRu.src,
      },
    },
  ],
  team: [
    TEAM.daniilSemenovHead,
    TEAM.andreyJurin,
    TEAM.yanSofronov,
    TEAM.nikitaBobkov,
    TEAM.maksimKlimchenko,
    TEAM.danilSilverstov,
    TEAM.alexanderYachevsky,
  ],
};
