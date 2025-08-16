import { create } from "zustand";
import { recommendBooks, slideBookImg } from "../services/api/book";

/** 초기상태 */
 export const useSlideImg = create(set => ({
    slideImgs: [],
    /** 슬라이드 이미지 */
    fetchSlideImg: async () => {
        try {
            const imgs = await slideBookImg();
            set({slideImgs: imgs})
        } catch(error) {
            console.error(`슬라이드 이미지 불러오기 실패 ( 스토어 오류 ) ${error}`);
        }
    }
}));

 export const useRecommendBooks = create(set => ({
    recommendBooks: [],
    /** 추천 슬라이드 이미지 */
    fetchRecommend: async () => {
        try {
            const recommends = await recommendBooks();
            set({recommendBooks: recommends})
        } catch(error) {
            console.error(`추천 불러오기 실패 ( 스토어 오류 ) ${error}`);
        }
    }
}));