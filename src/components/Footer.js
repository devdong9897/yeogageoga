import React from "react";

const Footer = () => {
  return (
    <div style={footerStyle}>
      <p style={footerTextStyle}>회사소개 이용약관 개인정보처리방침 고객센터</p>
    </div>
  );
};

const footerStyle = {
  backgroundColor: "#e0e0e0",
  padding: "40px 300px",
};

const footerTextStyle = {
  color: "#333",
  fontSize: "18px",
  letterSpacing: "0.5px",
  margin: "0",
  textAlign: "center",
};

export default Footer;
