import React from "react";
import slider1 from "./authMedia/slider1.png";
import slider2 from "./authMedia/slider2.png";
import slider3 from "./authMedia/slider3.png";
import slider4 from "./authMedia/slider4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
// import required modules
import { EffectFade, Autoplay } from "swiper";

const Slider = () => {
  return (
    <div className="caro">
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
