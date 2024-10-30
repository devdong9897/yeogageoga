import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../pages/MainPage.css";
import { useRef } from "react";

const ThemeBanner = () => {
  const swiperRef = useRef(null);
  // 버튼을 독립적으로 움직이기 위해 useRef를 사용

  const themeData = [
    {
      image: "/images/test1.jpg",
      placeName: "장소1",
      tourType: "카페 투어 중",
      date: "2023년 12월 27일",
    },
    {
      image: "/images/test2.jpg",
      placeName: "장소2",
      tourType: "유원지 투어",
      date: "2024년 1월 10일",
    },
    {
      image: "/images/test3.jpg",
      placeName: "장소3",
      tourType: "도시 탐방",
      date: "2024년 2월 14일",
    },
    {
      image: "/images/test1.jpg",
      placeName: "장소4",
      tourType: "힐링 투어",
      date: "2024년 3월 1일",
    },
    {
      image: "/images/test2.jpg",
      placeName: "장소5",
      tourType: "문화 유적 투어",
      date: "2024년 4월 5일",
    },
  ];

  return (
    <div className="banner-container">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        navigation={{
          nextEl: ".button-next-theme",
          prevEl: ".button-prev-theme",
        }}
        modules={[Navigation]}
      >
        {themeData.map((theme, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img
                src={theme.image}
                alt={`Slide ${index + 1}`}
                className="card-image"
              />
              <div className="card-content">
                <div className="place-name">{theme.placeName}</div>
                <div className="info-container">
                  <div className="tour-type">{theme.tourType}</div>
                  <div className="date">{theme.date}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 네비게이션 버튼 */}
      <button className="button button-prev-theme">{"<"}</button>
      <button className="button button-next-theme">{">"}</button>
    </div>
  );
};

export default ThemeBanner;
