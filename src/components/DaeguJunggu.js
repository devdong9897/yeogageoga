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

  // 이미지 매핑 테이블
  const imageMap = {
    국채보상운동기념공원: "/images/국채보상.jpg",
    "228기념중앙공원": "/images/228.jpg",
    서문시장: "/images/서문시장.webp",
    "더현대/대구": "/images/더현대.jpg",
    "토요코인호텔/동성로점": "/images/토요코인.jpg",
    김광석다시그리기길: "/images/김광석.jpg",
  };

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

  // 이미지 매칭 함수
  const getMatchedImage = (themeName) => {
    return imageMap[themeName] || "/images/default.jpg";
  };

  // 잘못된 데이터 제외
  const filteredgoodData = bestData.filter(
    (_, index) =>
      index !== 0 &&
      index !== 1 &&
      index !== 2 &&
      index !== 7 &&
      index !== 11 &&
      index !== 12 &&
      index !== 9 &&
      index !== 3 &&
      index !== 8 &&
      index !== 10
  );

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
        {filteredgoodData.map((best, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img
                src={getMatchedImage(best.rlteTatsNm)} // rlteTatsNm을 기반으로 이미지 매칭
                alt={`Slide ${index + 1}`}
                className="card-image"
              />
              <div className="card-content">
                <div className="place-name">{best.rlteTatsNm}</div>{" "}
                <div className="info-container">
                  <div className="tour-type">{best.rlteCtgrySclsNm}</div>{" "}
                  <div className="date">{best.rlteBsicAdres}</div>{" "}
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
