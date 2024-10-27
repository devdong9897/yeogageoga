import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../pages/MainPage.css";

const BestBanner = () => {
  return (
    <div className="banner-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          nextEl: ".best-button-next",
          prevEl: ".best-button-prev",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="image-wrapper">
            <img src="/images/test1.jpg" alt="Slide 1" className="image" />
            <div className="place-text">테스트 1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-wrapper">
            <img src="/images/test2.jpg" alt="Slide 2" className="image" />
            <div className="place-text">테스트 2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-wrapper">
            <img src="/images/test3.jpg" alt="Slide 3" className="image" />
            <div className="place-text">테스트 3</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-wrapper">
            <img src="/images/test1.jpg" alt="Slide 4" className="image" />
            <div className="place-text">테스트 4</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-wrapper">
            <img src="/images/test2.jpg" alt="Slide 5" className="image" />
            <div className="place-text">테스트 5</div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* 네비게이션 버튼 */}
      <button className="button best-button-prev">{"<"}</button>
      <button className="button best-button-next">{">"}</button>
    </div>
  );
};

export default BestBanner;
