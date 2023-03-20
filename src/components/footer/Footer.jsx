import useMedia from "../../hooks/useMedia";
import "./footer.scss";

const deepFooterLinks = [
  {
    title: "Design by SPINX Digital",
  },
  {
    title: "Terms",
  },
  {
    title: "Privacy",
  },
  {
    title: "Legal Disclaimer",
  },
];

const sitemap = [
  {
    title: "About",
  },
  {
    title: "Our Team",
  },
  {
    title: "Cases",
  },
  {
    title: "Practice Areas",
  },
  {
    title: "News & Insights",
  },
  {
    title: "Careers",
  },
  {
    title: "Contact",
  },
];
const featureCases = [
  {
    title: "about",
  },
  {
    title: "our team",
  },
  {
    title: "cases",
  },
  {
    title: "practice areas",
  },
];

const socialList = [
  {
    title: "linkedin",
    link: "https://www.linkedin.com/company/keller-lenkner/",
  },
  { title: "twitter", link: "https://twitter.com/kellerpostman" },
  { title: "facebook", link: "https://www.facebook.com/KellerPostman/" },
];

const offices = [
  {
    title: "Chicago, IL",
    address1: "150 N. Riverside Plaza, Suite 4100",
    address2: "Chicago, IL 60606",
  },
  {
    title: "Washington, D.C.",
    address1: "1100 Vermont Avenue, N.W., 12th Floor",
    address2: "Washington, D.C. 20005",
  },
  {
    title: "chicago, IL",
    address1: "150 N. Riverside Plaza, Suite 4100",
    address2: "Chicago, IL 60606",
  },
  {
    title: "Austin, TX",
    address1: "111 Congress Avenue, Suite 500",
    address2: "Austin, TX 78701",
  },
  {
    title: "Miami, FL",
    address1: "111 Congress Avenue, Suite 500",
    address2: "Austin, TX 78701",
  },
];

const RenderSitemap = () => {
  return (
    <>
      {sitemap.map((item) => (
        <li className="footer__item footer__item--sitemap">
          <a className="footer__link text-capitalize body-14">{item.title}</a>
        </li>
      ))}
    </>
  );
};

const RenderOffice = () => {
  return (
    <>
      {offices.map((office) => (
        <li className="footer__item footer__item--address">
          <strong className="footer__address-title body-14 body-14--bold">
            {office.title}
          </strong>
          <address className="footer__address body-14">
            <span>{office.address1}</span>
            <span>{office.address2}</span>
          </address>
        </li>
      ))}
    </>
  );
};

const RenderSocialLinks = () => {
  return (
    <>
      {socialList.map((socialItem) => (
        <li className="footer__item footer__item--social">
          <a
            className="footer__link footer__link--social"
            href={socialItem.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`icon icon-${socialItem.title}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

const TitleList = (props) => {
  const { title, titleClasess, renderList, listClasess } = props;
  return (
    <>
      <h6 className={titleClasess}>{title}</h6>
      <ul className={listClasess}>{renderList}</ul>
    </>
  );
};

const SocialMedia = () => {
  return (
    <TitleList
      title="follow us"
      titleClasess={"footer__title text-uppercase"}
      renderList={<RenderSocialLinks />}
      listClasess={"footer__list footer__list--social"}
    />
  );
};

const Footer = () => {
  const mediaType = useMedia();
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__contact text-sm-center">
                call us at <a href="tel:872-264-6677">872-264-6677</a>
              </div>
            </div>
            <div className="col-md-3 footer__col col-sm-6">
              <TitleList
                title="sitemap"
                titleClasess={"footer__title text-uppercase"}
                renderList={<RenderSitemap />}
                listClasess={"footer__list"}
              />
              {mediaType === "Desktop" && <div className="footer__social"><SocialMedia /></div>}
            </div>
            <div className="col-md-5 footer__col col-sm-6">
              <TitleList
                title="feature cases"
                titleClasess={"footer__title text-uppercase"}
                renderList={<RenderSitemap />}
                listClasess={"footer__list"}
              />
            </div>
            <div className="col-md-4 footer__col col-sm-12">
              <TitleList
                title="feature cases"
                titleClasess={"footer__title text-uppercase"}
                renderList={<RenderOffice />}
                listClasess={"footer__list footer__list--address"}
              />
            </div>
            {mediaType === "Mobile" && (
              <div className="col-12 footer__col col-sm-12 ">
                <SocialMedia />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer__bottom text-sm-center">
        <div className="container">
          © {new Date().getFullYear()} Keller Postman LLC. All rights reserved.
          <ul>
            {deepFooterLinks.map((deeplink) => (
              <li>{deeplink.title}</li>
            ))}
          </ul>
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
