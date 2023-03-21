import {
  string,
  func,
  oneOfType,
  number,
  shape,
  arrayOf,
  selectedValue,
} from "prop-types";
import { useState } from "react";

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

  console.log(selectedValue);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleButtonClick = () => {
    handleToggle();
    if (handleClick) {
      handleClick();
    }
  };

  const handleItemClick = (e) => {
    console.log(e);
    handleToggle();
  };
  return (
    <div className={`select ${selectWrapClasses}`}>
      <button
        className="form__input "
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        id={selectId}
        onClick={handleButtonClick}
      >
        {selectedValue === "" ? placeHolder : selectedValue}
        <i className="icon icon-arrow-down"></i>
      </button>
      {isOpen && (
        <ul aria-labelledby={selectId} className={"select__list"}>
          {dropdownValues?.map((dropdownValue) => (
            <li
              tabIndex={"0"}
              role={"option"}
              onClick={(e) => handleItemClick(e)}
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
  selectId: "",
  selectedValue: "",
  placeHolder: "",
  handleClick: () => {},
  classes: "",
  wrapperClasses: "",
};

export default Select;
