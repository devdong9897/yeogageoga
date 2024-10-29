import React from "react";
import "../pages/MainPage.css";

const PortalSite = () => {
  return (
    <div className="portal-site">
      <h2 className="portal-site-title">아름다운 도시 대구를 만나보세요</h2>
      <div className="portal-site-logos">
        <div className="portal-site-logo">
          <a
            href="https://info.daegu.go.kr/newshome/mtnmain.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/portal1.png" alt="대구광역시 뉴스룸" />
          </a>
        </div>
        <div className="portal-site-logo">
          <a
            href="https://www.daegu.go.kr/index.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/portal2.png" alt="대구 광역시" />
          </a>
        </div>
        <div className="portal-site-logo">
          <a
            href="https://knto.or.kr/index"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/portal3.png" alt="한국관광공사" />
          </a>
        </div>
        <div className="portal-site-logo">
          <a
            href="https://www.daegufood.go.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/portal4.png" alt="DAEGU FOOD" />
          </a>
        </div>
        <div className="portal-site-logo">
          <a
            href="https://thegoodnight.daegu.go.kr/kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/portal5.jpg" alt="THE GOOD NIGHT" />
          </a>
        </div>
        <div className="portal-site-logo">
          <a
            href="https://access.visitkorea.or.kr/main/main.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/portal6.jpg" alt="열린관광 모두의 여행" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortalSite;
