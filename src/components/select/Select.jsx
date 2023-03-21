import { string, oneOf, func } from "prop-types";

import './select.scss';

const Select = (props) =>{
    const {selectedValue , placeHolder} = props
    return(
        <div><button className="form__input ">
            {selectedValue || placeHolder}
            <i className="icon icon-arrow-down"></i>
        </button>

        <ul></ul>
        </div>
    )

}

Select.propTypes = {
    inputType: oneOf(["text", "password", "tel", "email"]),
    selectedValue: string,
    placeHolder: string,
    lable: string,
    classes: string,
    wrapperClasses: string,
  };
  Select.defaultProps = {
    selectedValue: "",
    placeHolder: "",
    handleChange: () => {},
    classes: "",
    wrapperClasses: "",
  };



export default Select