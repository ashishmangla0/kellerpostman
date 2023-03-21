import { string, oneOf, func } from "prop-types";

import './textarea.scss'

const Textarea = (props) => {
  const { lable, inputId, inputType, handleChange, classes, wrapperClasses,rows,value,name} =
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
      {lable && <label for={inputId} className={`form__input__lable ${value && 'filled'}`}>{lable}</label>}
    </div>
  );
};
Textarea.propTypes = {
  inputType: oneOf(["text", "password", "tel", "email"]),
  inputId: string,
  handleChange: func,
  lable: string,
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
