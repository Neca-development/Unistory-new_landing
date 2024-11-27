import React from "react";
import styles from "./checkbox.module.scss";

interface BookCheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
  className?: string;
}

export const BookCheckbox: React.FC<BookCheckboxProps> = ({ isChecked, onToggle, className }) => {
  return (
    <label className={`${styles.wrapper} ${className || ""}`}>
      <input type="checkbox" checked={isChecked} onChange={onToggle} className={styles.checkbox} />
      <span className={styles.checkmark}></span>
    </label>
  );
};
