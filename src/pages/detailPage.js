import { useEffect, useState } from "react";
import { useAlertStore, useDetailBookStore } from "../store/bookStore";
import { searchBooks } from "../services/api/book";
import heartNull from "../assets/heart.png";

const DetailPage = () => {
    const { detailBook } = useDetailBookStore();
    const date = new Date(detailBook.datetime);
    const formatted = date.toISOString().split("T")[0];
    const text = detailBook.contents;
    // "마침표 단위"로 분리해서 배열로 전환 match : 정규식 기준 패턴에 맞는 것. split : 기준점을 정해 반환.
    const sentences = text.match(/[^.]+[.]/g);
    const [relatedBook, setRelatedBook] = useState();
    const key = detailBook?.title.match(/^[^( &+]+/)[0];
    const { alert, openAlert } = useAlertStore();

    /** 관련 도서 리스트 가져오는 함수. */
    const relatedBooks = async () => {
        const relatedData = await searchBooks(key);
        setRelatedBook(relatedData);
    };

    const openAlertHandler = (url) => {
    if(alert === true) return;
    openAlert({msg:"판매 사이트로 이동합니다", url: url})
    };

    useEffect(() => {
        relatedBooks();
    }, [detailBook]);

    const num = Math.floor(Math.random() * (relatedBook?.length - 5)) + 1;
    console.log(num)
    
    return(
        <div>
            {/* 도서 정보 */}
            <section className="relative pt-[150px] w-full flex flex-col items-center font-pretendard">
                <h1 className="text-[1.5rem] font-bold text-gray-600 max-sm:text-[1.3rem]">{detailBook.title}</h1>
                <div className="img w-[200px] mt-[50px] shadow-lg shadow-gray-600 bg-red-600">
                    <img src={detailBook.thumbnail} alt="" className="w-full"/>
                </div>
                {/* 도서 설명 */}
                <div className="content flex flex-col mt-6 w-full">
                    <p className="relative flex justify-center gap-2 text-gray-700">{detailBook.authors[0]} <span className="text-gray-400">|</span> {detailBook.publisher} <span className="text-gray-400">|</span> {formatted}</p>
                    <h2 className="pl-[50px] pt-[50px] text-[1.5rem] font-semibold max-sm:pl-[20px]">책소개</h2>
                    {sentences.map((sentences, index) => (
                        <p key={index} className="pl-[50px] pt-[20px] pr-[50px] whitespace-pre-line max-sm:pl-[20px]">{sentences}</p>
                    ))}
                </div>
            </section>
            {/* 관련 도서 */}
            <section className="relative w-full mt-[100px] font-pretendard">
                <h2 className="pl-[50px] text-[1.4rem] justify-around font-semibold max-sm:pl-[20px]"><span className="text-blue-600">{key}</span> 관련 도서</h2>
                {relatedBook && relatedBook.length > 0 ? (
                    <ul className="flex justify-center max-w-[1000px] pl-[50px] pr-[50px] mt-[30px] mx-[45px] gap-9 bg-gray-100 rounded-xl py-8 max-md:flex-wrap max-md:justify-center max-sm:flex-wrap max-sm:gap-3 max-sm:ml-[20px] max-sm:min-w-[90%]">
                    {relatedBook.slice(num, num + 5).map((book, index) => (
                        <li key={index} className="shadow-md shadow-gray-400 max-sm:w-[40%]" >
                            <img src={book.thumbnail} alt="책 이미지" className="w-full cursor-pointer max-sm:w-[100%]" />
                        </li>
                    ))}
                    </ul>
                ) : <p className="w-full h-[300px]">정보 가져오는 중...</p>}
            </section>
            {/* 추가 정보 */}
            <section className="fixed flex items-center justify-between px-20 w-full h-[80px] bottom-0 font-pretendard bg-white border-t-[3px] detail-bar:px-6">
                <p><span className="max-sm:hidden">도서 가격</span><span className="ml-[10px] text-[1.3rem]">{detailBook.price}원</span></p>
                <div className="flex items-center gap-5">
                <button type="button" className="w-[50px] h-[50px] border-[2px] flex justify-center items-center rounded-lg border-gray-400"><img className="w-[30px]" src={heartNull} alt="" /></button>
                <button type="button" className="w-[130px] h-[50px] rounded-lg bg-blue-500 text-white" onClick={() => openAlertHandler(detailBook.url)}>
                판매 사이트
                </button>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;