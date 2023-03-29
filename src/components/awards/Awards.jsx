import Slider from "react-slick";

import "./awards.scss";

const Awards = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const { data } = props;
  return (
    <section className="block awards">
      <div className="container">
        <Slider {...settings}>
          {data?.map((award) => (
            <div className="awards__item" key={award?.select_award?.title}>
              <img
                src={award?.select_award?.sizes?.thumbnail}
                alt={award?.select_award?.title}
                width={award?.select_award?.sizes?.["thumbnail-width"]}
                height={award?.select_award?.sizes?.["thumbnail-height"]}
                className="awards__image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Awards;
