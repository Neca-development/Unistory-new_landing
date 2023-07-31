import { ICase, CustomHeroes, CustomMainBanner } from "@shared/lib/types";
import { TEAM } from "@shared/lib/constants/team";
import bitGraduateImage2 from "@public/assets/images/cases/bit-graduate/document-storage.png";
import bitGraduateImage1 from "@public/assets/images/cases/bit-graduate/document-verification.png";
import bitGraduateImage3 from "@public/assets/images/cases/bit-graduate/institute-authority.png";
import bitGraduateThumb from "@public/assets/images/cases/bit-graduate/thumb.png";

export const BIT_GRADUATE: ICase = {
  title: "Bit graduate",
  id: "bit-graduate",
  customHero: CustomHeroes.BitGraduate,
  heroTitle: {
    en: "Blockchain powered documents’ storage and verification",
    ru: "Хранение и верификация\nдокументов в блокчейне",
  },
  heroText: [
    {
      en: "Future is here!",
      ru: "Будущее уже здесь!",
    },
    {
      en: "www.bitgraduate.net",
      ru: "www.bitgraduate.net",
    },
  ],
  categories: {
    en: ["Blockchain powered documents’ storage and verification"],
    ru: ["Хранение и верификация\nдокументов в блокчейне"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone01"],
  textColor: "black",
  technologies: [],
  thumbnail: {
    desktop: bitGraduateThumb.src,
    mob: bitGraduateThumb.src,
  },
  heroBanner: {
    desktop: "",
    mob: "",
  },
  description: {
    en:
      "Implement the first stage of the future document circulation system in the blockchain - service for the storage and verification of diplomas and certificates.\n\n" +
      "Institutes can issue diplomas and certificates in the form of NFT to their students, and students can share them, guaranteeing their authenticity with BitGraduate.",
    ru:
      "Реализовать первый этап будущей системы документооборота в блокчейне - сервис для хранения и верификации дипломов и сертификатов.\n\n" +
      "Институты могут выдавать дипломы и сертификаты в виде NFT своим студентам, а студенты - делиться ими, гарантируя их подлинность при помощи BitGraduate.",
  },
  params: {
    budget: {
      ru: 2_000_000,
      en: 20_000,
    },
    period: 4,
    year: 2022,
  },
  main: [
    {
      title: {
        en: "Easy document verification",
        ru: "Верификация документа",
      },
      text: [
        {
          text: {
            en: "We’ve implemented  blockchain integration, now  diplomas’ authentication takes only a few seconds. No cheating - all diplomas are stored in the form of non-fungible tokens, which rules out the chance of forgery.",
            ru: "Реализовали интеграцию с блокчейном, теперь проверка подлинности занимает всего пару секунд. Смухлевать не получится -- все дипломы хранятся в виде невзаимозаменяемых токенов, что исключает шанс подделки.",
          },
        },
      ],
      customBanner: CustomMainBanner.BitGraduateVerification,
    },
    {
      title: {
        en: "Custom templates for interview invitations",
        ru: "Удобное хранение документов",
      },
      text: [
        {
          text: {
            en: "Use your personal account, all certificates and diplomas - in one place. Can’t be damaged, can’t be lost, always with you. You don’t need to keep digital copies anymore.",
            ru: "Сделали удобный личный кабинет, все сертификаты и дипломы -- в одном месте. Не горят, не тонут, всегда с вами. Больше не надо хранить оцифрованные копии.",
          },
        },
      ],
      customBanner: CustomMainBanner.BitGraduateStorage,
    },
    {
      title: {
        en: "Universities’ authority protection",
        ru: "Защита авторитета Института",
      },
      text: [
        {
          text: {
            en: "Thanks to BitGraduate, the image of the Institute and its students remains impeccable. Those who buy a forged diploma or certificate will not be able to defame the name of the university.",
            ru: "Благодаря сервису BitGraduate - имидж Института и его студентов остается безупречным. Лица, купившие поддельный диплом или сертификат, не смогут опорочить имя учебного заведения.",
          },
        },
      ],
      customBanner: CustomMainBanner.BitGraduateAuthority,
    },
    {
      title: {
        en: "Result",
        ru: "Результат",
      },
      text: [
        {
          subtitle: {
            en: "",
            ru: "",
          },
          text: {
            en: "The project has been tested by major universities all around the world and is being used by them on an ongoing basis.",
            ru: "Проект был протестирован крупными институтами по всему миру и теперь используется ими на постоянной основе.",
          },
        },
        {
          subtitle: {
            en: "",
            ru: "",
          },
          text: {
            en: "The technologies we have implemented have significantly simplified the workflow and reduced the cost of counterfeiting.",
            ru: "Реализованные нами технологии существенно упростили документооборот и снизили издержки на борьбу с подделками.",
          },
        },
        {
          subtitle: {
            en: "",
            ru: "",
          },
          text: {
            en: "Based on the existing architecture, we’re going to expand the scope of the project to include the release and monitoring of medical records and prescriptions.",
            ru: "На основе существующей архитектуры готовится расширение области применения, вплоть до выпуска и контроля на блокчейне медицинских документов и рецептов на лекарства.",
          },
        },
      ],
    },
  ],
  team: [
    TEAM.alexanderAksenov,
    TEAM.andreyJurin,
    TEAM.yanSofronov,
    TEAM.andreyPaskarenko,
    TEAM.maksimKlimchenko,
    TEAM.andreyBarabanov,
    TEAM.vladislavKiribyatev,
    TEAM.maximUporov,
  ],
};
