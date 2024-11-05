import React from "react";
import styles from "./checkbox.module.scss";

interface BookCheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
}

const BookCheckbox: React.FC<BookCheckboxProps> = ({ isChecked, onToggle }) => {
  return (
    <label className="wrapper">
      <input type="checkbox" checked={isChecked} onChange={onToggle} className="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default BookCheckbox;
