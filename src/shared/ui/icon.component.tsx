import dynamic from "next/dynamic";
import React from "react";

const unistory = dynamic(() => import("@public/assets/icons/unistory.svg"));
const logoLight = dynamic(() => import("@public/assets/icons/logo-light.svg"));
const logoDark = dynamic(() => import("@public/assets/icons/logo-dark.svg"));
const sun = dynamic(() => import("@public/assets/icons/sun.svg"));
const sunset = dynamic(() => import("@public/assets/icons/sunset.svg"));
const winter = dynamic(() => import("@public/assets/icons/winter.svg"));
const summer = dynamic(() => import("@public/assets/icons/summer.svg"));
const earth = dynamic(() => import("@public/assets/icons/earth.svg"));
const earthColor = dynamic(() => import("@public/assets/icons/earth-colored.svg"));
const rocket = dynamic(() => import("@public/assets/icons/rocket.svg"));
const cloud = dynamic(() => import("@public/assets/icons/cloud.svg"));
const cloudEmpty = dynamic(() => import("@public/assets/icons/cloud-empty.svg"));
const lightning = dynamic(() => import("@public/assets/icons/lightning.svg"));
const light = dynamic(() => import("@public/assets/icons/light.svg"));
const rainOne = dynamic(() => import("@public/assets/icons/rain-1.svg"));
const rainTwo = dynamic(() => import("@public/assets/icons/rain-2.svg"));
const rainThree = dynamic(() => import("@public/assets/icons/rain-3.svg"));
const grid = dynamic(() => import("@public/assets/icons/grid.svg"));
const layout = dynamic(() => import("@public/assets/icons/layout.svg"));
const folder = dynamic(() => import("@public/assets/icons/folder.svg"));
const phone01 = dynamic(() => import("@public/assets/icons/phone-01.svg"));
const phone02 = dynamic(() => import("@public/assets/icons/phone-02.svg"));
const monitor = dynamic(() => import("@public/assets/icons/monitor.svg"));
const bitcoin = dynamic(() => import("@public/assets/icons/bitcoin.svg"));
const arrowRight = dynamic(() => import("@public/assets/icons/arrow-right.svg"));
const playButton = dynamic(() => import("@public/assets/icons/play-button.svg"));
const accordionIcon = dynamic(() => import("@public/assets/icons/accordion-arrow.svg"));
const arrowRightIcon = dynamic(() => import("@public/assets/icons/arrow-right-icon.svg"));
const appStore = dynamic(() => import("@public/assets/icons/app-store.svg"));
const googlePlay = dynamic(() => import("@public/assets/icons/google-play.svg"));

const puddle = dynamic(() => import("@public/assets/icons/puddle.svg"));
const message = dynamic(() => import("@public/assets/icons/message.svg"));
const clip = dynamic(() => import("@public/assets/icons/clip.svg"));
const logoDarkOutline = dynamic(() => import("@public/assets/icons/logo-dark-outline.svg"));
const telegram = dynamic(() => import("@public/assets/icons/telegram.svg"));
const whatsApp = dynamic(() => import("@public/assets/icons/whatsApp.svg"));
const clutch = dynamic(() => import("@public/assets/icons/clutch.svg"));
const upwork = dynamic(() => import("@public/assets/icons/upwork.svg"));
const closeLight = dynamic(() => import("@public/assets/icons/close-light.svg"));
const closeDark = dynamic(() => import("@public/assets/icons/close-dark.svg"));
const menuBtnLight = dynamic(() => import("@public/assets/icons/menu-btn-light.svg"));
const menuBtnDark = dynamic(() => import("@public/assets/icons/menu-btn-dark.svg"));
const clutchStar = dynamic(() => import("@public/assets/icons/clutch-star.svg"));
const caseProjectLink = dynamic(() => import("@public/assets/icons/case-project-link.svg"));
const serviceAI = dynamic(() => import("@public/assets/images/homepage/services-ai.svg"));
const serviceAIDark = dynamic(() => import("@public/assets/images/homepage/services-ai_dark.svg"));
const web3Convert = dynamic(() => import("@public/assets/images/homepage/web3convert.svg"));
const decentralizedBtcLight = dynamic(
  () => import("@public/assets/images/homepage/service-decentralized-btc.svg")
);
const decentralizedBtcDark = dynamic(
  () => import("@public/assets/images/homepage/service-decentralized-btc_dark.svg")
);
const decentralizedEthLight = dynamic(
  () => import("@public/assets/images/homepage/service-decentralized-eth.svg")
);
const decentralizedEthDark = dynamic(
  () => import("@public/assets/images/homepage/service-decentralized-eth_dark.svg")
);
const decLine1 = dynamic(() => import("@public/assets/images/homepage/dec-line-1.svg"));
const decLine2 = dynamic(() => import("@public/assets/images/homepage/dec-line-2.svg"));
const decLine3 = dynamic(() => import("@public/assets/images/homepage/dec-line-3.svg"));
const decLine4 = dynamic(() => import("@public/assets/images/homepage/dec-line-4.svg"));
const decLine5 = dynamic(() => import("@public/assets/images/homepage/dec-line-5.svg"));

