const ContactShimmer = () => {
  return (
    <div className="contact shimmer__contactform">
      <div className="container">
        <div className="contact__title mobile-h2 shimmer shimmer--contact-title"></div>
        <div className="contact__card">
          <div className="row">
            <div className="col-md-6 contact__left shimmer"></div>
            <div className="col-md-6 contact__right">
              <div className="body-18 contact__right__text shimmer shimmer--contact-right-text"></div>
              <div className="form__input__group ">
                <div className="form__input shimmer"></div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form__input__group">
                    <div className="form__input shimmer"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form__input__group ">
                    <div className="form__input shimmer"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form__input__group">
                    <div className="form__input shimmer"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form__input__group ">
                    <div className="form__input shimmer"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form__input__group contact__textarea">
                    <div className="form__input shimmer shimmer--text-area"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="button shimmer shimmer--contact-button contact__action"></div>
                </div>
                <div className="col-md-12">
                  <div className="contact__agree body-14 shimmer shimmer--contact-agree"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactShimmer;
