import aiForAnalyze from "@public/assets/images/news/news-ru-4-ai-networks.png";
import medConf from "@public/assets/images/news/news-ru-top7-insights.png";
import earnMillion from "@public/assets/images/news/news-ru-ai-for-earn.png";
import ourGrow from "@public/assets/images/news/news-ru-our-grow.png";
import steganographyItem from "@public/assets/images/news/news-en-steganography.png";
import nNetworks from "@public/assets/images/news/news-en-nn.png";
import startupGuide from "@public/assets/images/news/news-en-startup-guide.jpeg";
import historyImage from "@public/assets/images/news/news-u-history.png";
import computerVision from "@public/assets/images/news/news-computer-vision.png";
import foodTech from "@public/assets/images/news/news-food-tech.png";
import piarCompany from "@public/assets/images/news/news-piar.png";
import worksLLM from "@public/assets/images/news/news-work-llm.png";
import worksLidar from "@public/assets/images/news/news-lidar.png";
import topInsights from "@public/assets/images/news/news-insights.png";
import searchHerpes from "@public/assets/images/news/news-gerpes.png";
import nnFoodTech from "@public/assets/images/news/news-en-nn-foodtech.jpg";
import cryptoForCharity from "@public/assets/images/news/news-en-crypto-for-charity.png";
import startupIdeas from "@public/assets/images/news/news-en-startup-ideas.jpg";
import mlGuru from "@public/assets/images/news/news-en-ml-guru-iskcon.jpg";
import notJustText from "@public/assets/images/news/news-en-not-just-text-and-images.jpg";

import { News } from "../types";

export const news: News[] = [
  {
    image: aiForAnalyze.src,
    title: "Объединили 4 нейросети  и научили их анализировать TV-эфир в реальном времени",
    link: "https://habr.com/ru/articles/837660/https://habr.com/ru/articles/837660/",
    site: "habr",
    views: 2.8,
  },
  {
    image: medConf.src,
    title: "Сходили на конференцию медиков: топ-7 инсайтов на стыке AI и медицины",
    link: "https://vc.ru/opinions/1376344-my-shodili-na-konferenciyu-medikov-chtoby-vam-ne-prishlos-top-7-insaitov-na-styke-neirosetei-i-mediciny",
    site: "vc.ru",
    views: 2.4,
  },
  {
    image: earnMillion.src,
    title: "Как бизнесу использовать нейросети, чтобы заработать миллионы",
    link: "https://vc.ru/services/1165649-ne-tolko-teksty-i-kartinki-kak-biznesu-ispolzovat-ai-chtoby-zarabotat-milliony",
    site: "vc.ru",
    views: 26.8,
  },
  {
    image: ourGrow.src,
    title: "Как мы выросли с нуля до $500,000 оборота",
    link: "https://www.youtube.com/watch?v=ux8H89LDmyo",
    site: "YouTube",
    views: 1,
  },
  {
    image: historyImage.src,
    title: "Unicorn Story: история нашей компании",
    link: "https://vc.ru/life/1425090-ot-zakazov-po-100-do-godovoi-vyruchki-v-500-000-kak-sozdavalas-studiya-ai-i-blokchein-razrabotki",
    site: "vc.ru",
    views: 5.9,
  },
  {
    image: computerVision.src,
    title: "Computer vision для маркетологов — DataFest 2024",
    link: "https://youtu.be/ABDvnSHduF8?si=jy5YvfkGHc8b4YPx",
    site: "YouTube",
    views: 0.28,
  },
  {
    image: foodTech.src,
    title: "Нейросети для фудтеха, доставок и ресторанов",
    link: "https://vc.ru/ai/1276547-kak-ii-ne-daet-sgnit-vashei-kurochke-ili-pochemu-neiroseti-luchshie-druzya-restoranov-povarov-i-monstrov-fudtehahttps://vc.ru/ai/1276547-kak-ii-ne-daet-sgnit-vashei-kurochke-ili-pochemu-neiroseti-luchshie-druzya-restoranov-povarov-i-monstrov-fudteha",
    site: "vc.ru",
    views: 3.3,
  },
  {
    image: piarCompany.src,
    title: "Как пиарить студию разработки в 2024 году",
    link: "https://vc.ru/life/1388297-kak-my-poprobovali-vse-metody-piara-potratili-1-500-000-rublei-i-zarabotali-menshe-10-lidov",
    site: "vc.ru",
    views: 1.2,
  },
  {
    image: worksLLM.src,
    title: "Как работают LLM и ChatGPT — простыми словами",
    link: "https://vc.ru/chatgpt/1217030-kak-na-samom-dele-rabotaet-chatgpt-bolshie-yazykovye-modeli-prostymi-slovami",
    site: "vc.ru",
    views: 2.5,
  },
  {
    image: worksLidar.src,
    title: "Научили Computer Vision работать с лидаром",
    link: "https://habr.com/ru/articles/829298/",
    site: "habr.com",
    views: 2.9,
  },
  {
    image: topInsights.src,
    title: "Где найти 3 ключевые идеи для своего стартапа?",
    link: "https://vc.ru/services/1064460-gde-naiti-3-klyuchevye-idei-dlya-svoego-startapa-rasskazyvaem-na-primere-blagotvoritelnoi-blokchein-ploshadki",
    site: "vc.ru",
    views: 7.6,
  },
  {
    image: searchHerpes.src,
    title: "Как мы научили нейросеть искать герпес",
    link: "https://vc.ru/services/1010933-nauchili-neiroset-iskat-gerpes-ili-telemedicina-v-kanade",
    site: "vc.ru",
    views: 5.3,
  },
];

