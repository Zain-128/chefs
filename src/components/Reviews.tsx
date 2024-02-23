import React from "react";
import CarouselCards from "./Carousel/CarouselCards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardProfile from "@/assets/card-profile.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const Reviews = ({ deviceType }: any) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container py-10 "
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      itemClass="carousel-item-padding-40-px"
      centerMode={true}
    >
      <section className="px-3">
        <CarouselCards
          image={CardProfile}
          name={"William Smith"}
          role={"Customer"}
          ratings={4.7}
          text={
            "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة"
          }
        />
      </section>
      <section className="px-3">
        <CarouselCards
          image={CardProfile}
          name={"William Smith"}
          role={"Customer"}
          ratings={4.7}
          text={
            "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة"
          }
        />
      </section>
      <section className="px-3">
        <CarouselCards
          image={CardProfile}
          name={"William Smith"}
          role={"Customer"}
          ratings={4.7}
          text={
            "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة"
          }
        />
      </section>
    </Carousel>
  );
};

export default Reviews;
