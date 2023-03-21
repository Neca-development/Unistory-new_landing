import { TEAM } from './team'
import { ICase } from '../types'
import { TECHNOLOGIES } from './technologies.constats'
import personalPromo from '@public/assets/images/cases/personal/promo.jpg'
import personalImage1 from '@public/assets/images/cases/personal/integration.jpg'
import personalImage2 from '@public/assets/images/cases/personal/templates.jpg'
import personalImage3 from '@public/assets/images/cases/personal/messenger.jpg'
import personalScheme from '@public/assets/images/cases/personal/scheme.jpg'

import gasmonstersBanner from '@public/assets/images/cases/gas-monsters/banner.jpg'
import gasmonstersImage1 from '@public/assets/images/cases/gas-monsters/modern.jpg'
import gasmonstersImage2 from '@public/assets/images/cases/gas-monsters/random.jpg'
import gasmonstersScheme from '@public/assets/images/cases/gas-monsters/scheme.jpg'

import heistBanner from '@public/assets/images/cases/heist/banner.jpg'
import heistScheme from '@public/assets/images/cases/heist/scheme.jpg'
import heistImage1 from '@public/assets/images/cases/heist/presale.jpg'
import heistImage2 from '@public/assets/images/cases/heist/modern.jpg'
import heistImage3 from '@public/assets/images/cases/heist/stacking.jpg'

import xilBanner from '@public/assets/images/cases/xillion/banner.jpg'
import xilScheme from '@public/assets/images/cases/xillion/scheme.jpg'
import xilImage1 from '@public/assets/images/cases/xillion/quiz.jpg'
import xilImage2 from '@public/assets/images/cases/xillion/dao.jpg'
import xilImage3 from '@public/assets/images/cases/xillion/stacking.jpg'

import sipsignalBanner from '@public/assets/images/cases/sipsignal/banner.jpg'
import sipsignalImage1 from '@public/assets/images/cases/sipsignal/web.jpg'
import sipsignalImage2 from '@public/assets/images/cases/sipsignal/efax.jpg'
import sipsignalImage3 from '@public/assets/images/cases/sipsignal/admin.jpg'
import sipsignalClient from '@public/assets/images/cases/sipsignal/bogdan.jpg'
import sipsignalLogo from '@public/assets/images/cases/sipsignal/logo.png'

