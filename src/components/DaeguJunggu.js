import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../pages/MainPage.css";
import { useEffect, useRef, useState } from "react";
import { fetchThemeData3 } from "../api/axios";

const DaeguJunggu = () => {
  const swiperRef = useRef(null);
  const [bestData, setBestData] = useState([]);

  useEffect(() => {
    getBestData();
  }, []);

  const getBestData = async () => {
    const response = await fetchThemeData3();
    console.log(response);
    if (response && response.response && response.response.body) {
      const data = response.response.body.items.item;
      setBestData(data);
    }
  };

  // 기본 이미지 순서를 생성하는 함수
  const getDefaultImage = (index) => {
    const imageIndex = (index % 3) + 1; // 예: 3개의 기본 이미지를 순차적으로 사용
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
          nextEl: ".button-next-best",
          prevEl: ".button-prev-best",
        }}
        modules={[Navigation]}
      >
        {bestData.map((best, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img
                src={best.image || getDefaultImage(index)} // 이미지가 없으면 기본 이미지 사용
                alt={`Slide ${index + 1}`}
                className="card-image"
              />
              <div className="card-content">
                <div className="place-name">{best.rlteTatsNm}</div>{" "}
                {/* rlteTatsNm */}
                <div className="info-container">
                  <div className="tour-type">{best.rlteCtgrySclsNm}</div>{" "}
                  {/* rlteCtgrySclsNm */}
                  <div className="date">{best.signguNm}</div> {/* signguNm */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 네비게이션 버튼 */}
      <button className="button button-prev-best">{"<"}</button>
      <button className="button button-next-best">{">"}</button>
    </div>
  );
};

export default DaeguJunggu;
