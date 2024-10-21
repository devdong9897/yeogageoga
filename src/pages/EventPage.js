import React, { useEffect, useState } from "react";
import { getAreaBasedList } from "../api/axios";
import styled from "styled-components";

const Event = () => {
  const [festivalData, setFestivalData] = useState([]);

  useEffect(() => {
    getFestivalEvent();
  }, []);

  const getFestivalEvent = async () => {
    const data = await getAreaBasedList(1, 10, 15);
    console.log("행사", data.response.body.items.item);
    setFestivalData(data.response.body.items.item);
  };
  return (
    <div>
      <Wrapper>
        <h2>행사/축제test</h2>
      </Wrapper>
      {festivalData.map((festival) => (
        <Container key={festival.contentid}>
          <ImageWrapper>
            <img src={festival.firstimage} alt={festival.title} />
          </ImageWrapper>
          <Contents>
            <h2>{festival.title}</h2>
            <p>위치: </p>
            <p>장소: </p>
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
  width: 80%;
  margin: 20px auto;
  border: 1px solid black;
`;

const ImageWrapper = styled.div`
  margin: 15px;
  img {
    width: 350px;
    height: auto;
    object-fit: cover;
  }
`;

const Contents = styled.div`
  margin: 15px 20px;
`;
