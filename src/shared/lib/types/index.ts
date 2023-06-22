import { IconsTypes } from "@shared/ui";
import { TeamValues } from "../constants/team";
import { TechnologiesValues } from "../constants/technologies.constats";

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

export type MainBannerType = string | ILang<string>;

export interface ICase {
  title: string;
  id: string;
  heroTitle: ILang<string>;
  categories: ILang<string[]>;
  showCategoriesOnPage: boolean;
  icons: IconsTypes[];
  additionalClassnames?: string;
  textColor: "white" | "black";
  company?: string;
  banner: IDevices<string>;
  description: ILang<string>;
  params: {
    budget: ILang<number>;
    period: number;
    year: number | string;
  };
  technologies: TechnologiesValues[];
  main: {
    title: ILang<string>;
    text: IDescriptionItem[];
    banner?: MainBannerType;
    darkBanner?: MainBannerType;
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
  team: TeamValues[];
}

export interface IThemed<T> {
  dark: T;
  light: T;
  [index: string]: T;
}
