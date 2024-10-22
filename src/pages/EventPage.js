import React, { useEffect, useState } from "react";
import { getAreaBasedList, getDetailCommon } from "../api/axios";
import styled from "styled-components";
import "./EventPage.css";

const Event = () => {
  const [festivalData, setFestivalData] = useState([]);
  const [festivalDetail, setFestivalDetail] = useState([]);

  useEffect(() => {
    getFestivalEvent();

    getDetailFestival();
  }, []);

  const getFestivalEvent = async () => {
    const data = await getAreaBasedList(1, 10, 15);
    console.log("행사", data.response.body.items.item);
    setFestivalData(data.response.body.items.item);
  };

  const getDetailFestival = async (festival) => {
    const data = await getDetailCommon(festival);
    console.log("디테일", data);
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

  .location {
    background: green;
    color: #fff;
  }
`;
