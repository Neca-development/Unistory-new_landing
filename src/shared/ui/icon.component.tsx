import dynamic from 'next/dynamic'
import React from 'react'

const unistory = dynamic(() => import('@public/assets/icons/unistory.svg'))
const logoLight = dynamic(() => import('@public/assets/icons/logo-light.svg'))
const logoDark = dynamic(() => import('@public/assets/icons/logo-dark.svg'))
const sun = dynamic(() => import('@public/assets/icons/sun.svg'))
const winter = dynamic(() => import('@public/assets/icons/winter.svg'))
const summer = dynamic(() => import('@public/assets/icons/summer.svg'))
const earth = dynamic(() => import('@public/assets/icons/earth.svg'))
const rocket = dynamic(() => import('@public/assets/icons/rocket.svg'))
const cloud = dynamic(() => import('@public/assets/icons/cloud.svg'))

const iconTypes = {
  unistory,
  logoLight,
  logoDark,
  sun,
  winter,
  summer,
  earth,
  rocket,
  cloud,
}

export type IconsTypes = keyof typeof iconTypes

export interface IIconComponentProperties extends React.SVGAttributes<SVGElement> {
  name: IconsTypes
}

export const IconComponent = ({ name, ...props }: IIconComponentProperties) => {
  const Icon = iconTypes[name]
  return <Icon {...props} />
}
