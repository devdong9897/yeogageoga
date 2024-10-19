import React, { useState, useEffect } from "react";
import "./MainPage.css";

const MainPage = () => {
  const images = [
    "https://via.placeholder.com/800x300?text=Image+1",
    "https://via.placeholder.com/800x300?text=Image+2",
    "https://via.placeholder.com/800x300?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    // 3초마다 슬라이드 자동 전환, 추후 수정 예정
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      <div className="image-wrapper">
        <button onClick={prevSlide} className="button button-prev">
          {"<"}
        </button>
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="image"
        />
        <button onClick={nextSlide} className="button button-next">
          {">"}
        </button>
      </div>
      <div>유튜브영상</div>

      <div>대구 테마명소</div>

      <div>대구 추천명소</div>

      <div>대구 TOP명소</div>
      <div></div>
    </div>
  );
};

export default MainPage;
