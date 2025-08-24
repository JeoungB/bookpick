import { useEffect, useState } from "react";
import { searchBooks } from "../services/api/book";
import { useSearchParams } from "react-router-dom";
import OptionBox from "../components/optionBox";
import SearchBook from "../components/SearchBook";

const SearchPage = () => {
  const [searchBook, setSearchBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수.

  const fetchSearchBooks = async (keyword) => {
    const data = await searchBooks(keyword);
    if (data) setSearchBook(data);
  };

  useEffect(() => {
    if (!keyword) return;
    //const params = new URLSearchParams(window.location.search);
    //const keyword = params.get("keyword");
    fetchSearchBooks(keyword);
    setCurrentPage(1)
  }, [searchParams]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchBook?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(searchBook.length / itemsPerPage); // 페이지 번호.
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const numberPageNation = (e) => {
    setCurrentPage(e.target.innerText);
    window.scrollTo({top : 0});
  };

  const btnPageNation = (e) => {
    const btn = e.target.className;
    if(btn === "prev" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({top : 0});
    }

    if(btn === "next" && currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({top : 0});
    }
  }

  return (
    <div className="search-page relative w-full pt-[150px] flex justify-center">
      <div className="search-page-container w-4/5">
        {/* 상단 옵션 박스 */}
        <OptionBox value={searchBook?.length} />
        <div className="w-full h-[70px] flex pl-10 font-pretendard items-center border-b-2 border-gray-200">
            <p className="bg-blue-100 rounded-full p-5 max-h-[30px] flex justify-center items-center text-blue-700">{keyword}</p>
        </div>
        {/* 책 정보 */}
        <ul className="relative w-full mt-10 flex flex-col">
          {searchBook.length > 0 ? (
          currentItems?.map((book, index) => (
            <SearchBook key={index} book={book} />
          ))
          ) : (
            Array.from({length : itemsPerPage}).map((_, i) => (
      <li key={i} className="w-full flex items-center mb-10">
      <div className="w-[150px] h-[200px] flex-shrink-0 relative overflow-hidden bg-gray-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>
      <ul className="relative w-full h-full justify-center ml-5 flex flex-col gap-5">
        <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div></li>
        <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div></li>
        <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div></li>
        <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div></li>
        <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div></li>
      </ul>
    </li>
            ))
          )}
        </ul>
        {/* 페이지 네이션 */}
        <div className="page_nation flex justify-center gap-10 w-full">
          <button className="prev" onClick={btnPageNation}>&lt;</button>
        {pageNumbers.map((num, index) => (
          <button key={index} onClick={numberPageNation} className={`relative font-pretendard ${currentPage == index + 1 ? "text-white bg-blue-400 w-[23px] h-[23px] rounded-full" : "text-gray-500"}`}>{num}</button>
        ))}
        <button className="next" onClick={btnPageNation}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
