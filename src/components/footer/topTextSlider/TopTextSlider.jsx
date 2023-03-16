import Slider from "react-slick";

import "./toptextslider.scss";

const TopTextSlider = (props) => {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <>
      <div className="toptextslider">
        <div className="container">
        <Slider {...settings}>
          {data?.map((text) => (
            <div dangerouslySetInnerHTML={{ __html: text.add_text }} />
          ))}
        </Slider>
        </div>

      </div>
      <div>asd fsdf asdf df</div>
    </>
  );
};

export default TopTextSlider;
