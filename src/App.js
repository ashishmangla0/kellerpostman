import Footer from "./components/footer/Footer";
import useMedia from "./hooks/useMedia";
import useFetch from "./hooks/useFetch";
import TopTextSlider from "./components/footer/topTextSlider/TopTextSlider";
import Header from "./components/header/Header";
import CaseHighlights from "./components/caseHighlights/CaseHighlights";
import Awards from "./components/awards/Awards";
import Meta from "./components/meta/Meta";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";

function App() {
  const { response, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}`
  );

  const mediaType = useMedia();
  return (
    <>
      <Meta data={response?.yoast_head} />
      {loading ? (
        <div>
          <div className="shimmer shimmer--topslider"></div>
          <div className="contact shimmer__contactform">
        <div className="container">
          <div class="contact__title mobile-h2 shimmer shimmer--contact-title"></div>
          <div className="contact__card">
            <div className="row">
              <div className="col-md-6 contact__left shimmer"></div>
              <div className="col-md-6 contact__right">
                <div class="body-18 contact__right__text shimmer shimmer--contact-right-text"></div>
                <div className="form__input__group ">
                  <div className="form__input shimmer"></div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form__input__group">
                      <div className="form__input shimmer"></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form__input__group ">
                      <div className="form__input shimmer"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form__input__group">
                      <div className="form__input shimmer"></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form__input__group ">
                      <div className="form__input shimmer"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form__input__group contact__textarea">
                      <div className="form__input shimmer shimmer--text-area"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div className="button shimmer shimmer--contact-button contact__action"></div>
                  </div>
                  <div class="col-md-12">
                    <div className="contact__agree body-14 shimmer shimmer--contact-agree"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="footer footer--shimmer">
            <div class="footer__top text-sm-center">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div class="footer__contact text-sm-center mobile-h2 shimmer  shimmer__contact"></div>
                  </div>
                  <div className="col-md-4 footer__col col-sm-6 shimmer--footer-col">
                    <div className="footer__title shimmer shimmer--footer-title"></div>
                    <div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                    </div>
                    {mediaType === "Desktop" && (
                      <div class="footer__social">
                        <div class="footer__title shimmer shimmer--footer-title"></div>
                        <div class="footer__item footer__item--social shimmer shimmer--footer-social"></div>
                        <div class="footer__item footer__item--social shimmer shimmer--footer-social"></div>
                        <div class="footer__item footer__item--social shimmer shimmer--footer-social"></div>
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 footer__col col-sm-6 shimmer--footer-col">
                    <div className="footer__title shimmer shimmer--footer-title"></div>
                    <div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                      <div class="footer__item footer__item--sitemap shimmer shimmer--footer-item"></div>
                    </div>
                  </div>
                  <div className="col-md-4 footer__col col-sm-6 shimmer--footer-col">
                    <div className="footer__title shimmer shimmer--footer-title"></div>
                    <div>
                      <div class="footer__item footer__item--address">
                        <div class="footer__address-title shimmer shimmer--footer__address-title"></div>
                        <div class="footer__address shimmer shimmer--footer__address"></div>
                      </div>
                      <div class="footer__item footer__item--address">
                        <div class="footer__address-title shimmer shimmer--footer__address-title"></div>
                        <div class="footer__address shimmer shimmer--footer__address"></div>
                      </div>
                      <div class="footer__item footer__item--address">
                        <div class="footer__address-title shimmer shimmer--footer__address-title"></div>
                        <div class="footer__address shimmer shimmer--footer__address"></div>
                      </div>
                      <div class="footer__item footer__item--address">
                        <div class="footer__address-title shimmer shimmer--footer__address-title"></div>
                        <div class="footer__address shimmer shimmer--footer__address"></div>
                      </div>
                      <div class="footer__item footer__item--address">
                        <div class="footer__address-title shimmer shimmer--footer__address-title"></div>
                        <div class="footer__address shimmer shimmer--footer__address"></div>
                      </div>
                    </div>
                  </div>
                  {mediaType === "Mobile" && (
                    <div class="footer__social footer__social--shimmer">
                      <div class="footer__title shimmer shimmer--footer-title"></div>
                      <div class="footer__item footer__item--social shimmer shimmer--footer-social"></div>
                      <div class="footer__item footer__item--social shimmer shimmer--footer-social"></div>
                      <div class="footer__item footer__item--social shimmer shimmer--footer-social"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="footer__bottom text-sm-center">
              <div class="container">
                <div class="footer__bottom__copy shimmer shimmer--footer-copy"></div>
                <div class="footer__bottom__recaptcha shimmer shimmer--footer-recaptcha"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <TopTextSlider data={response?.acf?.top_text_slider} />
          <Hero data={response?.acf?.home_hero_section} />
          <CaseHighlights data={response?.acf?.case_section} />
          <Awards data={response?.acf?.award_section} />
          <Contact />
          <Footer caseLinks={response?.acf?.case_section} viewCases={response?.acf?.case_section?.link_text}/>
        </>
      )}


    </>
  );
}

export default App;
