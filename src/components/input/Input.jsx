import { string, oneOf, func } from "prop-types";

import './input.scss'

const Input = (props) => {
  const { label, inputId, inputType,classes, wrapperClasses,handleChange,value ,name} =
    props;

  return (
    <div className={`form__input__group ${wrapperClasses}`}>
      <input
      name={name}
        id={inputId}
        type={inputType}
        className={`form__input ${classes}`}
        onChange={handleChange}
        value={value}
      />
      {label && <label htmlFor={inputId} className={`form__input__label ${value && 'filled'}`}>{label}</label>}
    </div>
  );
};
Input.propTypes = {
  inputType: oneOf(["text", "password", "tel", "email"]),
  inputId: string,
  handleChange: func,
  label: string,
  classes: string,
  wrapperClasses: string,
};
Input.defaultProps = {
  inputType: "text",
  inputId: "",
  handleChange: () => {},
  classes: "",
  wrapperClasses: "",
};
export default Input;
