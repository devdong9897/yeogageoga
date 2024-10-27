import React from "react";
import ImageSlider from "../components/ImageSlider";
import "./MainPage.css";
import YouTubeVideo from "../components/YouTube";
import ThemeBanner from "../components/ThemeBanner";
import GoodBanner from "../components/GoodBanner";
import BestBanner from "../components/BestBanner";

const MainPage = () => {
  return (
    <>
      <ImageSlider />
      <div className="banner-section" />
      <YouTubeVideo />
      <div className="banner-section" />
      <p className="themetext">대구 테마명소</p>
      <ThemeBanner />
      <div className="banner-section" />
      <p className="themetext">대구 추천명소</p>
      <GoodBanner />
      <div className="banner-section" />
      <p className="themetext">대구 TOP명소</p>
      <BestBanner />
      <div className="banner-section" />
    </>
  );
};

export default MainPage;
