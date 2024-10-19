import React, { useState, useEffect } from "react";
import "../pages/MainPage.css";

const ImageSlider = () => {
  const images = [
    "/images/test1.jpg",
    "/images/test2.jpg",
    "/images/test3.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);
    // 3초마다 전환, 추후 수정

    return () => clearInterval(timer);
  });

  const handleNextSlide = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
      setIsLeaving(false);
    }, 200);
    // 애니메이션 변경시간
  };

  const handlePrevSlide = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setCurrent(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsLeaving(false);
    }, 200);
    // 애니메이션 변경시간
  };

  return (
    <div className="slider-container">
      <div className="image-wrapper">
        <button onClick={handlePrevSlide} className="button button-prev">
          {"<"}
        </button>
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className={`image ${isLeaving ? "image-leaving" : ""}`}
        />
        <button onClick={handleNextSlide} className="button button-next">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
