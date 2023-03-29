import useMedia from "../../hooks/useMedia";

import "./hero.scss";

const Hero = (props) => {
  const { data } = props;
  const mediaType = useMedia();

  return (
    <section className="hero">
      {mediaType !== "Mobile"}
      <div className="hero__bg">
        <img
          loading="lazy"
          src={data?.hero_image?.url}
          alt=""
          className="hero__img"
        />
      </div>
      <div className="container hero__container">
        <div className="row gx-5">
          <div className="col-md-9 hero__left">
            {mediaType === "Mobile" && (
              <img
                loading="lazy"
                src={data?.mobile_hero_image?.url}
                alt=""
                className="hero__img"
              />
            )}

            <div className="row  hero__left__content">
              <div className="col-md-7">
                <div className="hero__content">
                  <h1
                    dangerouslySetInnerHTML={{ __html: data?.title }}
                    className="hero__title display mobile-display"
                  />
                  <div className="body-18 hero__desc">
                    {data?.short_description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-3 hero__right">
            {data?.hero_stats.map((star) => (
              <div className="hero__star" key={star?.title}>
                <h2 className="hero__star-title mobile-h2">{star?.title}</h2>
                {star?.subtitle}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
