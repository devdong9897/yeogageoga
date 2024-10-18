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

export const getAreaBasedList = async () => {
  try {
    const response = await instance.get("/areaBasedList1", {
      params: {
        areaCode: 4,
        contentTypeId: 12,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getAreaBasedList();

export default instance;
