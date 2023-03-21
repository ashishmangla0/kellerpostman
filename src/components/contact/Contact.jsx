import { useState } from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import Textarea from "../textarea/Textarea";
import "./contact.scss";

const Contact = () => {
  const initialContactValues = {
    full_name: "",
    email_address: "",
    phone_number: "",
    zip_code: "",
    describe: "",
    select_case:""
  };

  const FilterCases = [
    { label: "Camp Lejeune Litigation" },
    { label: "NEC/Infant Formula Litigation" },
    { label: "3M Combat Arms Earplugs Litigation" },
    { label: "Acetaminophen Litigation" },
    { label: "Zantac Litigation" },
    { label: "Paragard IUD Litigation" }
  ];

  const [contactFormValues, setContactFormValues] =
    useState(initialContactValues);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormValues({ ...contactFormValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <h2 className="h1 text-center contact__title mobile-h2">
        Start Your Case Today
      </h2>
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
              situation and a member of our team will contact you soon.
            </p>

            <form className="contact__right__form form" onSubmit={handleSubmit}>
              <div className="form__group">
                <Input
                  label={"Full Name"}
                  type="text"
                  inputId="full_name"
                  name={"full_name"}
                  value={contactFormValues.full_name}
                  handleChange={handleFormChange}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    label={"Email Address"}
                    inputType="email"
                    inputId="email_address"
                    name={"email_address"}
                    value={contactFormValues.email_address}
                    handleChange={handleFormChange}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    label={"Phone Number"}
                    inputType="tel"
                    inputId="phone_number"
                    name={"phone_number"}
                    value={contactFormValues.phone_number}
                    handleChange={handleFormChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    label={"Zip Code"}
                    inputType="text"
                    inputId="zip_code"
                    name={"zip_code"}
                    value={contactFormValues.zip_code}
                    handleChange={handleFormChange}
                  />
                </div>
                <div className="col-md-6">
                <Select
                placeHolder={"Select Case"}
                selectId={"select_case"}
                dropdownValues={FilterCases}
                selectedValue={contactFormValues.select_case}
              />
                </div>
              </div>
              <Textarea
                label={"Describe Your Issue"}
                rows={3}
                name={"describe"}
                inputId={"describe"}
                handleChange={handleFormChange}
                value={contactFormValues.describe}
              />
              
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
