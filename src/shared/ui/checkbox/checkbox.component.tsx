import React from 'react'
import styles from './checkbox.module.scss'

interface ICheckboxProps {
  name: string
}

export function Checkbox(props: ICheckboxProps) {
  const { name } = props

  return (
    <label className={styles.wrapper}>
      <input type='checkbox' name={name} id={name} />
      <span className={styles.checkmark}></span>
      <span className={styles.name}>{name}</span>
    </label>
  )
}