export const newsEN: News[] = [
  {
    title: "How We Taught the Neural Network to Identify Herpes by Photo",
    link: "https://medium.com/@aksenov.unistory/how-we-taught-the-neural-network-to-identify-herpes-by-photo-a1899faa7ebb",
    site: "medium.com",
    image: nNetworks.src,
  },
  {
    title: "What is Steganography and How We Encrypted Users Private Keys in JPG Files",
    link: "https://medium.com/@aksenov.unistory/exciting-steganography-how-we-encrypted-user-secret-keys-within-jpegs-87b21b233e86",
    site: "medium.com",
    image: steganographyItem.src,
  },
  {
    title: "Business Startup Guide: How to Build Your Company from Scratch",
    link: "https://medium.com/@aksenov.unistory/business-startup-guide-how-to-build-your-company-from-scratch-and-take-it-online-acb6d8470094",
    site: "medium.com",
    image: startupGuide.src,
  },
  {
    title: "Not Just Texts and Images: How Businesses Can Use AI to Make Millions",
    link: "https://medium.com/@aksenov.unistory/not-just-texts-and-images-how-businesses-can-use-ai-to-earn-millions-aad1a713e520",
    site: "medium.com",
    image: notJustText.src,
  },
  {
    title: "Neural Networks for Foodtech and Restaurants",
    link: "https://medium.com/@aksenov.unistory/why-neural-networks-are-the-best-friends-of-restaurants-chefs-and-foodtech-giants-b82d29e6cb05",
    site: "medium.com",
    image: nnFoodTech.src,
  },
  {
    title: "Where to find 3 key ideas for your StartUp?",
    link: "https://medium.com/@aksenov.unistory/where-to-find-3-key-ideas-for-your-startup-the-story-of-creating-a-charitable-blockchain-platform-e526118e73a1",
    site: "medium.com",
    image: startupIdeas.src,
  },
  {
    title: "ML software development for the guru of ISKCON",
    link: "https://medium.com/@aksenov.unistory/how-we-implemented-ai-on-the-website-of-one-of-the-leaders-of-iskcon-4703982b7479",
    site: "medium.com",
    image: mlGuru.src,
  },
  {
    title: "Crypto for Charity: Myth or Reality?",
    link: "https://medium.com/@aksenov.unistory/crypto-for-charity-myth-or-reality-explore-this-with-the-founders-of-the-donor-finance-service-c0c3a639cb23",
    site: "medium.com",
    image: cryptoForCharity.src,
  },
];
