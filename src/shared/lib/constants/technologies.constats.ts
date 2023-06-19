import reactIcon from "@public/assets/technologies/React-icon.png";
import reactNativeIcon from "@public/assets/technologies/React-icon.png";
import postgresqlIcon from "@public/assets/technologies/postgresql.png";
import postgresqDarklIcon from "@public/assets/technologies/postgresql-dark.png";
import nestIcon from "@public/assets/technologies/nest.png";
import nestDarkIcon from "@public/assets/technologies/nest-dark.png";
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
import expressIcon from "@public/assets/technologies/express.png";
import expressDarkIcon from "@public/assets/technologies/express-dark.png";
import typescriptIcon from "@public/assets/technologies/typescript.png";
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
  | "typescript";

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
      dark: reactIcon.src,
      light: reactIcon.src,
    },
  },
  angular: {
    name: "Angular",
    icon: {
      dark: angularIcon.src,
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
      dark: nestDarkIcon.src,
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
      dark: typescriptIcon.src,
      light: typescriptIcon.src,
    },
  },
} as const;

type TechnologiesKeys = keyof typeof TECHNOLOGIES;
export type TechnologiesValues = (typeof TECHNOLOGIES)[TechnologiesKeys];
