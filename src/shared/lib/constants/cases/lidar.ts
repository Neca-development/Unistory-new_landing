import { ICase } from "@shared/lib/types";
import { TECHNOLOGIES } from "@shared/lib/constants/technologies.constats";
import { TEAM } from "@shared/lib/constants/team";

import lidarPreview from "@public/assets/images/cases/lidar/prevlid.jpg";
import lidarBilboardsRu from "@public/assets/images/cases/lidar/lidar-ru-billboards.jpg";
import lidarSquare from "@public/assets/images/cases/lidar/lidar-square-ru-bilboards.jpg";
import lidarBilboardsEn from "@public/assets/images/cases/lidar/lidar-en-billboards.jpg";
import lidarSquareBilboardsEn from "@public/assets/images/cases/lidar/lidar-square-ru-bilboards.jpg";
import lidarSquareBilboardsRu from "@public/assets/images/cases/lidar/lidar-square-ru-bilboards.jpg";
import lidarFinesRu from "@public/assets/images/cases/lidar/lidar-ru-fines.jpg";
import lidarSquareFineseEn from "@public/assets/images/cases/lidar/lidar-square-en-fines.jpg";
import lidarSquareFineseRu from "@public/assets/images/cases/lidar/lidar-square-ru-fines.jpg";
import lidarFineseEn from "@public/assets/images/cases/lidar/lidar-en-fines.jpg";
import lidarShemes from "@public/assets/images/cases/lidar/lidar-schemes.jpg";
import lidarSquareShemes from "@public/assets/images/cases/lidar/lidar-square-schemes.jpg";
import lidar from "@public/assets/images/cases/lidar/lidar.jpg";
import lidarLivoxRu from "@public/assets/images/cases/lidar/lidar-ru-livox.jpg";
import lidarLivoxEn from "@public/assets/images/cases/lidar/lidar-en-livox.jpg";
import lidarSquareLivoxRu from "@public/assets/images/cases/lidar/lidar-square-ru-livox.jpg";
import lidarSquareLivoxEn from "@public/assets/images/cases/lidar/lidar-square-en-livox.jpg";
import lidarWariesRu from "@public/assets/images/cases/lidar/lidar-ru-wires.jpg";
import lidarWariesEn from "@public/assets/images/cases/lidar/lidar-en-wires.jpg";
import lidarSquareWariesRu from "@public/assets/images/cases/lidar/lidar-square-ru-wires.jpg";
import lidarSquareWariesEn from "@public/assets/images/cases/lidar/lidar-square-en-wires.jpg";
import lidarFieldRu from "@public/assets/images/cases/lidar/lidar-ru-field.jpg";
import lidarFieldEn from "@public/assets/images/cases/lidar/lidar-en-field.jpg";
import lidarSquareFieldRu from "@public/assets/images/cases/lidar/lidar-square-ru-field.jpg";
import lidarSquareFieldEn from "@public/assets/images/cases/lidar/lidar-square-en-field.jpg";

