import React from "react";
import ImageSlider from "../components/ImageSlider";
import "./MainPage.css";
import YouTubeVideo from "../components/YouTube";

const MainPage = () => {
  return (
    <>
      <ImageSlider />
      <YouTubeVideo />
      <div>대구 테마명소</div>
      <div>대구 추천명소</div>
      <div>대구 TOP명소</div>
    </>
  );
};

export default MainPage;
