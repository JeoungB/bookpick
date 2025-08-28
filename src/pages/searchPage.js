import { useEffect, useState, useMemo } from "react";
import { searchBooks } from "../services/api/book";
import { useSearchParams } from "react-router-dom";
import OptionBox from "../components/optionBox";
import SearchBook from "../components/SearchBook";
import LodingBookList from "../components/LoingBookList";
import PageNation from "../components/PageNation";
import NoFindeSearch from "../components/NoFindeSearch";
import { useSearchBookResultStore } from "../store/bookStore";

const SearchPage = () => {
  const { searchBookResult, setBookResult } = useSearchBookResultStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [option, setOption] = useState("이름순");
  const [loding, setLoding] = useState(true);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수.

  const fetchSearchBooks = async (keyword) => {
    const data = await searchBooks(keyword);
    if (data) setBookResult(data);
  };

  useEffect(() => {
    if (!keyword) return;
    //const params = new URLSearchParams(window.location.search);
    //const keyword = params.get("keyword");
    fetchSearchBooks(keyword);
    setCurrentPage(1);
  }, [searchParams]);

  useEffect(() => {
    if(searchBookResult) return;
    const time = setTimeout(() => setLoding(false), 10000);

    return () => clearTimeout(time);
  }, [searchBookResult]);

/** 옵션 선택시 배열 재배치 useMemo로 최적화 ( 렌더링 중 작업 )*/
const currentItems = useMemo(() => {
  if (!searchBookResult) return [];

  let newData = [...searchBookResult];

  if (option === "이름순") {
    newData.sort((a, b) => {
      const indexA = a.title.indexOf(keyword);
      const indexB = b.title.indexOf(keyword);
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  }

  if (option === "가격순") {
    newData.sort((a, b) => a.price - b.price);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return newData.slice(indexOfFirstItem, indexOfLastItem);
}, [searchBookResult, option, currentPage, keyword]);

  const totalPages = Math.ceil(searchBookResult.length / itemsPerPage); // 페이지 번호.
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="search-page relative w-full pt-[150px] flex justify-center">
      <div className="search-page-container w-4/5">
        {/* 상단 옵션 박스 */}
        <OptionBox
          value={searchBookResult?.length}
          option={option}
          setOption={setOption}
        />
        {/* 검색 결과 */}
        <div className="w-full h-[70px] flex pl-10 font-pretendard items-center border-b-2 border-gray-200 max-md:pl-1 max-sm:pl-1">
          <p className="bg-blue-100 rounded-full p-5 max-h-[30px] flex justify-center items-center text-blue-700">
            {keyword}
          </p>
        </div>
        {/* 책 정보 */}
        <ul className="relative w-full mt-10 flex flex-col overflow-x-hidden">
          {searchBookResult.length > 0
            ? currentItems?.map((book, index) => (
                <SearchBook key={index} book={book} />
              ))
            : loding ? Array.from({ length: itemsPerPage }).map((_, i) => (
                <LodingBookList key={i} />
              )) : 
              <NoFindeSearch />}
        </ul>
        {/* 페이지 네이션 */}
        {loding ? <PageNation currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} /> : null}
      </div>
    </div>
  );
};

export default SearchPage;
