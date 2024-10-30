import React from "react";

const Footer = () => {
  // 헤더도 따로 css를 만들지 않아 여기에 작성 했습니다.
  return (
    <div style={footerContainerStyle}>
      <p style={footerTextStyle}>회사소개 이용약관 개인정보처리방침 고객센터</p>
    </div>
  );
};

const footerContainerStyle = {
  backgroundColor: "#e0e0e0",
  padding: "40px 310px",
};

const footerTextStyle = {
  color: "#333",
  fontSize: "18px",
  letterSpacing: "0.5px",
  margin: "0",
};

export default Footer;