const contactsMail = dynamic(() => import("@public/assets/icons/contacts-mail.svg"));
const contactsTelegram = dynamic(() => import("@public/assets/icons/contacts-telegram.svg"));
const contactsWhatsApp = dynamic(() => import("@public/assets/icons/contacts-whatsapp.svg"));

const companyHeroLine = dynamic(() => import("@public/assets/icons/company-hero-line.svg"));
const companyClutch = dynamic(() => import("@public/assets/icons/company-clutch.svg"));
const companyStar = dynamic(() => import("@public/assets/icons/company-star.svg"));
const companyUpwork = dynamic(() => import("@public/assets/icons/company-upwork.svg"));
const companyHh = dynamic(() => import("@public/assets/icons/company-hh.svg"));
const companyLinkedIn = dynamic(() => import("@public/assets/images/company/linkedin.svg"));
const companyTelegram = dynamic(() => import("@public/assets/images/company/telegram.svg"));
const telegramIcon = dynamic(() => import("@public/assets/icons/telegram-icon.svg"));
const telegramIconSmall = dynamic(() => import("@public/assets/icons/telegram-small-icon.svg"));
const eyeIcon = dynamic(() => import("@public/assets/icons/eye-icon.svg"));

const iconTypes = {
  unistory,
  logoLight,
  eyeIcon,
  telegramIconSmall,
  logoDark,
  sun,
  sunset,
  winter,
  summer,
  earth,
  earthColor,
  rocket,
  cloud,
  cloudEmpty,
  lightning,
  light,
  rainOne,
  rainTwo,
  rainThree,
  grid,
  layout,
  folder,
  phone01,
  phone02,
  monitor,
  bitcoin,
  arrowRight,
  puddle,
  message,
  clip,
  logoDarkOutline,
  telegram,
  whatsApp,
  clutch,
  upwork,
  closeLight,
  closeDark,
  menuBtnLight,
  menuBtnDark,
  clutchStar,
  caseProjectLink,
  serviceAI,
  serviceAIDark,
  web3Convert,
  decentralizedBtcLight,
  decentralizedBtcDark,
  decentralizedEthLight,
  decentralizedEthDark,
  decLine1,
  decLine2,
  decLine3,
  decLine4,
  decLine5,
  contactsMail,
  contactsTelegram,
  contactsWhatsApp,
  companyHeroLine,
  companyClutch,
  companyStar,
  companyUpwork,
  companyHh,
  companyLinkedIn,
  companyTelegram,
  playButton,
  accordionIcon,
  appStore,
  googlePlay,
  arrowRightIcon,
  telegramIcon,
};

export type IconsTypes = keyof typeof iconTypes;

export interface IIconComponentProperties extends React.SVGAttributes<SVGElement> {
  name: IconsTypes;
}

export const IconComponent = React.memo(({ name, ...props }: IIconComponentProperties) => {
  const Icon = iconTypes[name];
  return <Icon {...props} />;
});
