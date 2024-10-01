import aiForAnalyze from '@public/assets/images/news/news-ru-4-ai-networks.png'
import medConf from '@public/assets/images/news/news-ru-top7-insights.png'
import earnMillion from '@public/assets/images/news/news-ru-ai-for-earn.png'
import ourGrow from '@public/assets/images/news/news-ru-our-grow.png'
import steganographyItem from '@public/assets/images/news/news-en-steganography.png'
import nNetworks from '@public/assets/images/news/news-en-nn.png'
import startupGuide from '@public/assets/images/news/news-en-startup-guide.jpeg'
import tempImage from '@public/assets/images/news/temp-image.jpg'


import { News } from '../types'


export const news: News[] = [
  {
    image: aiForAnalyze.src,
    title: 'Объединили 4 нейросети  и научили их анализировать TV-эфир в реальном времени',
    link: 'https://habr.com/ru/articles/837660/https://habr.com/ru/articles/837660/',
    site: 'habr',
    views: 2.8
  },
  {
    image: medConf.src,
    title: 'Сходили на конференцию медиков: топ-7 инсайтов на стыке AI и медицины',
    link: 'https://vc.ru/opinions/1376344-my-shodili-na-konferenciyu-medikov-chtoby-vam-ne-prishlos-top-7-insaitov-na-styke-neirosetei-i-mediciny',
    site: 'vc.ru',
    views: 2.4
  },
  {
    image: earnMillion.src,
    title: 'Как бизнесу использовать нейросети, чтобы заработать миллионы',
    link: 'https://vc.ru/services/1165649-ne-tolko-teksty-i-kartinki-kak-biznesu-ispolzovat-ai-chtoby-zarabotat-milliony',
    site: 'vc.ru',
    views: 26.8
  },
  {
    image: ourGrow.src,
    title: 'Как мы выросли с нуля до $500,000 оборота',
    link: 'https://www.youtube.com/watch?v=ux8H89LDmyo',
    site: 'YouTube',
    views: 1
  },
]

export const newsEN: News[] = [
  {
    title: 'How We Taught the Neural Network to Identify Herpes by Photo',
    link: "https://medium.com/@aksenov.unistory/how-we-taught-the-neural-network-to-identify-herpes-by-photo-a1899faa7ebb",
    site: "medium.com",
    image: nNetworks.src
  },
  {
    title: 'What is Steganography and How We Encrypted Users Private Keys in JPG Files',
    link: 'https://medium.com/@aksenov.unistory/exciting-steganography-how-we-encrypted-user-secret-keys-within-jpegs-87b21b233e86',
    site: "medium.com",
    image: steganographyItem.src
  }, 
  {
    title: 'Business Startup Guide: How to Build Your Company from Scratch',
    link: 'https://medium.com/@aksenov.unistory/business-startup-guide-how-to-build-your-company-from-scratch-and-take-it-online-acb6d8470094',
    site: "medium.com",
    image: startupGuide.src
  }, 
  {
    title: 'Not Just Texts and Images: How Businesses Can Use AI to Earn Millions',
    link: 'https://medium.com/@aksenov.unistory/not-just-texts-and-images-how-businesses-can-use-ai-to-earn-millions-aad1a713e520',
    site: "medium.com",
    image: tempImage.src
  }, 
  {
    title: "Neural Networks: The Best Friends of Restaurants and Food Tech",
    link: 'https://medium.com/@aksenov.unistory/why-neural-networks-are-the-best-friends-of-restaurants-chefs-and-foodtech-giants-b82d29e6cb05',
    site: "medium.com",
    image: tempImage.src
  },
  {
    title: 'Where to Find 3 Key Ideas for Your Startup? The Story of Creating a Charitable Blockchain Platform',
    link: "https://medium.com/@aksenov.unistory/where-to-find-3-key-ideas-for-your-startup-the-story-of-creating-a-charitable-blockchain-platform-e526118e73a1",
    site: "medium.com",
    image: tempImage.src
  },
  {
    title: 'How we implemented AI on the website of one of the leaders of ISKCON',
    link: "https://medium.com/@aksenov.unistory/how-we-implemented-ai-on-the-website-of-one-of-the-leaders-of-iskcon-4703982b7479",
    site: "medium.com",
    image: tempImage.src
  },
  {
    title: 'Crypto for Charity: Myth or Reality? Explore this with the founders of the Donor Finance service',
    link: "https://medium.com/@aksenov.unistory/crypto-for-charity-myth-or-reality-explore-this-with-the-founders-of-the-donor-finance-service-c0c3a639cb23",
    site: "medium.com",
    image: tempImage.src
  }, 
]