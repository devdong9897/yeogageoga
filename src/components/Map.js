import React, { useEffect, useRef } from "react";

const { kakao } = window;

const Map = ({ latitude, longitude, title }) => {
  console.log("map", latitude, longitude, title);
  useEffect(() => {
    const staticMapContainer = document.getElementById("staticMap"), // 이미지 지도를 표시할 div
      staticMapOption = {
        center: new kakao.maps.LatLng(latitude, longitude), // 이미지 지도의 중심좌표
        level: 3, // 이미지 지도의 확대 레벨
        marker: [
          {
            position: new kakao.maps.LatLng(latitude, longitude),
            text: title,
          },
        ], // 이미지 지도에 표시할 마커
      };

    // 이미지 지도를 생성합니다
    const staticMap = new kakao.maps.StaticMap(
      staticMapContainer,
      staticMapOption
    );
  }, []);
  return (
    <div
      id="staticMap"
      style={{ width: "100%", height: "400px", backgroundColor: "#f5f5f5" }}
    ></div>
  );
};

export default Map;
