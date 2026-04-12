// img import
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

// swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <img
          src={banner1}
          alt="banner1"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={banner2}
          alt="banner2"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={banner3}
          alt="banner3"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
