import { create } from "zustand";
import { slideBookImg } from "../services/api/book";

/** 초기상태 */
const useBookStore = create(set => ({
    slideImgs: [],
    fetchSlideImg: async () => {
        try {
            const imgs = await slideBookImg();
            set({slideImgs: imgs})
        } catch(error) {
            console.error(`슬라이드 이미지 불러오기 실패 ( 스토어 오류 ) ${error}`);
        }
    }
}));

export default useBookStore;