import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/search-icon.png";
import arrow from "../assets/arrow-icon.png";

const SearchBar = ({mSearch, setMSearch}) => {
  const searchRef = useRef(null);
  const [hasText, setHasText] = useState("");
  const [searchRecordBox, setSearchRecordBox] = useState(false);
  const recordBoxRef = useRef(null);
  const navigate = useNavigate();
  let recordDatas = JSON.parse(sessionStorage.getItem("search-data"));
  const [useRecordData, setUseRecordData] = useState(recordDatas || []);

  const searchHandler = (e) => {
    e.preventDefault();
    let searchValue = searchRef.current.value;
    if (!searchValue) return;
    setSearchRecordBox(false)
    navigate(`/search?keyword=${searchValue}`);
    // 검색어 저장.
    let searchValueArray = [];
    if(!useRecordData || useRecordData.length === 0) {
    setUseRecordData([...useRecordData, searchValue]);
    searchValueArray.push(searchValue);
    sessionStorage.setItem("search-data", JSON.stringify(searchValueArray));
    }

    if(useRecordData && useRecordData.length > 0) {
      // 같은 단어면 return
      if(useRecordData.indexOf(searchValue) !== -1) return;
      setUseRecordData([...useRecordData, searchValue]);
      recordDatas.push(searchValue);
      sessionStorage.setItem("search-data", JSON.stringify(recordDatas));
    }
  };

  const resetText = () => {
    searchRef.current.value = "";
    setHasText("");
  }

  const hasTextHandler = () => {
    setHasText(searchRef.current.value);
  };

  /** 검색기록 창 열기 */
  const recordBoxHandler = () => {
    setSearchRecordBox(true);
  };

  /** 검색기록 창 닫기 */
  const recordBoxClose = (e) => {
    if(recordBoxRef.current && !recordBoxRef.current.contains(e.target)) {
      setSearchRecordBox(false);
    }
  };

  /** 검색 기록 삭제 */
  const recordDelete = (index) => {
    const newRecordData = useRecordData.filter((_, i) => i !== index);
    setUseRecordData(newRecordData);
    sessionStorage.setItem("search-data", JSON.stringify(newRecordData));
  };

  useEffect(() => {
    if(searchRecordBox === false) return;
    document.addEventListener("click", recordBoxClose, true);

    return()=> document.removeEventListener('click', recordBoxClose, true);
  }, [searchRecordBox]);

  return (
    <>
    <div className={`search-bar w-full h-[46px] relative ml-56 flex flex-col items-center max-lg:ml-44 max-md:w-3/5 max-md:ml-[180px] max-md:min-w-[290px] ${mSearch ? "search-bar:flex search-bar:ml-[65px] search-bar:w-[80%]" : "search-bar:hidden"}`}>
    <form
      onSubmit={searchHandler}
      className="w-full h-full border-[3px] flex items-center justify-between border-gray-500 rounded"
    >
      <input
        ref={searchRef}
        onChange={hasTextHandler}
        onClick={recordBoxHandler}
        type="text"
        placeholder="책 제목 또는 저자를 입력"
        className="w-5/6 relative h-10 bg-transparent px-5 focus:outline-none"
      ></input>
      <div className="w-[100px] h-full flex items-center relative">
      {hasText ? (
        <button type="button" onClick={resetText} className="rounded-full relative w-[35px] h-[35px] text-[1.2rem] hover:bg-gray-100">X</button>
      ) : null}
      <button
        type="submit"
        className="w-[55px] h-full font-pretendard font-semibold absolute right-0"
      >
        검색
      </button>
      </div>
    </form>
    {/* 검색 기록 */}
    {useRecordData && useRecordData.length > 0 && searchRecordBox ? <div ref={recordBoxRef} className="search-data absolute font-pretendard pl-5 pr-4 pt-4 shadow-xl w-full border-[1px] top-full border-gray-300 rounded bg-white">
      <button className="text-[.8rem] absolute right-4 text-right text-blue-600 cursor-pointer">기록 지우기</button>
      <ul className="mt-6">
        {useRecordData.slice(0, 5).map((item, index) => (
        <li key={index} className="w-full h-[35px] leading-[35px] flex justify-between pr-4 rounded mb-3">
          <p tabIndex={0} role="button" className="w-full cursor-pointer rounded mr-4 text-gray-600 hover:bg-slate-300">{item}</p>
          <p className="cursor-pointer" onClick={() => recordDelete(index)}>X</p>
        </li>
        ))}
      </ul>
    </div> : null}
    </div>
    <div className={`absolute -left-4 text-[2rem] cursor-pointer w-[100px] rotate-180 ${mSearch ? "flex" : "hidden"}`} onClick={() => setMSearch(false)}>
      <img src={arrow} alt="" />
    </div>
    <img rel="button" tabIndex={0} src={searchIcon} onClick={() => setMSearch(true)} alt="검색 아이콘" className={`absolute hidden w-[30px] right-[100px] cursor-pointer ${mSearch ? "search-bar:hidden" : "search-bar:flex"}`} />
    </>
  );
};

export default SearchBar;
