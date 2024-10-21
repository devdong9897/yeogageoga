import React from "react";
import "./SightseeingPageModal.css";
import Map from "../components/Map";

const SightseeingPageModal = ({ sightseeingSelected, setModalOpen }) => {
  const expGuide = sightseeingSelected.expguide;

  // 지도 경도, 위도표시
  const latitude = sightseeingSelected.mapy;
  const longitude = sightseeingSelected.mapx;

  const formattedExpGuide =
    expGuide && expGuide.trim() !== ""
      ? expGuide.replace(/<br\s*\/?>/gi, "\n")
      : "명소에 대한 설명이 없습니다.";

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={() => setModalOpen(false)}>X</button>
        <h2>{sightseeingSelected.title}</h2>
        <img
          src={sightseeingSelected.firstimage}
          alt={sightseeingSelected.title}
        />
        <p>주소: {sightseeingSelected.addr1}</p>
        <p>전화번호: {sightseeingSelected.infocenter || "정보에 없음"}</p>
        <div className="modal-border"></div>
        <div>
          <p>{formattedExpGuide}</p>
        </div>

        <div className="map">
          <h2>지도</h2>
          <Map
            latitude={latitude}
            longitude={longitude}
            title={sightseeingSelected.title}
          />
        </div>
      </div>
    </div>
  );
};

export default SightseeingPageModal;
