/** 카카오 도서 API 가져오기 */
import axios from "axios";

/** 도서 정보 가져오기 */
const kakaoApi = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
  },
});

/** 도서 정보 검색 함수 */
export const searchBooks = async (search) => {
  try {
    let result = await kakaoApi.get("/v3/search/book", {
      params: { query: search, size: 1, target: "title" },
    });
    let searchData = result.data.documents;
    return searchData;
  } catch (error) {
    console.log(`검색한 도서 정보를 가져올 수 없습니다. ${error}`);
  }
};

/** 추천 도서 */
export const recommendBooks = async () => {
  try {
    let result = await kakaoApi.get("/v3/search/book", {
      params: { query: "베스트셀러", size: 1, target: "title" },
    });
    let recommendData = result.data.documents;
    return recommendData;
  } catch (error) {
    console.log(`추천 도서 정보를 가져올 수 없습니다. ${error}`);
  }
};

/** 슬라이드 도서 이미지 */
export const slideBookImg = async () => {
  try {
    let result = await kakaoApi.get("/v3/search/book", {
      params: { query: "소설", size: 9, target: "title" },
    });
    let recommendData = result.data.documents;
    let slideImgs = [...recommendData].map(data => {
        return data.thumbnail;
    });
    return slideImgs;
  } catch (error) {
    console.log(`슬라이드 도서 이미지를 가져올 수 없습니다. ${error}`);
  }
};
