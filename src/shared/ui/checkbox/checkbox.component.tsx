import React, { InputHTMLAttributes } from 'react'
import styles from './checkbox.module.scss'

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Checkbox(props: ICheckboxProps) {
  const { name, ...rest } = props

  return (
    <label className={styles.wrapper}>
      <input type='checkbox' name={name} id={name} {...rest}/>
      <span className={styles.checkmark}></span>
      <span className={styles.name}>{name}</span>
    </label>
  )
}
