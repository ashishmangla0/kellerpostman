import { string, oneOf, func } from "prop-types";

import './input.scss'

const Input = (props) => {
  const { lable, inputId, inputType,classes, wrapperClasses,handleChange,value ,name} =
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
      {lable && <label for={inputId} className={`form__input__lable ${value && 'filled'}`}>{lable}</label>}
    </div>
  );
};
Input.propTypes = {
  inputType: oneOf(["text", "password", "tel", "email"]),
  inputId: string,
  handleChange: func,
  lable: string,
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
