import React, { InputHTMLAttributes } from "react";
import styles from "./radio.module.scss";

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  radioGroup: string;
}

export function Radio(props: IRadioProps) {
  const { name, radioGroup, ...rest } = props;

  return (
    <label className={styles.wrapper}>
      <input type="radio" name={radioGroup} id={name} {...rest} />
      <span className={styles.checkmark}></span>
      <span className={styles.name}>{name}</span>
    </label>
  );
}
