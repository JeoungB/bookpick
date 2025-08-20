import { useEffect, useState } from "react";
import { searchBooks } from "../services/api/book";
import { useSearchParams } from "react-router-dom";
import OptionBox from "../components/optionBox";

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

  console.log(searchBook);

  return (
    <div className="search-page relative w-full h-[300px] pt-[150px] flex justify-center">
      <div className="search-page-container w-[1000px]">
        {/* 상단 옵션 박스 */}
        <OptionBox />
        <div className="w-full h-[70px] flex pl-10 font-pretendard items-center border-b-2 border-gray-200">
            <p className="bg-blue-100 rounded-full p-5 max-h-[30px] flex justify-center items-center text-blue-700">{keyword}</p>
        </div>
        {/* 책 정보 */}
        <ul className="w-full mt-10 bg-red-900 flex flex-col">
          <li className="w-full h-[200px] bg-slate-200">책 정보</li>
          <li>책 정보</li>
          <li>책 정보</li>
          <li>책 정보</li>
          <li>책 정보</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
