import "./contact.scss";

const Contact = () => {
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

            <form className="contact__right__form">
              <input />
              <input />
              <input />
              <input />
              <input />
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
