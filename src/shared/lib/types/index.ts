import type { IconsTypes } from "@shared/ui";

import { TeamValues } from "@shared/lib/constants/team";
import type { TechnologiesValues } from "@shared/lib/constants/technologies.constats";

export interface IDescriptionItem {
  subtitle?: ILang<string>;
  text?: ILang<string>;
  banner?: string;
}

export interface ILang<T> {
  ru: T;
  en: T;
  [index: string]: T;
}

export interface IDevices<T> {
  desktop: T;
  mob: T;
}

export interface IGoalPoints {
  en: string;
  ru: string;
}

export type MainBannerType = string | ILang<string>;

export enum CustomHeroes {
  BitGraduate,
}

export enum CustomMainBanner {
  BitGraduateVerification,
  BitGraduateStorage,
  BitGraduateAuthority,
}

export interface ICase {
  title: string | ILang<string>;
  id: string;
  projectUrl?: string;
  projectUrlTitle?: string;
  customHero?: CustomHeroes;
  heroTitle: ILang<string>;
  heroText?: ILang<string>[];
  thumbnail: IDevices<string>;
  categories: ILang<string[]>;
  showCategoriesOnPage: boolean;
  icons: IconsTypes[];
  additionalClassnames?: string;
  textColor: "white" | "black";
  company?: string;
  heroBanner: IDevices<string> | IDevices<ILang<string>>;
  description?: ILang<string>;
  goalPoints?: IGoalPoints[];
  params?: {
    budget: ILang<number>;
    period: number;
    year: number | string;
  };
  technologies?: TechnologiesValues[];
  main: {
    title: ILang<string>;
    text: IDescriptionItem[];
    banner?: MainBannerType;
    bannerMob?: string;
    darkBanner?: MainBannerType;
    customBanner?: CustomMainBanner;
    sectionClassnames?: string;
  }[];
  logo?: string;
  review?: {
    author: {
      name: ILang<string>;
      position: ILang<string>;
      company: string;
      photo: string;
    };
    text: ILang<string>;
  };
  team?: TeamValues[];
  disableOtherProjects?: boolean;
}

export interface IThemed<T> {
  dark: T;
  light: T;
  [index: string]: T;
}

export interface ISingleCase {
  goal: string;
  hero: {
    budget: string;
    timeline: {
      label: string;
    };
    year: string;
  };
  techno: string;
  members: string;
  other: string;
}
