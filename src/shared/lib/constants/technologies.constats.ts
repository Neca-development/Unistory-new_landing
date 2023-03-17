import reactIcon from '@public/assets/technologies/React-icon.png'
import reactNativeIcon from '@public/assets/technologies/react-native.png'
import postgresqlIcon from '@public/assets/technologies/postgresql.png'
import nestIcon from '@public/assets/technologies/nest.png'
import nextjsIcon from '@public/assets/technologies/nextjs.png'
import chainlinkNodeIcon from '@public/assets/technologies/chainlink-node.png'
import chainlinkVrfIcon from '@public/assets/technologies/chainlink-vrf.png'
import solidityIcon from '@public/assets/technologies/solidity.png'
import nodeIcon from '@public/assets/technologies/node-v2.png'
import theGraphIcon from '@public/assets/technologies/the-graph.png'
import angularIcon from '@public/assets/technologies/angular.png'
import expressIcon from '@public/assets/technologies/express.png'
import typescriptIcon from '@public/assets/technologies/typescript.png'

export const TECHNOLOGIES = {
  react: {
    name: 'React',
    icon: reactIcon.src,
  },
  angular: {
    name: 'Angular',
    icon: angularIcon.src,
  },
  vue: {
    name: 'Vue',
    icon: 'vue',
  },
  node: {
    name: 'Node',
    icon: nodeIcon.src,
  },
  express: {
    name: 'Express',
    icon: expressIcon.src,
  },
  nest: {
    name: 'Nest',
    icon: nestIcon.src,
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: postgresqlIcon.src,
  },
  reactNative: {
    name: 'React Native',
    icon: reactNativeIcon.src,
  },
  nextjs: {
    name: 'Next.js',
    icon: nextjsIcon.src,
  },
  solidity: {
    name: 'Solidity',
    icon: solidityIcon.src,
  },
  chainlinkNode: {
    name: 'Chainlink Self-hosted node',
    icon: chainlinkNodeIcon.src,
  },
  chainlinkVrf: {
    name: 'Chainlink VRF',
    icon: chainlinkVrfIcon.src,
  },
  theGraph: {
    name: 'TheGraph',
    icon: theGraphIcon.src,
  },
  typescript: {
    name: 'Typescript',
    icon: typescriptIcon.src,
  },
} as const

type TechnologiesKeys = keyof typeof TECHNOLOGIES
export type TechnologiesValues = (typeof TECHNOLOGIES)[TechnologiesKeys]
