import React from "react";
import "../pages/MainPage.css";

const PortalSite = () => {
  return (
    <div className="portal-site">
      <h2 className="portal-site-title">아름다운 도시 대구를 만나보세요</h2>
      <div className="portal-site-logos">
        <div className="portal-site-logo">
          <img src="/images/test1.jpg" alt="대구광역시 뉴스룸" />
        </div>
        <div className="portal-site-logo">
          <img src="/images/test1.jpg" alt="파워풀 대구" />
        </div>
        <div className="portal-site-logo">
          <img src="/images/test1.jpg" alt="한국관광공사" />
        </div>
        <div className="portal-site-logo">
          <img src="/images/test1.jpg" alt="DAEGU FOOD" />
        </div>
        <div className="portal-site-logo">
          <img src="/images/test1.jpg" alt="THE GOOD NIGHT" />
        </div>
        <div className="portal-site-logo">
          <img src="/images/test1.jpg" alt="열린관광 모두의 여행" />
        </div>
      </div>
    </div>
  );
};

export default PortalSite;
