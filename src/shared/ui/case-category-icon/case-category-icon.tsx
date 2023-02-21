import clsx from 'clsx'
import React from 'react'
import { IconComponent, IconsTypes } from '../icon.component'
import styles from './case-category-icon.module.scss'

interface ICaseIconProps {
  icon: IconsTypes
  variant: 'white' | 'black'
}

export function CaseCategoryIcon(props: ICaseIconProps) {
  const { icon, variant } = props

  return (
    <div className={styles.box}>
      <IconComponent
        name={icon}
        className={clsx(
          styles.icon,
          variant === 'white' && styles.icon_white,
          variant === 'black' && styles.icon_black
        )}
      />
    </div>
  )
}
