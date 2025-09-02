import { create } from "zustand";
import { recommendBooks, slideBookImg } from "../services/api/book";
import { persist } from "zustand/middleware";

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

/** 알림창 상태 */
export const useAlertStore = create(set =>({
    alert : false,
    message: "",
    bookUrl: "",
    openAlert: ({msg, url}) => set({alert : true, message: msg, bookUrl: url}),
    closeAlert: () => set({alert : false, message : "", bookUrl: ""})
}));

/** 도서 검색 결과 */
export const useSearchBookResultStore = create(set => ({
    searchBookResult:[],
    setBookResult: (searchBook) => set({searchBookResult : searchBook}),
}));

/** 도서 자세히 보기 */
// 새로고침 시 초기화 방지를 위해 persist 사용.
export const useDetailBookStore = create(persist(
    (set) => ({
    detailBook: {},
    setDetailBook: (clickBook) => set({detailBook : clickBook}),
    }),
    {
        name: "detail-book-storage",
        getStorage: ()=> sessionStorage,
    }
));



// zustand 는 전역상태관리라서 슬라이드 이미지는 그냥 함수 바로호출해서 사용해도 무방.
// 많은 컴포넌트에서 전역으로 데이터를 공유할 때 사용 ( 로그인 같은 경우 )