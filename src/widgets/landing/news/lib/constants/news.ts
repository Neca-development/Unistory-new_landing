import mensImage from '@public/assets/images/news/news-mens-image.png'
import robotImage from '@public/assets/images/news/news-robot-image.png'
import buttonsImage from '@public/assets/images/news/news-buttons-image.png'
import blackImage from '@public/assets/images/news/news-black-image.png'
import { News } from '../types'


export const news: News[] = [
  {
    image: mensImage.src,
    title: 'Объединили 4 нейросети  и научили их анализировать TV-эфир в реальном времени',
    titleEN: "We combined 4 neural networks and taught them to analyze TV broadcasts in real time",
    site: 'habr',
    views: 231.4
  },
  {
    image: robotImage.src,
    title: 'Сходили на конференцию медиков: топ-7 инсайтов на стыке AI и медицины',
    titleEN: "We attended a conference of doctors: top 7 insights at the intersection of AI and medicine",
    site: 'vc.ru',
    views: 46.2
  },
  {
    image: buttonsImage.src,
    title: 'Как бизнесу использовать нейросети, чтобы заработать миллионы',
    titleEN: "How Businesses Can Use Neural Networks to Make Millions",
    site: 'vc.ru',
    views: 4.4
  },
  {
    image: blackImage.src,
    title: 'Как мы выросли с нуля до $500 000 оборота',
    titleEN: "How We Grew From Zero to $500,000 in Turnover",
    site: 'YouTube',
    views: 11
  }
]