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
  justify-content: flex-start;
`;

const Card = styled.div`
  width: calc(33.33% - 30px);
  margin: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h2 {
    margin: 10px 0;
    font-size: 1rem;
    text-align: center;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
