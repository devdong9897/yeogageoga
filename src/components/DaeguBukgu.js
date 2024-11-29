import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../pages/MainPage.css";
import { useEffect, useRef, useState } from "react";
import { fetchThemeData1 } from "../api/axios";

const ThemeBanner = () => {
  const swiperRef = useRef(null);
  const [themeList, setThemeList] = useState([]);

  useEffect(() => {
    getListData();
  }, []);

  const getListData = async () => {
    const response = await fetchThemeData1();
    console.log(response);
    if (response && response.response && response.response.body) {
      const data = response.response.body.items.item;
      setThemeList(data);
    }
  };

  // 기본 이미지 순서를 생성하는 함수
  const getDefaultImage = (index) => {
    const imageIndex = (index % 3) + 1; // 예: 5개의 기본 이미지 순서대로 사용
    return `/images/test${imageIndex}.jpg`;
  };

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
        {themeList.map((theme, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img
                src={theme.image || getDefaultImage(index)} // 이미지가 없으면 순차적으로 기본 이미지 사용
                alt={`Slide ${index + 1}`}
                className="card-image"
              />
              <div className="card-content">
                <div className="place-name">{theme.rlteTatsNm}</div>{" "}
                {/* rlteTatsNm */}
                <div className="info-container">
                  <div className="tour-type">{theme.rlteCtgrySclsNm}</div>{" "}
                  {/* rlteCtgrySclsNm */}
                  <div className="date">{theme.signguNm}</div> {/* signguNm */}
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
