import React, { useEffect, useState } from "react";
import { getAreaBasedList, getDetailCommon } from "../api/axios";
import styled from "styled-components";
import "./EventPage.css";

const Event = () => {
  const [festivalData, setFestivalData] = useState([]);

  useEffect(() => {
    getFestivalEvent();
  }, []);

  // 축제 행사목록
  const getFestivalEvent = async () => {
    const response = await getAreaBasedList(1, 10, 15);
    const festivals = response.response.body.items.item;
    console.log("행사", festivals);

    const updatedFestivals = [];
    for (const festival of festivals) {
      const overview = await getFestivalDetail(festival.contentid);
      updatedFestivals.push({ ...festival, overview });
    }
    setFestivalData(updatedFestivals);
  };

  // 축제 상세정보
  const getFestivalDetail = async (contentid) => {
    try {
      const response = await getDetailCommon(contentid);
      console.log("여기 행사 상세 정보", response);

      return (
        response.response.body.items.item[0].overview || "상세 설명이 없습니다."
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Wrapper>
        <h2>행사/축제</h2>
      </Wrapper>
      {festivalData.map((festival) => (
        <Container key={festival.contentid}>
          <ImageWrapper>
            <img src={festival.firstimage} alt={festival.title} />
          </ImageWrapper>
          <Contents>
            <h2>{festival.title}</h2>

            <p>
              <span className="location">주소</span> {festival.addr1}
            </p>

            <p>
              <span className="phone">전화번호</span> {festival.tel}
            </p>

            <p>
              <span className="description">설명</span>
              <br /> {festival.overview}
            </p>
          </Contents>
        </Container>
      ))}
    </div>
  );
};

export default Event;

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://www.dgtourpass.com/data/file/shop_mobile/3661025583_daqTAPy4_48026ca56403f10ba4f0206522a7c6c612e799ba.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    margin: 0;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    line-height: 150px;
  }
`;

const Container = styled.section`
  display: flex;
  width: 60%;
  margin: 20px auto;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
`;

const ImageWrapper = styled.div`
  margin: 15px;
  img {
    width: 350px;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const Contents = styled.div`
  margin: 15px 20px;
`;
