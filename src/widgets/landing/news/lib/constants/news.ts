import mensImage from '@public/assets/images/news/news-mens-image.png'
import robotImage from '@public/assets/images/news/news-robot-image.png'
import buttonsImage from '@public/assets/images/news/news-buttons-image.png'
import blackImage from '@public/assets/images/news/news-black-image.png'
import { News } from '../types'


export const news: News[] = [
  {
    image: mensImage.src,
    title: 'Объединили 4 нейросети  и научили их анализировать TV-эфир в реальном времени',
    link: 'https://habr.com/ru/articles/837660/https://habr.com/ru/articles/837660/',
    titleEN: "We combined 4 neural networks and taught them to analyze TV broadcasts in real time",
    site: 'habr',
    views: 231.4
  },
  {
    image: robotImage.src,
    title: 'Сходили на конференцию медиков: топ-7 инсайтов на стыке AI и медицины',
    link: 'https://vc.ru/opinions/1376344-my-shodili-na-konferenciyu-medikov-chtoby-vam-ne-prishlos-top-7-insaitov-na-styke-neirosetei-i-mediciny',
    titleEN: "We attended a conference of doctors: top 7 insights at the intersection of AI and medicine",
    site: 'vc.ru',
    views: 46.2
  },
  {
    image: buttonsImage.src,
    title: 'Как бизнесу использовать нейросети, чтобы заработать миллионы',
    link: 'https://vc.ru/services/1165649-ne-tolko-teksty-i-kartinki-kak-biznesu-ispolzovat-ai-chtoby-zarabotat-milliony',
    titleEN: "How Businesses Can Use Neural Networks to Make Millions",
    site: 'vc.ru',
    views: 4.4
  },
  {
    image: blackImage.src,
    title: 'Как мы выросли с нуля до $500 000 оборота',
    link: 'https://www.youtube.com/watch?v=ux8H89LDmyo',
    titleEN: "How We Grew From Zero to $500,000 in Turnover",
    site: 'YouTube',
    views: 11
  }
]