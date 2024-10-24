import { ICase } from "@shared/lib/types";
import { TECHNOLOGIES } from "@shared/lib/constants/technologies.constats";
import { TEAM } from "@shared/lib/constants/team";

import lisAboutRu from "@public/assets/images/cases/lis/lis-01.jpg";
import lisAboutEn from "@public/assets/images/cases/lis/lis-07.jpg";
import lisScenario from "@public/assets/images/cases/lis/lis-02.jpg";
import lisCharityRu from "@public/assets/images/cases/lis/lis-03.jpg";
import lisCharityEn from "@public/assets/images/cases/lis/lis-08.jpg";
import lisReportsRu from "@public/assets/images/cases/lis/lis-04.jpg";
import lisReportsEn from "@public/assets/images/cases/lis/lis-09.jpg";
import lisMath from "@public/assets/images/cases/lis/lis-05.jpg";
import lisSpeed from "@public/assets/images/cases/lis/lis-06.jpg";

export const LIS: ICase = {
  title: {
    en: "Lido Impact Staking",
    ru: "Lido Impact Staking",
  },
  id: "lis",
  heroTitle: {
    en: "Development of a web service for staking Ethereum with the option to allocate donations to charity",
    ru: "Разработка веб-сервиса для стейкинга Ethereum с возможностями отчислений на благотворительность",
  },
  videoPreview: "/assets/videos/lis/1080_video.mp4",
  isVideoPreviewAutoplay: true,
  tag: "web3",
  categories: {
    en: ["ETH Staking Service with Charitable Donations"],
    ru: ["Сервис для стейкинга ETH с отчислениями на благотворительность"],
  },
  metaTitle: {
    en: "Development of a Charitable ETH Staking Service",
    ru: "Разработка благотворительного сервиса для стейкинга ETH",
  },
  metaDescription: {
    en: "At Unistory, we developed a service for staking ETH with the option to make charitable donations. The service’s partners are GiveDirectly and Treedom.",
    ru: "Мы в Unistory разработали сервис для стейкинга ETH с возможностью благотворительных отчислений. Партнеры сервиса — фонды GiveDirectly и Treedom.",
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "black",
  technologies: [TECHNOLOGIES.react, TECHNOLOGIES.solidity, TECHNOLOGIES.node, TECHNOLOGIES.wagmi],
  thumbnail: {
    desktop: "/assets/videos/lis/1000_video.mp4",
    mob: "/assets/videos/lis/1080_video.mp4",
  },

  heroBanner: {
    desktop: "/assets/videos/lis/2880_video.mp4",
    mob: "/assets/videos/lis/1000_video.mp4",
  },
  description: {
    en: "Development of a web service for staking ETH. Ensuring the possibility to donate a percentage of staking rewards to global charitable foundations. Providing enthusiasts with a tool to help those in need and giving non-profit organizations a new source of funding.",
    ru: "Разработать веб-сервис для стейкинга ETH. Обеспечить возможность отчислений в мировые благотворительные фонды в виде процента со стейкинга. Дать криптоэнтузиастам инструмент для помощи нуждающимся, а некоммерческим организациям — новый источник финансирования.",
  },
  params: {
    period: 10,
    year: "2024",
  },
  main: [
    {
      title: {
        en: "A Few Words About the Client",
        ru: "Несколько слов о заказчике",
      },
      text: [
        {
          text: {
            en: "Launchnodes is an ecosystem for ETH staking, and Lido is the largest DeFi protocol on Ethereum. Together, Lido and Launchnodes approached Unistory to develop a service that allows users to earn rewards while helping charitable organizations worldwide. The project was named Lido Impact Staking.",
            ru: "Launchnodes — экосистема для стейкинга ETH, Lido — крупнейший DeFi-протокол на Ethereum. Партнеры Lido и Launchnodes обратились в Unistory, чтобы разработать сервис, где пользователи смогут зарабатывать и помогать благотворительным организациям со всего мира — Lido Impact Staking.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lisAboutEn.src,
          ru: lisAboutRu.src,
        },
        mob: {
          en: lisAboutEn.src,
          ru: lisAboutRu.src,
        },
      },
    },
    {
      title: {
        en: "Main Workflow Scenario",
        ru: "Основной сценарий работы",
      },
      text: [
        {
          text: {
            en: "The user authorizes on the platform through a crypto wallet. They go to the staking page, where they choose the amount of ETH they want to stake. Without leaving the window, they can select a percentage of the staking rewards that will go to charity.",
            ru: "Пользователь проходит авторизацию на платформе через крипто-кошелек. Переходит на страницу стейкинга, где выбирает сумму ETH, которую хочет застейкать. Не покидая окна, может выбрать процент со стейкинга, который будет идти на благотворительность.",
          },
        },
        {
          text: {
            en: "For example, we can enter the platform, stake 3 ETH, and allocate a percentage of the earnings to a non-profit organization. This can be any amount from 1 to 100 percent of our earnings.",
            ru: "Например, мы можем зайти на платформу, застейкать 3 ETH, и перечислять процент суммы, которую зарабатываем, в НКО. Это может быть любая сумма от 1 до 100 процентов нашего заработка.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lisScenario.src,
          ru: lisScenario.src,
        },
        mob: {
          en: lisScenario.src,
          ru: lisScenario.src,
        },
      },
    },
    {
      title: {
        en: "Charity on the Platform",
        ru: "Благотворительность на платформе",
      },
      text: [
        {
          text: {
            en: "The user can choose an organization to which their earnings will be donated. In the future, we plan to add the ability to donate to specific charitable campaigns and projects of these organizations.",
            ru: "Пользователь может выбрать организацию, куда будут производиться отчисления с его заработка. В будущем планируем добавить возможность жертвовать на отдельные благотворительные кампании и проекты этих организаций.",
          },
        },
        {
          text: {
            en: "A small percentage of users' profits goes to the service. This is necessary to ensure the project's self-sustainability.",
            ru: "Небольшой процент от прибыли пользователей уходит сервису. Это необходимо, чтобы обеспечить самоокупаемость проекта.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lisCharityEn.src,
          ru: lisCharityRu.src,
        },
        mob: {
          en: lisCharityEn.src,
          ru: lisCharityRu.src,
        },
      },
    },
    {
      title: {
        en: "How Reports Work",
        ru: "Как устроена отчетность",
      },
      text: [
        {
          text: {
            en: "On the Rewards & Donations page, the user can track information about their earnings and charity contributions. Here, the transaction history, total profit volume, and amounts of charitable donations are detailed.",
            ru: "На странице Rewards & Donations пользователь может отслеживать информацию по своему заработку и благотворительности. Здесь расписана история транзакций, общий объем прибыли и суммы благотворительных отчислений.",
          },
        },
        {
          text: {
            en: "All this information can be exported as a PDF. The documents we generate on the platform can be accepted by tax authorities in some countries.",
            ru: "Всю эту информацию можно экспортировать в виде PDF. Документы, которые мы формируем на платформе, могут быть приняты в налоговых органах некоторых стран.",
          },
        },
        {
          text: {
            en: "Why Is This Necessary? Depending on the tax system, you can provide evidence of your charitable activities and thereby reduce the amount of taxes you pay.",
            ru: "Зачем это нужно? В зависимости от налоговой системы, вы можете обеспечить доказательства своей благотворительной деятельности и тем самым уменьшить объем налогов, которые платите.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lisReportsEn.src,
          ru: lisReportsRu.src,
        },
        mob: {
          en: lisReportsEn.src,
          ru: lisReportsRu.src,
        },
      },
    },

    {
      title: {
        en: "Project Mathematics and Smart Contracts",
        ru: "Математика проекта и смарт-контракты",
      },
      text: [
        {
          text: {
            en: "During the development of the smart contract, we faced a challenge. Users' earnings, platform earnings, charitable donations—all this results in a huge number of transactions.",
            ru: "Во время разработки смарт-контракта мы столкнулись с проблемой. Заработок пользователей, заработок платформы, благотворительные отчисления — все это составляет огромное количество транзакций.",
          },
        },
        {
          text: {
            en: "Each transaction incurs additional fees. If all fees are paid separately, no one will earn anything: neither the user, nor the charitable funds, nor the platform.",
            ru: "Каждая транзакция — это дополнительные комиссии. Если оплачивать все комиссии отдельно, никто ничего не заработает: ни пользователь, ни благотворительные фонды, ни платформа.",
          },
        },
        {
          text: {
            en: "To minimize fees, we thoroughly worked out the project's mathematics. Our experts created several dozen formulas: we reduced the amount of data stored on the smart contracts and eliminated data redundancy.",
            ru: "Чтобы свести комиссии к минимуму, мы глубоко проработали математику проекта. Составили несколько десятков формул: уменьшили объем данных, которые хранятся на смарт-контрактах, а также избавились от переиспользования информации.",
          },
        },
        {
          text: {
            en: "The formulas utilize numerous indicators: total ETH amount of the user, amount of staked ETH, share of the non-profit organization, share of the platform, share of the user, overall staking percentage.",
            ru: "В формулах используется множество показателей: общая сумма ETH пользователя, сумма застейканного ETH, доля НКО, доля платформы, доля пользователя, общий процент со стейкинга.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lisMath.src,
          ru: lisMath.src,
        },
        mob: {
          en: lisMath.src,
          ru: lisMath.src,
        },
      },
    },
    {
      title: {
        en: "Platform Performance",
        ru: "Быстродействие платформы",
      },

      text: [
        {
          text: {
            en: "We conducted load testing and made code adjustments in the backend to ensure the service can handle a large influx of users.",
            ru: "Провели нагрузочное тестирование и внесли в бэкенд корректировки кода, чтобы сервис выдержал большой наплыв пользователей.",
          },
        },
        {
          text: {
            en: "To improve performance, we started storing information from different services on our server instead of constantly querying multiple APIs. Data updates occur every half hour.",
            ru: "Чтобы улучшить быстродействие, стали хранить информацию с разных сервисов у себя на сервере — вместо того, чтобы постоянно обращаться к нескольким API. Актуализация данных происходит каждые полчаса.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lisSpeed.src,
          ru: lisSpeed.src,
        },
        mob: {
          en: lisSpeed.src,
          ru: lisSpeed.src,
        },
      },
    },

    {
      title: {
        en: "Future of the Project",
        ru: "Будущее проекта",
      },

      text: [
        {
          text: {
            en: "Currently, the service collaborates with two charitable foundations: GiveDirectly and Treedom. Negotiations for collaboration with the World Food Programme are at the final stage.",
            ru: "Сейчас сервис сотрудничает с двумя благотворительными фондами: GiveDirectly и Treedom. Переговоры по сотрудничеству с World Food Programme находятся на финальной стадии.",
          },
        },
        {
          text: {
            en: "We have implemented the technical capability for easy sharing on social media, including reposts to the decentralized social network Warpcast.",
            ru: "Реализовали техническую возможность для удобного шэринга в социальных сетях. В том числе доступны репосты в децентрализованную соцсеть Warpcast.",
          },
        },
      ],
    },
  ],

  team: [
    TEAM.ilyaSokolov,
    TEAM.viktorKryuchkov,
    TEAM.viktorOdinetc,
    TEAM.yanBortsov,
    TEAM.vladislavKiribyatevDevOps,
  ],
};
