import useMedia from "../../hooks/useMedia";

const FooterShimmer = () =>{
    const mediaType = useMedia();
    return(
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
    )
}

export default FooterShimmer