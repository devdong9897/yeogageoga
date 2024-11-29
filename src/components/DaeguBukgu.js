import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../pages/MainPage.css";
import { useEffect, useRef, useState } from "react";
import { fetchThemeData1 } from "../api/axios";

const DaeguBukgu = () => {
  const swiperRef = useRef(null);
  const [themeList, setThemeList] = useState([]);

  // 이미지 매핑 테이블
  const imageMap = {
    벽강물회: "/images/벽강물회.jpg",
    파이퍼: "/images/파이퍼.jpg",
    "맥도날드/대구복현DT점": "/images/맥도날드.jpg",
    "EXCO/동관": "/images/엑스코1.jpg",
    "EXCO/서관": "/images/엑스코2.jpg",
    연암공원: "/images/연암공원.jpg",
    컨벤션비지니스호텔: "/images/컨벤션.jpg",
  };

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

  // 이미지 매칭 함수
  const getMatchedImage = (themeName) => {
    return imageMap[themeName] || "/images/default.jpg";
  };

  // 잘못된 데이터 제외
  const filteredThemeList = themeList.filter(
    (_, index) =>
      index !== 5 &&
      index !== 10 &&
      index !== 1 &&
      index !== 3 &&
      index !== 9 &&
      index !== 7 &&
      index !== 12
  );

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
        {filteredThemeList.map((theme, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img
                src={getMatchedImage(theme.rlteTatsNm)} // rlteTatsNm을 기반으로 이미지 매칭
                alt={`Slide ${index + 1}`}
                className="card-image"
              />
              <div className="card-content">
                <div className="place-name">{theme.rlteTatsNm}</div>
                <div className="info-container">
                  <div className="tour-type">{theme.rlteCtgrySclsNm}</div>
                  <div className="date">{theme.rlteBsicAdres}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="button button-prev-theme">{"<"}</button>
      <button className="button button-next-theme">{">"}</button>
    </div>
  );
};

export default DaeguBukgu;
