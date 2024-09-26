import aiForAnalyze from '@public/assets/images/news/news-ru-4-ai-networks.png'
import medConf from '@public/assets/images/news/news-ru-top7-insights.png'
import earnMillion from '@public/assets/images/news/news-ru-ai-for-earn.png'
import ourGrow from '@public/assets/images/news/news-ru-our-grow.png'
import steganographyItem from '@public/assets/images/news/news-en-steganography.png'
import nNetworks from '@public/assets/images/news/news-en-nn.png'
import startupGuide from '@public/assets/images/news/news-en-startup-guide.jpeg'


import { News } from '../types'


export const news: News[] = [
  {
    image: aiForAnalyze.src,
    title: 'Объединили 4 нейросети  и научили их анализировать TV-эфир в реальном времени',
    link: 'https://habr.com/ru/articles/837660/https://habr.com/ru/articles/837660/',
    site: 'habr',
    views: 231.4
  },
  {
    image: medConf.src,
    title: 'Сходили на конференцию медиков: топ-7 инсайтов на стыке AI и медицины',
    link: 'https://vc.ru/opinions/1376344-my-shodili-na-konferenciyu-medikov-chtoby-vam-ne-prishlos-top-7-insaitov-na-styke-neirosetei-i-mediciny',
    site: 'vc.ru',
    views: 46.2
  },
  {
    image: earnMillion.src,
    title: 'Как бизнесу использовать нейросети, чтобы заработать миллионы',
    link: 'https://vc.ru/services/1165649-ne-tolko-teksty-i-kartinki-kak-biznesu-ispolzovat-ai-chtoby-zarabotat-milliony',
    site: 'vc.ru',
    views: 4.4
  },
  {
    image: ourGrow.src,
    title: 'Как мы выросли с нуля до $500,000 оборота',
    link: 'https://www.youtube.com/watch?v=ux8H89LDmyo',
    site: 'YouTube',
    views: 11
  },
]

export const newsEN: News[] = [
  {
    title: 'Not Just Texts and Images: How Businesses Can Use AI to Make Millions',
    link: "https://medium.com/@aksenov.unistory/not-just-texts-and-images-how-businesses-can-use-ai-to-earn-millions-aad1a713e520",
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
    title: 'Blog posts about web3 and AI',
    link: 'https://medium.com/@aksenov.unistory/how-we-taught-the-neural-network-to-identify-herpes-by-photo-a1899faa7ebb',
    site: "medium.com",
    image: startupGuide.src
  }
]