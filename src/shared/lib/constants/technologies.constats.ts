import reactIcon from "@public/assets/technologies/react.png";
import reactDarkIcon from "@public/assets/technologies/react-dark.png";
import reactNativeIcon from "@public/assets/technologies/react-native.png";
import postgresqlIcon from "@public/assets/technologies/postgresql.png";
import postgresqDarklIcon from "@public/assets/technologies/postgresql-dark.png";
import nestIcon from "@public/assets/technologies/nest.png";
import nextjsIcon from "@public/assets/technologies/nextjs.png";
import nextjsDarkIcon from "@public/assets/technologies/nextjs-dark.png";
import chainlinkIcon from "@public/assets/technologies/chainlink.png";
import chainlinkDarkIcon from "@public/assets/technologies/chainlink-dark.png";
import solidityIcon from "@public/assets/technologies/solidity.png";
import solidityDarkIcon from "@public/assets/technologies/solidity-dark.png";
import nodeIcon from "@public/assets/technologies/node-v2.png";
import nodeDarkIcon from "@public/assets/technologies/node-v2-dark.png";
import graphIcon from "@public/assets/technologies/graph.png";
import graphDarkIcon from "@public/assets/technologies/graph-dark.png";
import angularIcon from "@public/assets/technologies/angular.png";
import angularDarkIcon from "@public/assets/technologies/angular-dark.png";
import expressIcon from "@public/assets/technologies/express.png";
import expressDarkIcon from "@public/assets/technologies/express-dark.png";
import typescriptIcon from "@public/assets/technologies/typescript.png";
import typescriptDarkIcon from "@public/assets/technologies/typescript-dark.png";
import headhunterIcon from "@public/assets/technologies/headhunter.png";
import headhunterDarkIcon from "@public/assets/technologies/headhunter-dark.png";
import avitoIcon from "@public/assets/technologies/avito.png";
import avitoDarkIcon from "@public/assets/technologies/avito-dark.png";
import ukassaIcon from "@public/assets/technologies/ukassa.png";
import ukassaDarkIcon from "@public/assets/technologies/ukassa-dark.png";
import pythonIcon from "@public/assets/technologies/python.png";
import csharpIcon from "@public/assets/technologies/c-sharp.png";
import openaiIcon from "@public/assets/technologies/openai.png";
import openaiDarkIcon from "@public/assets/technologies/openai-dark.png";
import azureIcon from "@public/assets/technologies/azure.png";
import metamaskIcon from "@public/assets/technologies/metamask.png";
import stripeIcon from "@public/assets/technologies/stripe.png";
import wagmiIcon from "@public/assets/technologies/wagmi.png";
import wagmiDarkIcon from "@public/assets/technologies/wagmi-dark.png";
import { IThemed } from "../types";

export type AvailableTechnologiesType =
  | "react"
  | "angular"
  | "vue"
  | "node"
  | "express"
  | "nest"
  | "postgresql"
  | "reactNative"
  | "nextjs"
  | "solidity"
  | "chainlink"
  | "theGraph"
  | "typescript"
  | "headhunter"
  | "avito"
  | "ukassa"
  | "python"
  | "csharp"
  | "openai"
  | "azure"
  | "metamask"
  | "stripe"
  | "wagmi";

type TechnologyType = {
  [index in AvailableTechnologiesType]: {
    name: string;
    icon: IThemed<string>;
  };
};

export const TECHNOLOGIES: TechnologyType = {
  react: {
    name: "React",
    icon: {
      dark: reactDarkIcon.src,
      light: reactIcon.src,
    },
  },
  angular: {
    name: "Angular",
    icon: {
      dark: angularDarkIcon.src,
      light: angularIcon.src,
    },
  },
  vue: {
    name: "Vue",
    icon: {
      dark: "vue",
      light: "vue",
    },
  },
  node: {
    name: "Node",
    icon: {
      dark: nodeDarkIcon.src,
      light: nodeIcon.src,
    },
  },
  express: {
    name: "Express",
    icon: {
      dark: expressDarkIcon.src,
      light: expressIcon.src,
    },
  },
  nest: {
    name: "Nest",
    icon: {
      dark: nestIcon.src,
      light: nestIcon.src,
    },
  },
  postgresql: {
    name: "PostgreSQL",
    icon: {
      dark: postgresqDarklIcon.src,
      light: postgresqlIcon.src,
    },
  },
  reactNative: {
    name: "React Native",
    icon: {
      dark: reactNativeIcon.src,
      light: reactNativeIcon.src,
    },
  },
  nextjs: {
    name: "Next.js",
    icon: {
      dark: nextjsDarkIcon.src,
      light: nextjsIcon.src,
    },
  },
  solidity: {
    name: "Solidity",
    icon: {
      dark: solidityDarkIcon.src,
      light: solidityIcon.src,
    },
  },
  chainlink: {
    name: "Chainlink",
    icon: {
      dark: chainlinkDarkIcon.src,
      light: chainlinkIcon.src,
    },
  },
  theGraph: {
    name: "TheGraph",
    icon: {
      dark: graphDarkIcon.src,
      light: graphIcon.src,
    },
  },
  typescript: {
    name: "Typescript",
    icon: {
      dark: typescriptDarkIcon.src,
      light: typescriptIcon.src,
    },
  },
  headhunter: {
    name: "HeadHunter",
    icon: {
      dark: headhunterDarkIcon.src,
      light: headhunterIcon.src,
    },
  },
  avito: {
    name: "Avito",
    icon: {
      dark: avitoDarkIcon.src,
      light: avitoIcon.src,
    },
  },
  ukassa: {
    name: "Ukassa",
    icon: {
      dark: ukassaDarkIcon.src,
      light: ukassaIcon.src,
    },
  },
  python: {
    name: "Python",
    icon: {
      dark: pythonIcon.src,
      light: pythonIcon.src,
    },
  },
  csharp: {
    name: "C-Sharp",
    icon: {
      dark: csharpIcon.src,
      light: csharpIcon.src,
    },
  },
  openai: {
    name: "OpenAI",
    icon: {
      dark: openaiDarkIcon.src,
      light: openaiIcon.src,
    },
  },
  azure: {
    name: "Azure",
    icon: {
      dark: azureIcon.src,
      light: azureIcon.src,
    },
  },
  metamask: {
    name: "MetaMask",
    icon: {
      dark: metamaskIcon.src,
      light: metamaskIcon.src,
    },
  },
  stripe: {
    name: "Stripe",
    icon: {
      dark: stripeIcon.src,
      light: stripeIcon.src,
    },
  },
  wagmi: {
    name: "Stripe",
    icon: {
      dark: wagmiDarkIcon.src,
      light: wagmiIcon.src,
    },
  },
} as const;

type TechnologiesKeys = keyof typeof TECHNOLOGIES;
export type TechnologiesValues = (typeof TECHNOLOGIES)[TechnologiesKeys];
