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

  // 이미지 매핑 테이블
  const imageMap = {
    동촌유원지: "/images/동촌.jpg",
    아양아트센터: "/images/아양센터.jpg",
    "신세계백화점/대구점": "/images/신세계.jpg",
    "스타벅스/대구동촌유원지점": "/images/스타벅스.jpg",
    청담한상: "/images/청담한상.jpg",
    대구아쿠아리움: "/images/아쿠아리움.jpg",
    "마고플레인/아양점": "images/마고.jpg",
    불로전통시장: "/images/불로전통시장.jpg",
  };

  useEffect(() => {
    getGoodData();
  }, []);

  const getGoodData = async () => {
    const response = await fetchThemeData2();
    if (response && response.response && response.response.body) {
      const data = response.response.body.items.item;
      setGoodData(data);
    }
  };

  // 이미지 매칭 함수
  const getMatchedImage = (themeName) => {
    return imageMap[themeName] || "/images/default.jpg";
  };

  // 잘못된 데이터 제외
  const filteredgoodData = goodData.filter(
    (_, index) =>
      index !== 5 &&
      index !== 6 &&
      index !== 7 &&
      index !== 8 &&
      index !== 9 &&
      index !== 10 &&
      index !== 12 &&
      index !== 11 &&
      index !== 14 &&
      index !== 16 &&
      index !== 17 &&
      index !== 18 &&
      index !== 3
  );

  // 특정 장소 링크
  const getLink = (themeName) => {
    if (themeName === "동촌유원지") {
      return "https://map.naver.com/p/entry/place/13473883?c=15.00,0,0,0,dh";
    } else if (themeName === "아양아트센터") {
      return "https://map.naver.com/p/entry/place/11572610?c=15.00,0,0,0,dh";
    } else if (themeName === "신세계백화점/대구점") {
      return "https://map.naver.com/p/entry/place/38003935?c=15.00,0,0,0,dh";
    } else if (themeName === "청담한상") {
      return "https://map.naver.com/p/entry/place/37161861?c=15.00,0,0,0,dh";
    } else if (themeName === "대구아쿠아리움") {
      return "https://map.naver.com/p/entry/place/68685079?c=15.00,0,0,0,dh";
    } else if (themeName === "마고플레인/아양점") {
      return "https://map.naver.com/p/entry/place/1597504581?c=15.00,0,0,0,dh";
    } else if (themeName === "불로전통시장") {
      return "https://map.naver.com/p/entry/place/19732975?c=15.00,0,0,0,dh";
    }

    return;
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
        {filteredgoodData.map((good, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <a
                href={getLink(good.rlteTatsNm)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={getMatchedImage(good.rlteTatsNm)} // rlteTatsNm을 기반으로 이미지 매칭
                  alt={`Slide ${index + 1}`}
                  className="card-image"
                />
                <img
                  src="/images/map.png"
                  alt="지도 보기"
                  className="map-icon"
                />
              </a>
              <div className="card-content">
                <div className="place-name">{good.rlteTatsNm}</div>{" "}
                <div className="info-container">
                  <div className="tour-type">{good.rlteCtgrySclsNm}</div>{" "}
                  <div className="date">{good.rlteBsicAdres}</div>
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
