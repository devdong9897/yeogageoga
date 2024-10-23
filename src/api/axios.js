import axios from "axios";

// 공통 api
const instance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1",
  params: {
    serviceKey:
      "SPUbtUxyevf6dsLqO481sAqKVHspQWiubo1W0602gYCWF/whMcpRGTYNmaWs6xJuOZIakorug+YLKqmrFP4UkQ==",
    MobileOS: "ETC",
    MobileApp: "TestApp",
    _type: "json",
  },
});

// 지역기반 관광정보 api
export const getAreaBasedList = async (
  pageNo = 1,
  numOfRows = 10,
  contentTypeId = 12
) => {
  try {
    const response = await instance.get("/areaBasedList1", {
      params: {
        areaCode: 4,
        contentTypeId,
        pageNo,
        numOfRows,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 관광 상세정보 api
export const getDetailCommon = async (contentId, contentTypeId) => {
  try {
    const response = await instance.get("/detailCommon1", {
      params: {
        contentId: contentId,
        contentTypeId,
        defaultYN: "Y", // 기본 정보 조회 여부
        firstImageYN: "Y", // 이미지 정보 조회 여부
        areacodeYN: "Y", // 지역 코드 조회 여부
        catcodeYN: "Y", // 분류 코드 조회 여부
        addrinfoYN: "Y", // 주소 정보 조회 여부
        mapinfoYN: "Y", // 좌표 정보 조회 여부
        overviewYN: "Y", // 개요 정보 조회 여부 (관광명소 설명)
      },
    });
    console.log("ggg", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default instance;
