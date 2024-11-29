import React, { useState, useEffect, useRef } from "react";
import "../pages/MainPage.css";
import { getAreaBasedList } from "../api/axios"; // 관광명소 API 호출 함수 import

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const isFetching = useRef(false); // 중복 호출 방지 플래그

  // 관광명소 데이터를 가져오는 함수
  const fetchImages = async () => {
    if (isFetching.current) return;
    isFetching.current = true;

    try {
      const response = await getAreaBasedList(1, 9);
      const fetchedImages = response.response?.body?.items?.item?.map(
        (item) => item.firstimage
      );

      setImages(
        fetchedImages.filter((image) => image !== undefined && image !== null)
      );
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      isFetching.current = false;
    }
  };

  // 이미지 전환용
  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  const handleNextSlide = () => {
    if (images.length === 0) return; // 이미지가 없을 경우 동작 중단
    setIsLeaving(true);
    setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
      setIsLeaving(false);
    }, 200);
  };

  const handlePrevSlide = () => {
    if (images.length === 0) return; // 이미지가 없을 경우 동작 중단
    setIsLeaving(true);
    setTimeout(() => {
      setCurrent(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsLeaving(false);
    }, 200);
  };

  // 로딩 중 또는 데이터 없음 표시
  if (images.length === 0) {
    return (
      <div className="slider-container">
        <p>이미지를 불러오는 중입니다...</p>
      </div>
    );
  }

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
