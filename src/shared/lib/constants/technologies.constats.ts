import reactIcon from "@public/assets/technologies/react.png";
import reactDarkIcon from "@public/assets/technologies/react-dark.png";
import reactNativeIcon from "@public/assets/technologies/react-native.png";
import postgresqlIcon from "@public/assets/technologies/postgresql.png";
import postgresqDarklIcon from "@public/assets/technologies/postgresql-dark.png";
import nestIcon from "@public/assets/technologies/nest.png";
import nextjsIcon from "@public/assets/technologies/nextjs.png";
import nextjsDarkIcon from "@public/assets/technologies/nextjs-dark.png";
import chainlinkNodeIcon from "@public/assets/technologies/chainlink-node.png";
import chainlinkNodeDarkIcon from "@public/assets/technologies/chainlink-node-dark.png";
import chainlinkVrfIcon from "@public/assets/technologies/chainlink-vrf.png";
import chainlinkVrfDarkIcon from "@public/assets/technologies/chainlink-vrf-dark.png";
import solidityIcon from "@public/assets/technologies/solidity.png";
import solidityDarkIcon from "@public/assets/technologies/solidity-dark.png";
import nodeIcon from "@public/assets/technologies/node-v2.png";
import nodeDarkIcon from "@public/assets/technologies/node-v2-dark.png";
import theGraphIcon from "@public/assets/technologies/the-graph.png";
import theGraphDarkIcon from "@public/assets/technologies/the-graph-dark.png";
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
  | "chainlinkNode"
  | "chainlinkVrf"
  | "theGraph"
  | "typescript"
  | "headhunter"
  | "avito"
  | "ukassa";

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
  chainlinkNode: {
    name: "Chainlink Self-hosted node",
    icon: {
      dark: chainlinkNodeDarkIcon.src,
      light: chainlinkNodeIcon.src,
    },
  },
  chainlinkVrf: {
    name: "Chainlink VRF",
    icon: {
      dark: chainlinkVrfDarkIcon.src,
      light: chainlinkVrfIcon.src,
    },
  },
  theGraph: {
    name: "TheGraph",
    icon: {
      dark: theGraphDarkIcon.src,
      light: theGraphIcon.src,
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
} as const;

type TechnologiesKeys = keyof typeof TECHNOLOGIES;
export type TechnologiesValues = (typeof TECHNOLOGIES)[TechnologiesKeys];
