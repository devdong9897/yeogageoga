import React, { useEffect, useState } from "react";
import "./SightseeingPage.css";
import styled from "styled-components";
import axios, { getAreaBasedList } from "../api/axios";

const SightseeingPage = () => {
  const [sightseeingData, setSightseeingData] = useState([]);
  const fetchSightseeingData = async () => {
    try {
      const response = await getAreaBasedList();
      console.log(response);
      setSightseeingData(response.response.body.items.item || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSightseeingData();
  }, []);
  return (
    <div>
      <Container>
        <h2>관광명소</h2>
      </Container>

      <SectionWrapper>
        {sightseeingData.map((item) => (
          <Card key={item.contentid}>
            <img src={item.firstimage} />
            <h2>{item.title}</h2>
          </Card>
        ))}
      </SectionWrapper>
    </div>
  );
};

export default SightseeingPage;

const Container = styled.div`
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

const SectionWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: calc(33.333% - 20px);
  height: 200px;
  margin: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  h2 {
    margin-top: 10px;
    font-size: 1rem;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
