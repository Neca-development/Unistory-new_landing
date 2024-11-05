import React from "react";
import styles from "./checkbox.module.scss";

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onClick }) => {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" className={styles.checkbox} checked={checked} onClick={onClick} />
    </label>
  );
};
