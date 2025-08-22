import { useEffect, useState } from "react";
import { searchBooks } from "../services/api/book";
import { useSearchParams } from "react-router-dom";
import OptionBox from "../components/optionBox";
import heart from "../assets/heart.png";
import heartFull from "../assets/heart-full.png";

const SearchPage = () => {
  const [searchBook, setSearchBook] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const fetchSearchBooks = async (keyword) => {
    const data = await searchBooks(keyword);
    if (data) setSearchBook(data);
  };

  useEffect(() => {
    if (!keyword) return;
    //const params = new URLSearchParams(window.location.search);
    //const keyword = params.get("keyword");
    fetchSearchBooks(keyword);
  }, [searchParams]);

  const heartChange = (e) => {
    console.log(e.target.src)
  }

  return (
    <div className="search-page relative w-full pt-[150px] flex justify-center">
      <div className="search-page-container w-4/5">
        {/* 상단 옵션 박스 */}
        <OptionBox />
        <div className="w-full h-[70px] flex pl-10 font-pretendard items-center border-b-2 border-gray-200">
            <p className="bg-blue-100 rounded-full p-5 max-h-[30px] flex justify-center items-center text-blue-700">{keyword}</p>
        </div>
        {/* 책 정보 */}
        <ul className="relative w-full mt-10 flex flex-col">
          <li className="w-full flex items-center">
            {/* 책 이미지 */}
            <div className="w-[150px] h-[200px] relative overflow-hidden bg-gray-500">
              {/* 책 없으면 이 로딩바 쓰기 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
              <img src={searchBook[0]?.thumbnail} alt="" className="w-full h-full cursor-pointer border-2 border-gray-400" />
            </div>
            {/* 책 소개 */}
            <ul className="relative h-full justify-center ml-5 flex flex-col gap-5">
              <li>제목</li>
              <li>콘텐츠</li>
              <li>작가</li>
              <li>날짜</li>
              <li>가격</li>
            </ul>
            <div className="absolute right-0 mr-8 flex flex-col gap-4">
              <div className="relavite translate-x-full mr-8 flex flex-col justify-center">
                <img src={heart} alt="하트 이미지" onClick={heartChange} className="w-[20px] cursor-pointer"/>
                <p className="relative w-[20px] text-center">0</p>
              </div>
              <button type="button" className="w-[130px] h-[50px] rounded-lg border-2 font-pretendard border-blue-400 text-blue-800 bg-gray-50">찜하기</button>
              <button type="button" className="w-[130px] h-[50px] rounded-lg bg-blue-500 font-pretendard text-white">판매 사이트</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