export const LIDAR: ICase = {
  title: {
    en: "Lidar",
    ru: "Лидар",
  },
  id: "lidar",
  heroTitle: {
    en: "Software Development for Calculating Foot Traffic Using LiDAR",
    ru: "Разработка ПО для вычисления человекопотока с помощью лидара",
  },
  categories: {
    en: ["How to Calculate the Effectiveness of Billboards?"],
    ru: ["Как проанализировать эффективность билбордов?"],
  },
  metaTitle: {
    en: "Software Development for Analyzing the Effectiveness of Offline Advertising",
    ru: "Разработка ПО для анализа эффективности офлайн-рекламы",
  },
  metaDescription: {
    en: "We have developed a technological solution that enables marketers in Europe to determine the effectiveness of different outdoor advertising locations.",
    ru: "Мы разработали технологическое решение, дающее возможность маркетологам из Европы рассчитать эффективность разных точек размещения наружной рекламы",
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [
    TECHNOLOGIES.csharp,
    TECHNOLOGIES.roboflow,
    TECHNOLOGIES.ansible,
    TECHNOLOGIES.yolo,
  ],
  thumbnail: {
    desktop: lidarPreview.src,
    mob: lidarPreview.src,
  },

  heroBanner: {
    desktop: {
      en: lidar.src,
      ru: lidar.src,
    },
    mob: {
      en: lidarSquare.src,
      ru: lidarSquare.src,
    },
  },
  description: {
    en: "The client is a European provider of digital tools for corporate marketers. The task is to create a technological solution for analyzing the effectiveness of billboard advertising.",
    ru: "Заказчик — европейский поставщик цифровых инструментов для маркетологов крупных компаний. Задача — создать технологическое решение для анализа эффективности рекламных билбордов.",
  },
  params: {
    period: 7,
    year: "2024",
  },
  main: [
    {
      title: {
        en: "There are only two types of billboards",
        ru: "Есть только два вида билбордов",
      },
      text: [
        {
          text: {
            en: "These two types are effective and ineffective billboards. Hundreds of people pass by the first type every minute, while the second type is unnoticed by anyone.",
            ru: "Эти два вида — эффективный и неэффективный билборд. Возле первого проходят сотни людей в минуту, второй не видит никто. ",
          },
        },
        {
          text: {
            en: "It's easy to distinguish between them if the marketer ordering out-of-home advertising knows the city well. But what if they live in Madrid and are placing ads in Stockholm? This is precisely why an independent tool for evaluating foot traffic near billboards is needed for such situations.",
            ru: "Легко отличить один от другого, если маркетолог, который заказывает рекламу out-of-home, хорошо знает город. Но если он живет в Мадриде, а рекламу размещает в Стокгольме? Именно для таких ситуаций и нужен независимый инструмент оценки человекопотока возле билборда.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lidarBilboardsEn.src,
          ru: lidarBilboardsRu.src,
        },
        mob: {
          en: lidarSquareBilboardsEn.src,
          ru: lidarSquareBilboardsRu.src,
        },
      },
    },
    {
      title: {
        en: "Why We Couldn't Use Regular Cameras",
        ru: "Почему мы не могли использовать обычные камеры",
      },
      text: [
        {
          text: {
            en: "Technically, our task could have been solved easily: we install a camera, connect an AI computer vision model, and it counts people. However, our solution needed to operate in the European market, where GDPR, the law on personal data protection, applies.",
            ru: "Технически наша задача решалась просто: устанавливаем камеру, подключаем AI-модель компьютерного зрения, она считает людей. Однако решение должно было работать на европейском рынке, а в Европе действует GDPR, закон о защите персональных данных.",
          },
        },
        {
          text: {
            en: "Recording people on the streets for marketing purposes is prohibited by law. Our solution had to only capture information about the number of people. Therefore, a regular camera was not suitable.",
            ru: "Снимать людей на улицах в маркетинговых целях запрещено законом. Наше решение должно было фиксировать информацию только о количестве людей. Поэтому обычная камера не подошла.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lidarFineseEn.src,
          ru: lidarFinesRu.src,
        },
        mob: {
          en: lidarSquareFineseEn.src,
          ru: lidarSquareFineseRu.src,
        },
      },
    },
    {
      title: {
        en: "Why We Decided to Use LiDARs",
        ru: "Почему мы решили использовать лидары",
      },
      text: [
        {
          text: {
            en: "To address the problem, we considered two alternatives to replace a regular camera: LiDARs and thermal imagers. Both devices can count the number of people without capturing any personal information.",
            ru: "Чтобы решить проблему, рассматривали два варианта на замену обычной камеры: лидары и тепловизоры. Оба этих устройства способны зафиксировать количество людей, при этом не получая никакую информацию об их личности.",
          },
        },
        {
          text: {
            en: "LiDARs proved to be the more reliable technology. We proceeded with calculations: which LiDAR we needed, its field of view angle, and the optimal positioning near the billboard.",
            ru: "Лидары оказались более надежной технологией. Мы перешли к расчетам: какой лидар нам нужен, с каким углом обзора, в каком положении его установить возле билборда.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lidarShemes.src,
          ru: lidarShemes.src,
        },
        mob: {
          en: lidarSquareShemes.src,
          ru: lidarSquareShemes.src,
        },
      },
    },
    {
      title: {
        en: "Which LiDAR Did We Choose for Our Tasks",
        ru: "Какой лидар мы выбрали для наших задач",
      },
      text: [
        {
          text: {
            en: "The optimal model turned out to be the MID-360. It's compact, has high build quality, offers high resolution, and most importantly, operates at 10 frames per second.",
            ru: "Оптимальной моделью оказалась MID-360. Компактная, высокое качество сборки, большое разрешение, а главное — 10 кадров в секунду.",
          },
        },
      ],
      banner: {
        desktop: {
          en: lidarLivoxEn.src,
          ru: lidarLivoxRu.src,
        },
        mob: {
          en: lidarSquareLivoxEn.src,
          ru: lidarSquareLivoxRu.src,
        },
      },
    },

    {
      title: {
        en: "How to Teach a Neural Network to 'See' Coordinates?",
        ru: "Как научить нейросеть «видеть» координаты?",
      },
      text: [
        {
          text: {
            en: "LiDAR transmits data in the form of coordinate sets, which are in a text file format unsuitable for any computer vision models.",
            ru: "Лидар передает данные в виде набора координат. Это текстовый файл, с которым не сможет работать ни одна из моделей компьютерного зрения.",
          },
        },
        {
          text: {
            en: "Therefore, we developed specialized software that converts these coordinates into images. These images do not reveal identifiable human faces. Capturing data via LiDAR does not violate GDPR regulations",
            ru: "Поэтому мы написали специальный софт, который превращает координаты в изображения. На таких изображениях невозможно рассмотреть лицо человека — фиксация данных на лидар не является нарушением GDPR.",
          },
        },
      ],
      video: "https://www.youtube.com/embed/tMbsZOcgHcY?si=YL8q_7HDtPXdQjjB",
    },
    {
      title: {
        en: " What Other 'Details' Did We Need?",
        ru: "Какие еще «детали» нам понадобились",
      },

      text: [
        {
          text: {
            en: "To collect data and transmit it to the server, we:",
            ru: "Чтобы собирать данные и передавать их на сервер, мы:",
          },
        },
        {
          text: {
            en: "<ul><li>Connected the LiDAR to a Raspberry Pi mini-computer</li><li>Connected a 4G modem to the Raspberry Pi</li><li>Created scripts in Ansible to simultaneously manage the devices</li></ul>",
            ru: " <ul><li>Подключили лидар к мини-компьютеру Raspberry Pi</li><li>Подключили 4G модем к Raspberry Pi</li><li>Написали сценарии на Ansible, чтобы одновременно запускать устройства</li></ul>",
          },
        },
      ],
      banner: {
        desktop: {
          en: lidarWariesEn.src,
          ru: lidarWariesRu.src,
        },
        mob: {
          en: lidarSquareWariesEn.src,
          ru: lidarSquareWariesRu.src,
        },
      },
    },

    {
      title: {
        en: "Dataset Preparation and Neural Network Training",
        ru: "Подготовка датасета и обучение нейросети",
      },

      text: [
        {
          text: {
            en: "As our computer vision model, we chose YOLO8 because it is resource-efficient and supported by numerous open-source libraries. To train the neural network, we captured 8000 LiDAR snapshots, converted them into images, and annotated human figures.",
            ru: "В качестве модели компьютерного зрения мы выбрали YOLO8: она не требовательна к мощностям, а также для работы с ней есть множество открытых библиотек. Чтобы обучить нейросеть, сделали 8000 снимков на лидар, превратили их в изображения и разметили фигуры людей.",
          },
        },
      ],
      video: "https://www.youtube.com/embed/tmLn5JdAiV4?si=x4jZTpinQN2Rs9it",
    },

    {
      title: {
        en: "How It Works: Summary",
        ru: "Как это работает: саммари",
      },

      text: [
        {
          text: {
            en: "<ul><liAnsible initiates data capture on devices near different billboards</li><li>The LiDAR captures pedestrian figures for several minutes</li><li>Ansible stops data capture on all devices/li> <li> Our software converts LiDAR coordinates into images</li><li> YOLO8 counts the number of people passing by the billboard during the capture period</li> <li>Raspberry Pi sends the pedestrian flow data to the server</li><li> Marketers use this data to analyze the effectiveness of the billboar</li></ul> ",
            ru: " <ul><li>Ansible запускает съемку на устройствах возле разных билбордов</li><li>Лидар несколько минут фиксирует фигуры прохожих</li><li>Ansible выключает съемку на всех устройствах</li> <li>Наш софт превращает координаты с лидара в изображения</li><li> YOLO8 считает количество людей, проходящих билборд</li> <li> Raspberry Pi отправляет на сервер информацию о человекопотоке</li><li>Маркетологи используют данные для анализа эффективности билборда</li></ul>",
          },
        },
      ],
      banner: {
        desktop: {
          en: lidarFieldEn.src,
          ru: lidarFieldRu.src,
        },
        mob: {
          en: lidarSquareFieldEn.src,
          ru: lidarSquareFieldRu.src,
        },
      },
    },
    {
      title: {
        en: "Our Next Steps",
        ru: "Наши следующие шаги",
      },
      text: [
        {
          text: {
            en: "We have prepared an engineering solution that our client and their clients, corporate marketers, can already use. Looking ahead, our future plans involve integrating the LiDAR, mini-computer, and modem into a single device capable of operating in any weather conditions.",
            ru: "Мы подготовили инженерное решение, которым уже сейчас может пользоваться заказчик и его клиенты-маркетологи. В будущем планируем собрать из лидара, мини-компьютера и модема единое устройство, которое сможет работать в любых погодных условиях.",
          },
        },
      ],
    },
  ],

  team: [TEAM.daniilSemenov, TEAM.yuriUmnov, TEAM.danilaSkablov, TEAM.ivanRazumovskiy],
};
