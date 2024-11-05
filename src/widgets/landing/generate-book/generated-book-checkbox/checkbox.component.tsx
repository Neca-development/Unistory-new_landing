import React from "react";

interface BookCheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
}

const BookCheckbox: React.FC<BookCheckboxProps> = ({ isChecked, onToggle }) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onClick={onToggle}
      className="absolute w-5 h-5 bg-light-bg rounded-xl top-1 right-1 pointer-events-none"
    />
  );
};

export default BookCheckbox;
