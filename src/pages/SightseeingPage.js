import React, { useEffect, useState } from "react";
import "./SightseeingPage.css";
import styled from "styled-components";
import { getAreaBasedList } from "../api/axios";
import SightseeingPageModal from "../Modal";

const SightseeingPage = () => {
  const [sightseeingData, setSightseeingData] = useState([]);
  // 현재 페이지
  const [pageNo, setPageNo] = useState(1);
  // 데이터 로딩
  const [isLoading, setIsLoading] = useState(false);
  // 더 불러올 데이터 있는지 여부
  const [hasMore, setHasMore] = useState(true);

  // 클릭된 한개의 상세 관광정보
  const [sightseeingSelected, setSightseeingSelected] = useState(null);
  // 모달
  const [modalOpen, setModalOpen] = useState(false);

  const fetchSightseeingData = async () => {
    // 더 불러올 데이터가 없거나 로딩중이면 중단.
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    const response = await getAreaBasedList(pageNo, 10);
    const newData = response.response.body.items.item || [];
    console.log(response);
    // 이전데이터와 새로운 데이터 합치기.
    setSightseeingData((prev) => [...prev, ...newData]);
    setIsLoading(false);

    if (newData.length === 0 || newData.length < 10) {
      setHasMore(false);
    }
  };

  // 스크롤 이벤트
  const handleScroll = () => {
    if (
      // 현재 창의 높이   +  현재 얼마나 스크롤 했는지...
      window.innerHeight + window.scrollY >=
        // 사용자가 화면을 끝까지 내렸을 때 조건이 true가 됨.
        document.documentElement.scrollHeight - 1 &&
      // 데이터를 가져오는 중(isFetching이 true)이면 다시 데이터를 요청하지 않도록 체크,
      // 만약 이미 데이터를 가져오는 중이면 한번 더 요청하지 않게 하기위해서...
      !isLoading
    ) {
      // 스크롤이 끝에 도달하면, 페이지 번호를 1 증가
      setPageNo((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchSightseeingData();
  }, [pageNo]);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (item) => {
    setSightseeingSelected(item);
    setModalOpen(true);
  };

  return (
    <div>
      <Container>
        <h2>관광명소</h2>
      </Container>
      <SectionWrapper>
        {sightseeingData.map((item) => (
          <Card key={item.contentid} onClick={() => handleClick(item)}>
            <img src={item.firstimage} />
            <h2>{item.title}</h2>
          </Card>
        ))}
      </SectionWrapper>
      {isLoading && <p className="new-data">새로운 데이터 불러오는중...</p>}
      {!hasMore && <p className="no-data">대구 관광정보가 없습니다.</p>}

      {modalOpen && (
        <SightseeingPageModal
          sightseeingSelected={sightseeingSelected}
          setModalOpen={setModalOpen}
        />
      )}
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
  margin: 50px auto;
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
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
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
