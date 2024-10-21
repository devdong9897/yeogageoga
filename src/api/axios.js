import axios from "axios";

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

export const getAreaBasedList = async (pageNo = 1, numOfRows = 10) => {
  try {
    const response = await instance.get("/areaBasedList1", {
      params: {
        areaCode: 4,
        contentTypeId: 12,
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
export const getDetailIntro = async (contentId) => {
  try {
    const response = await instance.get("/detailIntro1", {
      params: {
        contentId,
        contentTypeId: 12,
      },
    });
    console.log("ggg", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default instance;
