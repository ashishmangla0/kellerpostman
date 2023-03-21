import { string, oneOf, func } from "prop-types";

import './textarea.scss'

const Textarea = (props) => {
  const { label, inputId, inputType, handleChange, classes, wrapperClasses,rows,value,name} =
    props;
  return (
    <div className={`form__input__group ${wrapperClasses}`}>
      <textarea
       name={name}
      value={value}
        id={inputId}
        type={inputType}
        onChange={handleChange}
        className={`form__textarea ${classes}`}
        rows={rows}
      />
      {label && <label htmlFor={inputId} className={`form__input__label ${value && 'filled'}`}>{label}</label>}
    </div>
  );
};
Textarea.propTypes = {
  inputType: oneOf(["text", "password", "tel", "email"]),
  inputId: string,
  handleChange: func,
  label: string,
  classes: string,
  wrapperClasses: string,
};
Textarea.defaultProps = {
  inputType: "text",
  inputId: "",
  handleChange: () => {},
  classes: "",
  wrapperClasses: "",
};
export default Textarea;
