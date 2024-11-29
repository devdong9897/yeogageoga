import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../pages/MainPage.css";
import { useEffect, useRef, useState } from "react";
import { fetchThemeData2 } from "../api/axios";

const Daegudonggu = () => {
  const swiperRef = useRef(null);
  const [goodData, setGoodData] = useState([]);

  useEffect(() => {
    getGoodData();
  }, []);

  const getGoodData = async () => {
    const response = await fetchThemeData2();
    console.log(response);
    if (response && response.response && response.response.body) {
      const data = response.response.body.items.item;
      setGoodData(data);
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
        loop={true} // 무한 스와이프 활성화
        navigation={{
          nextEl: ".button-next-good",
          prevEl: ".button-prev-good",
        }}
        modules={[Navigation]}
      >
        {goodData.map((good, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img
                src={good.image || getDefaultImage(index)} // 이미지가 없으면 순차적으로 기본 이미지 사용
                alt={`Slide ${index + 1}`}
                className="card-image"
              />
              <div className="card-content">
                <div className="place-name">{good.rlteTatsNm}</div>{" "}
                {/* rlteTatsNm */}
                <div className="info-container">
                  <div className="tour-type">{good.rlteCtgrySclsNm}</div>{" "}
                  {/* rlteCtgrySclsNm */}
                  <div className="date">{good.signguNm}</div> {/* signguNm */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 네비게이션 버튼 */}
      <button className="button button-prev-good">{"<"}</button>
      <button className="button button-next-good">{">"}</button>
    </div>
  );
};

export default Daegudonggu;
