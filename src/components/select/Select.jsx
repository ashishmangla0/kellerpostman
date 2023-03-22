import {
  string,
  func,
  oneOfType,
  number,
  shape,
  arrayOf,
} from "prop-types";
import { useEffect, useRef, useState } from "react";

import "./select.scss";

const Select = (props) => {
  const {
    selectWrapClasses,
    selectedValue,
    placeHolder,
    selectId,
    handleClick,
    dropdownValues,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const dropdownMenuRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (
          dropdownMenuRef.current &&
          !dropdownMenuRef.current.contains(event.target)
        ) {
          handleToggle();
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleButtonClick = () => {
    handleToggle();
    if (handleClick) {
      handleClick( selectedValue);
    }
  };

  const handleItemClick = (value) => {
    console.log(value);
    handleToggle();
    handleClick(value);
  };

  return (
    <div className={`select ${selectWrapClasses}`} ref={dropdownMenuRef}>
      <button
        className="form__input select__button"
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        id={selectId}
        onClick={handleButtonClick}
      >
        <span className="select__value" aria-live="polite">
          {selectedValue === "" ? placeHolder : selectedValue}
        </span>
        <span className="select__icon">
          <i className="icon icon-arrow-down"></i>
        </span>
      </button>
      {isOpen && (
        <ul aria-labelledby={selectId} className={"select__list"}>
          {dropdownValues?.map((dropdownValue) => (
            <li
              tabIndex={"0"}
              role={"option"}
              onClick={() => handleItemClick(dropdownValue.label)}
              key={dropdownValue.label}
              className="select__item body-14"
            >
              {dropdownValue.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Select.propTypes = {
  selectId: string,
  selectedValue: oneOfType([string, number]),
  placeHolder: string,
  selectWrapClasses: string,
  dropdownValues: arrayOf(
    shape({
      label: oneOfType([string, number]),
      value: oneOfType([string, number]),
    })
  ),
  classes: string,
  wrapperClasses: string,
  handleClick: func,
};
Select.defaultProps = {
    selectWrapClasses: '',
  selectId: "",
  selectedValue: "",
  placeHolder: "",
  handleClick: () => {},
  classes: "",
  wrapperClasses: "",
};

export default Select;
