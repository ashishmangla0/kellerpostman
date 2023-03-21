import {
  string,
  func,
  oneOfType,
  number,
  shape,
  arrayOf,
  selectedValue
} from "prop-types";
import { useState } from "react";

import "./select.scss";

const Select = (props) => {
  const { selectedValue, placeHolder, selectId, handleClick, dropdownValues } =
    props;
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

  const handleItemClick = (e) =>{
console.log(e);
  }
  return (
    <div>
      <button
        className="form__input "
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        id={selectId}
        onClick={handleButtonClick}
      >
      {selectedValue === '' ? placeHolder : selectedValue }
        <i className="icon icon-arrow-down"></i>
      </button>

      <ul aria-labelledby={selectId}>

        {dropdownValues?.map((dropdownValue) => <li role={"option"} onClick={(e) => handleItemClick(e)}>
{dropdownValue.label}
        </li>)}
      </ul>
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
