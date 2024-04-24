import { ICase } from "@shared/lib/types";
import donorBanner from "@public/assets/images/cases/donor/banner.png";
import donorHistory from "@public/assets/images/cases/donor/history.png";
import donorApprove from "@public/assets/images/cases/donor/approve.jpg";
import donorAuth from "@public/assets/images/cases/donor/auth.png";
import donorCrypto from "@public/assets/images/cases/donor/crypto.png";
import donorEarnings from "@public/assets/images/cases/donor/earnings.png";
import donorStacking from "@public/assets/images/cases/donor/stacking.jpg";
import donorReferal from "@public/assets/images/cases/donor/referal.png";
import donorBlockchain from "@public/assets/images/cases/donor/blockhain.png";
import chatbotBannerThumb from "@public/assets/images/cases/donor/thumb.jpg";
import chatbotBannerThumbMob from "@public/assets/images/cases/donor/thumb_mob.jpg";
import { TECHNOLOGIES } from "../technologies.constats";
import { TEAM } from "../team";

export const DONOR: ICase = {
  title: {
    en: "Donor Finance",
    ru: "Donor Finance",
  },
  id: "donor",
  heroTitle: {
    en: "Donor Finance - a charitable blockchain project blurring the boundaries between web3 and web2",
    ru: "Donor Finance — благотворительный блокчейн-проект, стирающий границы между web3 и web2",
  },
  categories: {
    en: ["A charitable platform at the intersection of web3 and web2"],
    ru: ["Благотворительная площадка на грани web3 и web2"],
  },
  metaTitle: {
    en: "Development of a charitable blockchain project",
    ru: "Разработка благотворительного блокчейн-проекта",
  },
  metaDescription: {
    en: "Together with our clients, we have developed a charitable platform that utilizes financial tools to motivate users to do good deeds.",
    ru: "Вместе с нашими заказчиками мы разработали благотворительную площадку, которая использует финансовые инструменты, чтобы мотивировать пользователей делать добрые дела.",
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [
    TECHNOLOGIES.metamask,
    TECHNOLOGIES.stripe,
    TECHNOLOGIES.wagmi,
    TECHNOLOGIES.theGraph,
    TECHNOLOGIES.solidity,
  ],
  thumbnail: {
    desktop: chatbotBannerThumb.src,
    mob: chatbotBannerThumbMob.src,
  },
  heroBanner: {
    desktop: donorBanner.src,
    mob: donorBanner.src,
  },
  description: {
    en: "The main idea of the Donor Finance project is to help those in need around the world while simultaneously providing people engaged in charity work with an opportunity for additional income. An accompanying goal is to unite the worlds of blockchain and fiat, web3 and web2, and lower the entry barrier for users into the crypto industry.",
    ru: "Главная идея проекта Donor Finance — помочь нуждающимся по всему миру и одновременно дать людям, которые занимаются благотворительностью, возможность дополнительного заработка. Сопутствующая цель — объединить миры блокчейна и фиата, web3 и web2, снизить порог входа пользователей в крипто-индустрию.",
  },
  params: {
    budget: {
      ru: 3_200_000,
      en: 32_000,
    },
    period: 3,
    year: "2024",
  },
  main: [
    {
      title: {
        en: "Project History",
        ru: "История проекта",
      },
      text: [
        {
          text: {
            en: "Ron is a serial entrepreneur from Canada. He has several successful projects to his name: a restaurant, a marketplace, an ERP system. In his free time, he is passionate about blockchain and crypto, and he manages a YouTube channel with 12,000 subscribers called TechTipsToGo. Currently, he has several businesses, but he wants to spend more time with his children and family. If he's going to undertake projects, they should be meaningful, something he can be passionate about!",
            ru: "Рон — серийный предприниматель из Канады. На его счету несколько успешных проектов: ресторан, маркетплейс, ERP-система. В свободное время увлекается темой блокчейна и крипто, держит YouTube-канал на 12 000 подписчиков TechTipsToGo. Сейчас у него несколько бизнесов, но все больше времени он хочет проводить с детьми и своей семьей. Если уж делать проекты — то пусть это будет что-то важное. Такое дело, за которое будешь гореть душой! ",
          },
        },
        {
          text: {
            en: "That's where Ron's meeting with Vamsi, another serial entrepreneur, comes in. Together, they came up with a project that would become their life's work - Donor, or Donor Finance. It's a blockchain-based charitable platform that provides donors with passive income opportunities.",
            ru: "И здесь Рону помогла встреча с Вамси, другим серийным предпринимателем. Вместе они придумали проект, который станет для них делом всей жизни — Donor, или Donor Finance. Это благотворительная площадка на основе блокчейна, которая дает жертвователям возможность пассивного дохода.",
          },
        },
      ],
      banner: donorHistory.src,
    },
    {
      title: {
        en: "Charity Market Competition",
        ru: "Конкуренция на рынке благотворительности",
      },
      text: [
        {
          text: {
            en: "The main competitor in the fundraising and charity sphere is GoFundMe. However, it is a fully web2 project; all donations and campaigns happen in fiat currency. Fiat is any official currency. Unlike decentralized blockchain and cryptocurrency, fiat is completely controlled by the government.",
            ru: "Главный конкурент в сфере фандрайзинга и благотворительности — GoFundMe. Но это полностью web2 проект, все пожертвования и кампании происходят в фиатной валюте. Фиат — это любая официальная валюта. В отличие от децентрализованного блокчейна и криптовалюты, фиат полностью контролируется государством.",
          },
        },
        {
          text: {
            en: "Ron and Vamsi have been passionate about crypto for a long time, and it was important for them to make the project based on blockchain technologies. Therefore, while GoFundMe and other platforms are competitors, they come from a different world - the fiat sphere",
            ru: "Рон и Вамси давно увлекаются криптой, и для них было важно сделать проект именно на технологиях блокчейна. Поэтому GoFundMe и другие площадки являются конкурентами, но из другого мира — из сферы фиата.",
          },
        },
        {
          text: {
            en: "What about competitors on the blockchain? There are many charitable platforms based on cryptocurrency, but Donor Finance stands out from them due to its integration with fiat, as well as a well-thought-out ambassadorship and referral link system.",
            ru: "А что с конкурентами на блокчейне? Благотворительные площадки, основанные на криптовалюте, существуют, и их достаточно много. Но проект Donor Finance отстраивается от них благодаря интеграции с фиатом, а также благодаря хорошо продуманной системе амбассадорства и реферальных ссылок. ",
          },
        },
      ],
    },
    {
      title: {
        en: "How We Will Verify Charity Information",
        ru: "Как будем подтверждать информацию о благотворительности",
      },
      text: [
        {
          text: {
            en: "An important aspect of any charitable project is proving to people that you are really doing good deeds and that all funds raised are going where they are needed. What are we doing for this? Several important things: voting system and algorithmic feed; KYC integration; reporting for creators of charitable campaigns; IPFS storage.",
            ru: "Важный момент для любого благотворительного проекта — доказать людям, что ты действительно делаешь добрые дела, и что все собранные средства идут куда нужно.  Что мы для этого делаем? Несколько важных вещей: система голосования и алгоритмической ленты; интеграция KYC; отчетность для создателей благотворительных кампаний; хранилище IPFS.",
          },
        },
      ],
      banner: donorApprove.src,
    },
    {
      title: {
        en: "Voting System and Algorithmic Feed",
        ru: "Система голосования и алгоритмической ленты",
      },
      text: [
        {
          text: {
            en: 'Once a charitable campaign is created, users can vote for it. The more votes, the higher the campaign will rise on the "Popular" page, and the more users will see it.',
            ru: "Как только благотворительная компания создана, пользователи смогут голосовать за нее. Чем больше голосов, тем выше кампания поднимется на странице «Популярное», и тем больше пользователей увидят ее. ",
          },
        },
        {
          text: {
            en: "We're discussing the idea that the effectiveness of a vote will depend on the user's balance. The higher the balance, the higher the vote will raise the campaign in the feed.",
            ru: "Обсуждаем идею, согласно которой эффективность голоса будет зависеть от баланса пользователя. Чем больше баланс, тем выше голос поднимет кампанию в ленте. ",
          },
        },
      ],
    },
    {
      title: {
        en: "KYC Technology Authorization",
        ru: "Авторизация по технологии KYC",
      },
      text: [
        {
          text: {
            en: "Know Your Customer (KYC) is a system that allows verifying identity through photos and documents. Only creators of charitable campaigns will be required to go through this procedure.",
            ru: "Know Your Customer (KYC, «Знай своего клиента») — это система, благодаря которой можно подтвердить личность по фото и документам. Проходить эту процедуру будут обязаны только создатели благотворительных кампаний. ",
          },
        },
        {
          text: {
            en: "Regular users will be able to donate even without registering on the platform. The project's authors want to provide donors with the possibility of anonymity.",
            ru: "Обычные пользователи смогут донатить даже без регистрации на платформе. Авторы проекта хотят предоставить жертвователям возможность анонимности. ",
          },
        },
      ],
      banner: donorAuth.src,
    },
    {
      title: {
        en: "Reporting and IPFS Storage",
        ru: "Отчетность и хранилище IPFS",
      },
      text: [
        {
          text: {
            en: "We plan to require creators of charitable campaigns to maintain detailed reporting. They will have to upload receipts and evidence that the funds raised have been spent exactly for the campaign's purposes. This is a necessary process without which it will be impossible to build trust among users and the community. And community and relationships with it are the main aspect of the Donor Finance project.",
            ru: "Планируем обязать создателей благотворительных кампаний вести подробную отчетность. Они должны будут загружать чеки и доказательства, что потратили собранные средства именно на цели кампании. Это необходимый процесс, без которого не получится выстроить доверие пользователей и коммьюнити. А коммьюнити и отношения с ним — главный аспект проекта Donor Finance.",
          },
        },
        {
          text: {
            en: "Receipts, documents, thousands of charitable campaigns - all of this takes up a lot of space. To store data and comply with the decentralized concept of the service, we will use an IPFS storage.",
            ru: "Чеки, документы, тысячи благотворительных кампаний — все это занимает много места. Для хранения данных и соблюдения децентрализованной концепции сервиса мы будет использовать IPFS-хранилище. ",
          },
        },
        {
          text: {
            en: "IPFS (InterPlanetary File System) - a communication protocol for creating a decentralized file system that replaces the existing HTTP internet protocol. Content hosted on IPFS is stored not on a single server, but on multiple nodes.",
            ru: "IPFS (InterPlanetary File System)— протокол связи для создания децентрализованной системы файлов, который идет на смену существующему интернет-протоколу HTTP. Контент, размещенный в IPFS, хранится не на одном сервере, а на множестве узлов.",
          },
        },
      ],
    },
    {
      title: {
        en: "Donor's Own Cryptocurrency",
        ru: "Собственная криптовалюта Donor",
      },
      text: [
        {
          text: {
            en: "Ron and Vamsi plan to create their own cryptocurrency linked to the Donor Finance platform. In the future, this coin should become the main one for the platform, and users will make most of their donations in it.",
            ru: "Рон и Вамси планируют создавать собственную криптовалюту, связанную с площадкой Donor Finance. В будущем этот койн должен стать основным для платформы, именно в нем пользователи будут делать большинство пожертвований. ",
          },
        },
        {
          text: {
            en: "But we'll take this step only when the platform becomes popular enough and when users from around the world start using it. The founders of Donor are confident that first, the project itself needs to be established, and only then a separate cryptocurrency for it. Unfortunately, many startups and crypto enthusiasts do the opposite: they launch a token first and only then think about how to promote it.",
            ru: "Но этот шаг будем делать. только когда платформа станет достаточно популярной, и когда пользователи со всего мира начнут ей пользоваться. Основатели Donor уверены, что вначале нужно делать сам проект, и только потом — отдельную криптовалюту для него. К сожалению, многие стартаперы и крипто-энтузиасты делают наоборот: в первую очередь запускают токен, и только потом думают, как заниматься его продвижением. ",
          },
        },
        {
          text: {
            en: "Therefore, payments will be accepted in different cryptocurrencies and blockchain networks.",
            ru: "Поэтому платежи будут приниматься в разных криптовалютах и разных блокчейн-сетях.",
          },
        },
      ],
      banner: donorCrypto.src,
    },
    {
      title: {
        en: "Doing Good can be Quick",
        ru: "Делать добро — это быстро",
      },
      text: [
        {
          text: {
            en: "It's easy to create a charitable campaign and organize fundraising. What's harder is achieving the financial goals of the campaign and reaching the targets, gathering all the necessary funds. Every day, thousands of people and organizations raise money for charity, but how quickly do these campaigns accomplish their goals?",
            ru: "Легко создать благотворительную кампанию и организовать сбор средств. Сложнее — выполнить финансовые цели кампании и добиться целей, собрать все нужные средства. Каждый день тысячи людей и организаций собирают деньги на благотворительность, но как быстро эти кампании решают свои задачи?",
          },
        },
        {
          text: {
            en: "The founders of the project, Ron and Vamsi, want to do everything to ensure that funds are raised quickly and the financial goals of the campaigns created on the platform can be achieved promptly. Literally within 1-3 days.",
            ru: "Основатели проекта, Рон и Вамси, хотят сделать все, чтобы средства собирались быстро, и финансовые цели кампаний, созданных на платформе, могли быть достигнуты оперативно. Буквально за 1-3 дня.",
          },
        },
        {
          text: {
            en: "To achieve this, we are implementing three features within Donor: a charitable percentage from staking, an ambassador program, and referral links.",
            ru: "Чтобы добиться этого, мы реализуем внутри Donor три фишки: благотворительный процент от стейкинга, амбассадорская программа, реферальные ссылки. ",
          },
        },
      ],
      banner: donorEarnings.src,
    },
    {
      title: {
        en: "Charitable Percentage from Staking",
        ru: "Благотворительный процент от стейкинга",
      },
      text: [
        {
          text: {
            en: "Many projects with their own cryptocurrency fail even before launch. Besides, there are already enough popular and profitable tokens in the world. So why create your own token? The answer is that the project creators plan to organize a charitable percentage from staking their own cryptocurrency.",
            ru: "Многие проекты с собственной криптовалютой проваливаются еще до запуска. К тому же, в мире уже достаточно популярных и рентабельных токенов. Тогда зачем делать свой токен? Ответ в том, что создатели проекта планируют организовать благотворительный процент со стейкинга собственной криптовалюты. ",
          },
        },
        {
          text: {
            en: "What is staking? It's similar to bank deposits, but in the world of blockchain and cryptocurrency. The owner of the cryptocurrency provides the platform with their tokens for storage for some time. As a result, they receive rewards in the form of additional tokens.",
            ru: "Что такое стейкинг? Это похоже на банковские вклады, только в мире блокчейна и криптовалюты. Владелец криптовалюты предоставляет платформе свои токены для хранения на какое-то время. Благодаря этому он получает вознаграждение в виде дополнительных токенов.",
          },
        },
        {
          text: {
            en: "When the Donor token is launched on the platform, users who stake it will receive a percentage — for example, it could be 12% per year. One percent of these twelve will automatically go to charity — to achieve the financial goals of charitable campaigns posted on the platform.",
            ru: "Когда токен Donor будет запущен на платформе, пользователи, которые занимаются его стейкингом, будут получать процент — например, это будет 12% в год. Один процент из этих двенадцати автоматически пойдет на благотворительность — на то, чтобы выполнить финансовые цели благотворительных кампаний, размещенных на платформе.",
          },
        },
      ],
      banner: donorStacking.src,
    },
    {
      title: {
        en: "Ambassador Program",
        ru: "Амбассадорская программа",
      },
      text: [
        {
          text: {
            en: "The idea of the project was born when the founders started talking to influencers from Cuba and Colombia. These are bloggers who live in countries where many people need help.",
            ru: "Сама идея проекта родилась, когда основатели начали общаться с инфлюенсерами из Кубы и Колумбии. Это блогеры, которые живут в странах, где многим людям нужна помощь. ",
          },
        },
        {
          text: {
            en: "Therefore, the ambassador program is an important part of Donor Finance. In each country, one or several Donor ambassadors will be selected to promote charitable campaigns. Thanks to this, the platform and specific fundraising campaigns will get the necessary coverage in the media and social networks.",
            ru: "Поэтому программа для амбассадоров, или амбассадорская программа — важная часть Donor Finance. В каждой стране будут выбраны один или несколько амбассадоров Donor, которые будут заниматься продвижением благотворительных кампаний. Благодаря этому площадка и конкретные кампании по сбору средств получат нужный охват в медиа и соцсетях. ",
          },
        },
        {
          text: {
            en: "But how to attract ambassadors? How to motivate people to advertise charitable projects? The answer is simple: each ambassador will receive a small percentage of the funds raised. It's just a tiny fraction that will allow achieving the financial goals of the charitable campaign quickly.",
            ru: "Но как привлечь амбассадоров? Как мотивировать людей рекламировать благотворительные проекты? Ответ прост: каждый амбассадор будет получать маленький процент от собранных средств. Это лишь крохотная доля, которая позволит быстро выполнить финансовые цели благотворительной кампании.",
          },
        },
      ],
    },
    {
      title: {
        en: "Referral Links",
        ru: "Реферальные ссылки",
      },
      text: [
        {
          text: {
            en: "Donor Finance allows not only media personalities and celebrities to earn. Everyone can do a good deed and get a small benefit. For this, together with Ron and Vamsi, we have developed a system of referral links.",
            ru: "Donor Finance позволит зарабатывать не только медийным личностям и знаменитостям. Каждый сможет сделать доброе дело и при этом получить небольшую выгоду. Для этого мы вместе с Роном и Вамси разработали систему реферальных ссылок.",
          },
        },
        {
          text: {
            en: "Anyone can create a referral link to a charitable campaign and place it wherever they want. Send it in personal messages to friends or post it in stories on social media. When someone follows this link and makes a donation, a small percentage of that amount will go to the balance of the link owner.",
            ru: "Любой человек может создать реферальную ссылку на благотворительную кампанию и разместить ее, где хочет. Отправить в личную переписку с друзьями или опубликовать сторис в социальной сети. Когда по этой ссылке кто-то перейдет и оставит пожертвование — маленький процент от этой суммы упадет на баланс владельцу ссылки. ",
          },
        },
      ],
      banner: donorReferal.src,
    },
    {
      title: {
        en: "Making Blockchain Accessible and Understandable",
        ru: "Делаем блокчейн доступным и понятным",
      },
      text: [
        {
          text: {
            en: "Ron and Vamsi presented the idea of creating a charitable platform based on blockchain to their friends, bloggers from Cuba and Colombia. The influencers' reaction was literally like this: \"What are you talking about? Cryptocurrency? Computers are rare here, and phones are old and don't always support even regular internet payments.",
            ru: "Рон и Вамси озвучили своим друзьям, блогерам из Кубы и Колумбии, идею создания благотворительной платформы на основе блокчейн. Реакция инфлюенсеров была буквально такой: «О чем вы говорите? Криптовалюта? У нас компьютер — это редкость, а телефоны старые и не всегда поддерживают даже обычные платежи в интернете». ",
          },
        },
        {
          text: {
            en: "To solve this problem, the creators of Donor developed a plan. If a user comes to the platform and wants to donate in crypto, they can create a cryptocurrency wallet right on the website. The wallet will be created in the MetaMask system — one of the most popular cryptocurrency wallets. The user will separately receive access to their wallet and will be able to use it in the future. They won't even need to know what blockchain is.",
            ru: "Чтобы решить эту проблему, основатели Donor разработали план. Если пользователь пришел на платформу и хочет сделать донат в крипте, он может создать криптовалютный кошелек прямо на страницах сайта. Кошелек будет создан в системе MetaMask — это один из самых популярных криптовалютных кошельков. Пользователь отдельно получит доступы к своему кошельку и сможет в дальнейшем пользоваться им. Для всего этого ему даже не потребуется знать, что такое блокчейн. ",
          },
        },
        {
          text: {
            en: "Moreover, the creators of Donor Finance don't limit donations to cryptocurrency. The Unistory team has connected Stripe, an international system for secure internet payments using plastic cards, to the platform. Thanks to this, users will be able to donate in fiat currency if necessary.",
            ru: "Кроме того, создатели Donor Finance не ограничиваются пожертвованиями в криптовалюте. Команда Unistory подключила к платформе Stripe, международную систему для защищенных интернет-платежей с помощью пластиковых карт. Благодаря этому пользователи при необходимости смогут донатить и в фиатной валюте. ",
          },
        },
      ],
    },
    {
      title: {
        en: "Community Is the Foundation of the Platform",
        ru: "Основа платформы — коммьюнити",
      },
      text: [
        {
          text: {
            en: "Currently, the Unistory team is actively working on implementing all the features that will make Donor a unique platform — just as Ron and Vamsi envisioned it. At the same time, Ron is working on PR and promotion of Donor: telling people from the blockchain industry about the new service.",
            ru: "Сейчас команда Unistory активно работает над реализацией всех фишек, которые позволят сделать Donor уникальной платформой — именно такой, как ее задумали Рон и Вамси. Параллельно Рон работает над пиаром и продвижением Donor: рассказывает людям из индустрии блокчейна о новом сервисе.",
          },
        },
        {
          text: {
            en: "The project's mission is to allow people to do good deeds and earn at the same time. When this whole mechanism starts working, community members will be able to raise funds for the needs of those who need help. And most importantly — to do it quickly.",
            ru: "Миссия проекта — позволить людям делать добрые дела и при этом заработать самим. Когда вся эта машина заработает, люди из коммьюнити смогут собирать средства на нужды тех, кто нуждается в помощи. И главное — делать это оперативно. ",
          },
        },
      ],
      banner: donorBlockchain.src,
    },
  ],
  review: {
    author: {
      name: {
        en: "(c) Ron",
        ru: "(c) Рон",
      },
      position: {
        en: "",
        ru: "",
      },
      company: "Donor Finance",
      photo: "",
    },
    text: {
      en: "«When we first met Unistory, I asked many questions to understand if you truly understand web3. I quickly realized that coming across Unistory was a stroke of luck. Unistory created a decentralized charity SaaS for us in a short period of time. My business partner and I often have many questions, and our project manager, Ilya, always promptly addresses them. Everything is transparent and we are happy to work with you from day one».\n",
      ru: "«Когда мы впервые встретились с Unistory, я задавал много вопросов, чтобы понять, что вы действительно разбираетесь в web3. Быстро понял, что наткнуться на эту команду было большой удачей. Unistory в короткие сроки разработали для нас благотворительную площадку на блокчейне. Менеджер проекта, Илья, оперативно отвечает на наши вопросы. Процессы в компании прозрачные, и мы счастливы сотрудничать с первого дня».",
    },
  },
  team: [
    TEAM.ilyaSokolov,
    TEAM.andreyBabenkov,
    TEAM.andreyBarabanov,
    TEAM.danilaSkablov,
    TEAM.rostislavPetrov,
  ],
};
