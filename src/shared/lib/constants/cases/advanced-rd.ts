import { ICase } from "@shared/lib/types";
import { TEAM } from "../team";
import { TECHNOLOGIES } from "../technologies.constats";
import advancedRDBanner from "@public/assets/images/cases/advanced-rd/banner.jpg";
import advancedRDImage1 from "@public/assets/images/cases/advanced-rd/image-1.jpg";
import advancedRDImage2 from "@public/assets/images/cases/advanced-rd/image-2.jpg";
import advancedRDImage3 from "@public/assets/images/cases/advanced-rd/image-3.jpg";
import advancedRDThumb from "@public/assets/images/cases/advanced-rd/thumb.jpg";
import advancedRDThumbMob from "@public/assets/images/cases/advanced-rd/thumb_mob.jpg";

export const ADVANCED_RD: ICase = {
  title: "Advanced RD",
  id: "advanced-rd",
  projectUrl: "https://invest.unistory.app",
  projectUrlTitle: "www.invest.unistory.app",
  heroTitle: {
    en: "Advanced RD",
    ru: "Advanced RD",
  },
  categories: {
    en: ["Blockchain powered property investment platform"],
    ru: ["Платформа для инвестиций в недвижимость на базе блокчейна"],
  },
  showCategoriesOnPage: false,
  icons: ["monitor", "phone02"],
  textColor: "white",
  technologies: [
    TECHNOLOGIES.angular,
    TECHNOLOGIES.nest,
    TECHNOLOGIES.postgresql,
    TECHNOLOGIES.solidity,
  ],
  thumbnail: {
    desktop: advancedRDThumb.src,
    mob: advancedRDThumbMob.src,
  },
  heroBanner: {
    desktop: advancedRDBanner.src,
    mob: advancedRDBanner.src,
  },
  description: {
    en: "To create an advanced property investment platform with full-fledged blockchain integration. You don’t need to pay the whole price by your own - just share it with others and receive the dividents.",
    ru: "Создать продвинутую платформу для инвестиций в недвижимость, с полноценной блокчейн-интеграцией. Вам не нужно платить всю сумму самому - просто поделите её с другими и получайте дивиденды.",
  },
  params: {
    budget: {
      ru: 7_000_000,
      en: 80_000,
    },
    period: 6,
    year: "2022-2023",
  },
  main: [
    {
      title: {
        en: "Property page",
        ru: "Информация о недвижимости",
      },
      text: [
        {
          text: {
            en: "Get all necessary information from the property page. Check the description, property price and amount of investments and make a decision to be a part of it. All information are powered by blockchain integration and updates in real time.",
            ru: "Получайте всю необходимую информацию на одной странице. Прочитайте описание, посмотрите на цену и объем текущих инвестиций и решите - стать ли частью этого. Вся информация обрабатывается на блокчейне и обрабатывается в режиме реального времени.",
          },
        },
      ],
      banner: advancedRDImage1.src,
    },
    {
      title: {
        en: "Wallet management",
        ru: "Управление кошельком",
      },
      text: [
        {
          text: {
            en: "Track and manage your income on the wallet page. Ready to deposit or want to withdraw? You can make it happens in the one place.  Use the power of blockchain to proceed with all kind of payments and track your activity and income.",
            ru: "Следите за своим заработком и управляйте им на странице кошелька. Готовы внести депозит или хотите вывести средства? Всё это можно сделать в одном месте. Используйте силу блокчейна чтобы управлять всеми видами платежей и следить за своей активностью и заработком.",
          },
        },
      ],
      banner: advancedRDImage2.src,
    },
    {
      title: {
        en: "Advanced referral system",
        ru: "Продвинутая реферальная система",
      },
      text: [
        {
          text: {
            en: "We’ve implemented a great referral system to help you keep in touch wih your partners. Invite them to be in an investment community. Here we have a two ways bonus system -- both of you will receive an extra income. And again, all is crystal clear and transparent since it’s managed by blockchain.",
            ru: "Мы внедрили классную реферальную систему, чтобы вы могли держать связь со своими партнерами. Приглашайте их стать частью коммьюнити инвесторов и оба получайте бонусы - система работает в обе стороны. И еще раз, все предельно прозрачно и понятно - всё управляется блокчейном. ",
          },
        },
      ],
      banner: advancedRDImage3.src,
    },
    {
      title: {
        en: "Results",
        ru: "Результат",
      },
      text: [
        {
          text: {
            en: "We’ve made a comprehensive blockchain integration to make investments transparent and easy.  We took over the whole process from smart contract to stablecoin creation. Besides, we’ve developed an admin panel for staff -- to manage the platform from A to Z.",
            ru: "Мы сделали обширную блокчейн-интеграцию, чтобы сделать инвестиции легким и прозрачным процессом. Мы взяли на себя весь функционал, от смарт контрактов до создания стейблкоина. Кроме того, мы разработали админ панель для сотрудников -- чтобы управлять платформой от А до Я.",
          },
        },
      ],
    },
  ],
  team: [
    TEAM.alexanderAksenov,
    TEAM.ilyaSmirnov,
    TEAM.yanSofronov,
    TEAM.maksimKlimchenko,
    TEAM.andreyPaskarenko,
    TEAM.vladislavKiribyatev,
    TEAM.kirillElizarov,
  ],
};