export const CASES: ICase[] = [
  {
    title: 'Personal',
    id: 'personal',
    heroTitle: 'Personal – multi-platform\n HR application',
    categories: ['Server development', 'Сlient development'],
    showCategoriesOnPage: false,
    icons: ['monitor', 'phone01'],
    textColor: 'white',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.reactNative,
    ],
    banner: personalPromo.src,
    description:
      'Our team had to develop an HR aggregator application that helps collect all resumes in one place, facilitates communication with candidates and has integration with popular job search platforms.',
    params: {
      budget: 2300000,
      period: 9,
      year: 2022,
    },
    main: [
      {
        title: 'Integration with HR services',
        text: [
          {
            text: 'To reduce the time it takes to browse employee search sites, and to bring all resumes together, we decided to aggregate the existing platforms into one application. In total, our team has integrated six major platforms, including HH.ru and Avito. Our integrations allow app users to seamlessly receive candidate resumes from multiple sources at once.',
          },
        ],
        banner: personalImage1.src,
      },
      {
        title: 'Custom templates for interview invitations',
        text: [
          {
            text: 'We created a system to create customizable templates cards that users can send to job candidates. This solution significantly saves time in processing a large number of incoming resumes, and this is important, because optimization is the first priority for any business.',
          },
        ],
        banner: personalImage2.src,
      },
      {
        title: 'Built-in chat to display messages from HR services',
        text: [
          {
            text: 'The app collects not only candidates resumes, but also their messages from various services. To make this process even more convenient, we created a built-in chat room where users can communicate with future employees from all necessary sources.',
          },
        ],
        banner: personalImage3.src,
      },
      {
        title: '',
        text: [
          {
            subtitle: 'Smart tips for making up vacancies',
            text: 'We parsed over ten thousand different job ads and used statistical analysis to collect the most common requirements. This made it possible to compile smart tips for all kinds of jobs.',
          },
          {
            subtitle: 'Placing vacancies in different services',
            text: 'We have unified job requirements across all services, which allows the users to fill out only the app’s form.',
          },
        ],
        banner: personalScheme.src,
      },
    ],
    team: [
      TEAM.alexanderAksenov,
      TEAM.daniilSemenov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.andreyBarabanov,
      TEAM.andreyPaskarenko,
      TEAM.andreyBabenkov,
      TEAM.alekseyKlimenko,
      TEAM.ernestMironov,
      TEAM.kirillElizarov,
      TEAM.vladislavKiribyatev,
    ],
  },

  {
    title: 'Gas Monsters',
    id: 'gas-monsters',
    heroTitle: 'Creation of a gamified\n NFT collection',
    categories: [
      'Blockchain development',
      'Integration',
      'HighLoad',
      'Engineering',
      'Server development',
      'Client development',
    ],
    showCategoriesOnPage: true,
    icons: ['monitor', 'bitcoin'],
    textColor: 'black',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.solidity,
      TECHNOLOGIES.node,
      TECHNOLOGIES.chainlinkVrf,
      TECHNOLOGIES.chainlinkNode,
    ],
    banner: gasmonstersBanner.src,
    description:
      'The main goal of the project was to develop a minting website for the NFT collection, where users can buy NFTs and then upgrade them for the gas they spend on Ethereum network.',
    params: {
      budget: 3000000,
      period: 6,
      year: 2022,
    },
    main: [
      {
        title: 'Upgradable NFTs',
        text: [
          {
            text: 'The main feature of the collection – NFT owners can upgrade their Dragons from level 1st to 7th. Upgrades are directly related to a user transactions in Ethereum network: the more transactions have been made, the more experience users gains, which he can spend to improve owned Dragon. This feature gives additional interest to the project, and besides, it is a really clear and, most importantly, transparent mechanics.',
          },
        ],
        banner: gasmonstersImage1.src,
      },
      {
        title: 'Randomly generated tokens',
        text: [
          {
            text: 'To define random NFT layers, our team used the Chainlink VRF blockchain service: with its help, we get randomized parameters inside the blockchain. After generating them, the layer data is directly written into the smart contract of the collection. As a result, this numerical combination serves as an identification file in a folder on IPFS. Subsequently, no one can change the NFT layers - everything is done in the best tradition of decentralized applications.',
          },
        ],
        banner: gasmonstersImage2.src,
      },
      {
        title: 'Architectural solution',
        text: [
          {
            subtitle: 'The goal',
            text: 'For level up of a Dragon, the smart collection contract must receive data about ETH spent by users on commissions in Ethereum network. ',
          },
          {
            subtitle: 'Solution',
						text: 'We created an architecture in which a smart contract accesses the project backend via Chainlink, which in turn communicates with Etherscan blockchain-explorer. After receiving the user transaction data and conducting necessary calculations, the server application generates and uploads a new image with NFT metadata to IPFS. It is the data that will be displayed to the user when querying the collection smart contract.',
          },
        ],
        banner: gasmonstersScheme.src,
      },
    ],
    team: [
      TEAM.nursultanBegenov,
      TEAM.daniilSemenov,
      TEAM.maksimKlimchenko,
      TEAM.nikitaBobkov,
      TEAM.vechyaslavValdykin,
      TEAM.andreyBarabanov,
      TEAM.danilaSkablov,
    ],
  },

  {
    title: 'The Heist',
    id: 'the-heist',
    heroTitle: 'The Heist – Play2Earn based on NFT collection',
    categories: [
      'Blockchain development',
			'Integration',
      'HighLoad',
      'Engineering',
      'Server development',
      'Client development',
    ],
    showCategoriesOnPage: false,
    icons: ['monitor', 'bitcoin'],
    textColor: 'white',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.solidity,
    ],
    banner: heistBanner.src,
    description:
      'Creating a web application using NFT technology to implement game mechanics: developed the website, the in-game stacking system, the smart collection contract on the BSC network, and the tokenomics of the entire project.',
    params: {
      budget: 1500000,
      period: 3,
      year: 2021,
    },
    main: [
      {
        title: 'Presale of NFTs',
        text: [
          {
            text: 'Marketing tactics included pre-selling a limited amount of  NFTs  to early users. Our team prepared the logic of distributing a certain number of tokens, which have better characteristics compared to public NFT sale. One of the main differences: increased rewards with each game iteration. In this way, we helped raise more funds at the initial stage of the project.',
          },
        ],
        banner: heistImage1.src,
      },
      {
        title: 'Upgrades',
        text: [
          {
            text: 'One of the features of the smart collection contract is unlimited creation of NFTs. To form a more predictable economy of the project, we have implemented a token upgrade feature. This method allows users to exchange 3 NFTs of the same kind and rarity for 1 NFT with more favorable characteristics. The exchanged tokens are withdrawn from the total supply, which increases the market value of NFTs and the capitalization of the entire collection.',
          },
        ],
        banner: heistImage2.src,
      },
      {
        title: 'Staking',
        text: [
          {
            text: 'In addition to the NFT smart contract, our team developed $CIAO smart contract of fungible tokens. Users can deposit project assets for a certain period of time, with the expectation of making a profit in the future. Staking is also implemented with some game mechanics and has several different types. Users can join staking guilds, improve, destroy, or just receive passive income from staking pools.',
          },
        ],
        banner: heistImage3.src,
      },
      {
        title: '',
        text: [],
        banner: heistScheme.src,
      },
    ],
    team: [
      TEAM.nursultanBegenov,
      TEAM.andreyJurin,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.danilSilverstov,
      TEAM.andreyBarabanov,
      TEAM.alexanderYachevsky,
      TEAM.vechyaslavValdykin,
    ],
  },

  {
    title: 'Xillion',
    id: 'xillion',
    heroTitle: 'Decentralized blockchain project incubator',
    categories: [
      'Blockchain development',
			'Integration',
      'HighLoad',
      'Engineering',
      'Server development',
      'Client development',
    ],
    showCategoriesOnPage: true,
    icons: ['monitor', 'bitcoin'],
    textColor: 'white',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.solidity,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.theGraph,
    ],
    banner: xilBanner.src,
    description:
      'Modernization of the investment DAO ecosystem in Polygon and BSC blockchain networks: refined the MVP version of the platform, created a separate P2E game module with quizzes, and integrated custom staking infrastructure into the existing decentralized community.',
    params: {
      budget: 3500000,
      period: 8,
      year: 2022,
    },
    main: [
      {
        title: 'Quiz mode',
        text: [
          {
            text: 'Xillion – is a constantly progressing product, which has been improved by our team implementing new services for the platform. During the development, owners noted the growing trend of Play2Earn projects in Polygon network. In an effort to improve the product and respond to the market, it was decided to create a separate rewarding blockchain quizzes platform. Together with the product team, we developed and integrated a separate project module running in Polygon network, where the community takes surveys and receives rewards for participation.',
          },
        ],
        banner: xilImage1.src,
      },
      {
        title: 'DAO-incubator',
        text: [
          {
            text: 'After investing in the listed projects on Xillion platform, each investor receives project tokens XIL. A separate smart contract of the platform is responsible for their distribution, which is the primitive of the entire protocol. It also automatically creates new smart contracts of listed projects that distribute unique tokens of incubated DAO products.',
          },
        ],
        banner: xilImage2.src,
      },
      {
        title: 'DAO voting and XIL staking',
        text: [
          {
            text: 'Our team revamped on-chain voting for the projects promoted on the platform: each user can independently propose ideas to XillionDAO members. Any member of the DAO with a balance of at least 10k XIL tokens can take part in the decentralized voting.  The voting process is implemented by a staking smart contract: the members have to deposit XIL tokens, which will be returned to them along with a percentage of the investment when the promoted project is successfully launched.',
          },
        ],
        banner: xilImage3.src,
      },
      {
        title: 'Architectural solution',
        text: [
          {
            text: 'For storing project history, voting results, number of investments, and investor information, we used TheGraph protocol, which can simultaneously work with both old and updated blockchain project architectures. Xillion is deployed on two blockchain networks: Binance Smart Chain and Polygon. Differentiating access to sections of the website and using the capabilities of ether.js library made it comfy for users to switch from one network to another. Also, the project uses a proxy architecture in the blockchain part of the project, which makes it easy to scale and add new modules in the future.',
          },
        ],
        banner: xilScheme.src,
      },
    ],
    team: [
      TEAM.alexanderAksenov,
      TEAM.daniilSemenov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.andreyBarabanov,
      TEAM.vechyaslavValdykin,
      TEAM.alekseyKlimenko,
      TEAM.kirillElizarov,
      TEAM.danilaSkablov,
    ],
  },

  {
    title: 'Sipsignal',
    id: 'sipsignal',
    heroTitle: 'Platform development for VoIP  provider',
    categories: [
      'Integration',
      'HighLoad',
      'Engineering',
      'Server development',
      'Client development',
      'Admin Panel',
    ],
    showCategoriesOnPage: true,
    icons: ['monitor', 'phone02'],
    textColor: 'black',
    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.express,
      TECHNOLOGIES.node,
      TECHNOLOGIES.postgresql,
    ],
    banner: sipsignalBanner.src,
    description:
      'The main goal of our team was to automate the company\'s existing processes. The client was not satisfied with too many user and employee actions during sales, which reduced the sales conversion rate and increased the company\'s costs.',
    params: {
      budget: 1400000,
      period: 6,
      year: 2021,
    },
    main: [
      {
        title: 'Development of the main web application',
        text: [
          {
            text: 'We have developed easy-to-navigate e-commerce application for choosing and purchasing cloud and telecom services. From the ground up, we created a custom card where platform clients can select the product they are interested in, specify all the necessary information for purchase, and create their own account to track their chosen subscription plan.',
          },
        ],
        banner: sipsignalImage1.src,
      },
      {
        title: 'eFax application for platform customers',
        text: [
          {
            text: 'In addition to developing the main web application, we have created a separate eFax service that is distributed as SaaS. eFax is a fairly popular solution in the U.S., and is often used in conjunction with VoIP. It was important for our client to provide as wide a range of services as possible: that\'s how we came up with the idea of creating a separate custom fax application.',
          },
        ],
        banner: sipsignalImage2.src,
      },
      {
        title: 'Custom admin panel',
        text: [
          {
            text: 'Our team developed an administrative panel and integrated it with the existing CRM system and databases. We took into account all the client\'s wishes and created a unique solution that combines all the necessary functions: tracking the status of orders for individual products, monitoring the sales funnel, managing users, employees and content on the platform.',
          },
        ],
        banner: sipsignalImage3.src,
      },
    ],
    review: {
      author: {
        name: 'Bogdan Pakhomenko',
        position: 'CEO of "BP Networking & Design Inc.',
        photo: sipsignalClient.src,
      },
      text: '"Good work, friends! Unistory is a well-managed and structured team: weekly updates, quick response times, and quality order fulfillment. I would recommend the Unistory team for any project. We were so pleased with the results that we went straight to our next project. Thank you guys for your hard work."',
    },
    logo: sipsignalLogo.src,
    team: [
      TEAM.nursultanBegenov,
      TEAM.daniilSemenov,
      TEAM.nikitaBobkov,
      TEAM.maksimKlimchenko,
      TEAM.andreyBarabanov,
      TEAM.alekseyKlimenko,
      TEAM.andreyPaskarenko,
      TEAM.vladislavKiribyatev,
    ],
  },
]
