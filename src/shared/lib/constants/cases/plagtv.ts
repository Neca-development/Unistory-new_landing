import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import plagtvImage4 from "@public/assets/images/cases/plagtv/admin-panel.jpg";
import plagtvImage4Mob from "@public/assets/images/cases/plagtv/admin-panel_mob.jpg";
import plagtvBanner from "@public/assets/images/cases/plagtv/banner.jpg";
import plagtvBannerMob from "@public/assets/images/cases/plagtv/banner_mob.jpg";
import plagtvImage2 from "@public/assets/images/cases/plagtv/dictionary.jpg";
import plagtvImage2Mob from "@public/assets/images/cases/plagtv/dictionary_mob.jpg";
import plagtvImage1 from "@public/assets/images/cases/plagtv/player.jpg";
import plagtvImage1Mob from "@public/assets/images/cases/plagtv/player_mob.jpg";
import plagtvImage3 from "@public/assets/images/cases/plagtv/self-test.jpg";
import plagtvImage3Mob from "@public/assets/images/cases/plagtv/self-test_mob.jpg";
import plagtvThumb from "@public/assets/images/cases/plagtv/thumb.jpg";
import plagtvThumbMob from "@public/assets/images/cases/plagtv/thumb_mob.jpg";

export const PLAGTV: ICase = {
  title: "PlagTV",
  id: "plagtv",
  projectUrl: "https://plagtv.com/",
  projectUrlTitle: "www.plagtv.com",
  heroTitle: {
    en: "English learning platform",
    ru: "Платформа для изучения английского",
  },
  categories: {
    en: ["English learning platform"],
    ru: ["Платформа для изучения английского"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.node,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.postgresql,
  ],
  thumbnail: {
    desktop: plagtvThumb.src,
    mob: plagtvThumbMob.src,
  },
  heroBanner: {
    desktop: plagtvBanner.src,
    mob: plagtvBannerMob.src,
  },
  description: {
    en: "To develop a platform where users can learn English through watching educational/entertaining content.",
    ru: "Разработать сервис, позволяющий пользователям изучать английский язык через  просмотр обучающего/развлекательного контента.",
  },
  goalPoints: [
    {
      en: "to develop a youtube-like platform for searching and watching videos",
      ru: "разработать youtube-like платформу для поиска и просмотра видео",
    },
    {
      en: "to implement smart subtitles and build-it translator",
      ru: "реализовать функционал умных субтитров и встроенный переводчик;",
    },
    {
      en: "to implement a dictionary of the studied words with the possibility of self-testing.",
      ru: "внедрить словарь изученных слов с возможностью самотестирования",
    },
  ],
  params: {
    budget: {
      ru: 2_000_000,
      en: 25_000,
    },
    period: 4,
    year: "2022 - 2023",
  },
  main: [
    {
      title: {
        en: "Advanced video player",
        ru: "Продвинутый плеер",
      },
      text: [
        {
          text: {
            en: "So that you can conveniently search for videos, watch videos and translate unfamiliar words. Of course, with the functions of acceleration and rewinding, so that it was really convenient.",
            ru: "Чтобы можно было удобно искать видео, смотреть видео и переводить незнакомые слова. Конечно же с функциями ускорения и перемотки, чтобы было прям удобно.",
          },
        },
      ],
      banner: plagtvImage1.src,
      bannerMob: plagtvImage1Mob.src,
    },
    {
      title: {
        en: "Convenient and cool dictionary",
        ru: "Удобный и классный словарь",
      },
      text: [
        {
          text: {
            en: "All unfamiliar words immediately get into the dictionary, so as not to forget for sure. They can be grouped as you want, deleted, edited and even printed.",
            ru: "Все незнакомые слова сразу попадают в словарь, чтобы точно не забыть. Их можно группировать как хочется, удалять, редактировать и даже распечатать.",
          },
        },
      ],
      banner: plagtvImage2.src,
      bannerMob: plagtvImage2Mob.src,
    },
    {
      title: {
        en: "Ability to self-test knowledge",
        ru: "Возможность самопроверки знаний",
      },
      text: [
        {
          text: {
            en: "Run the test and check whether the word has really been stored in memory. Checks both in Russian and in English, plus, you can choose which specific words to check.",
            ru: "Повторение - мать учения! Запускаешь тест и проверяешь, действительно ли слово отложилось в памяти. Проверяет как на русском, так и на английском, плюс, можно выбрать какие конкретно слова проверить.",
          },
        },
      ],
      banner: plagtvImage3.src,
      bannerMob: plagtvImage3Mob.src,
    },
    {
      title: {
        en: "Great admin panel",
        ru: "Крутая админ панель",
      },
      text: [
        {
          text: {
            en: "We have made the process of uploading content as simple and convenient as possible for the author. Add videos, edit videos, see statistics - all in one place.",
            ru: "Мы сделали процесс загрузки контента максимально простым и удобным для автора. Добавляйте видео, редактируйте видео, смотрите статистику - всё в одном месте.",
          },
        },
      ],
      banner: plagtvImage4.src,
      bannerMob: plagtvImage4Mob.src,
    },
    {
      title: {
        en: "Results",
        ru: "Результат",
      },
      text: [
        {
          text: {
            en: "The platform is as friendly as possible, both for the user and for the author. It is built on a high-end architecture that guarantees scalability and trouble-free operation under load.",
            ru: "Максимально дружелюбная, как для пользователя, так и для автора платформа. Построена на high-end архитектуре, гарантирующей масштабируемость и бесперебойную работу под нагрузкой. ",
          },
        },
      ],
    },
  ],
  team: [
    TEAM.alexanderAksenov,
    TEAM.daniilSemenov,
    TEAM.ernestMironov,
    TEAM.yanSofronov,
    TEAM.alekseyChepurin,
    TEAM.maksimKlimchenko,
    TEAM.alekseyKlimenko,
    TEAM.markCherepivskiy,
    TEAM.andreyBabenkov,
    TEAM.vladislavKiribyatev,
  ],
};
