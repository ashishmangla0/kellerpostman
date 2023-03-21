import { useState } from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import Textarea from "../textarea/Textarea";
import "./contact.scss";

const Contact = () => {

//     const [firstname, setFirstName] = useState('');
// const [emailValue,setEmailValue] = useState('');

//     const  handleChange = (e) => {
//         setFirstName(e.target.value);

//       }
//       const handleEmailChange = (e) =>{
// setEmailValue(e.target.value)
//       }


      const initialContactValues = {
        full_name: "",
        email_address: "",
        phone_number:"",
        zip_code:'',
        describe:''
      };

      const [contactFormValues, setContactFormValues] =useState(initialContactValues);

      const  handleFormChange = (e) => {
        const { name, value } = e.target;
        setContactFormValues({ ...contactFormValues, [name]: value });

      }
  return (
    <section className="contact">

      <h2 className="h1 text-center contact__title mobile-h2">Start Your Case Today</h2>
      <div className="container contact__card">
        <div className="row">
          <div
            className="col-md-6 contact__left"
            style={{
              background: `url("./contact.jpg") no-repeat center center`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="col-md-6 contact__right">
          <p className="body-18 contact__right__text">
          We're ready to start fighting for you. Tell us more about your
            situation and a member of our team will contact you soon.</p>

            <form className="contact__right__form form">
                <div className="form__group">
                <Input lable={'Full Name'} type="text" inputId='full_name' name={"full_name"} value={contactFormValues.full_name} handleChange={handleFormChange} />
                </div>
                <div className="row">
                    <div className="col-md-6"><Input lable={'Email Address'} inputType="email" inputId='email_address' name={"email_address"} value={contactFormValues.email_address} handleChange={handleFormChange} /></div>
                    <div className="col-md-6"><Input lable={'Phone Number'} inputType="tel" inputId='phone_number' name={"phone_number"} value={contactFormValues.phone_number} handleChange={handleFormChange} /></div>
                </div>
                <div className="row">
                    <div className="col-md-6"><Input lable={'Zip Code'} inputType="text" inputId='zip_code' name={"zip_code"} value={contactFormValues.zip_code} handleChange={handleFormChange} /></div>
                    <div className="col-md-6"><Input lable={'Phone Number'} inputType="tel" inputId='phone_number' name={"phone_number"} value={contactFormValues.phone_number} handleChange={handleFormChange} /></div>
                </div>
                <Textarea lable={'Describe Your Issue'} rows={3} name={'describe'} inputId={'describe'} handleChange={handleFormChange} value={contactFormValues.describe}/>

<Select placeHolder={'Select Case'}/>
              <button type="submit" className="button button--primary">
                Submit free case evaluation
              </button>
            </form>
            <p className="contact__right__">
            By submitting, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
