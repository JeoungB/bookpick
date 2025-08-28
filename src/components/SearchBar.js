import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/search-icon.png";

const SearchBar = () => {
  const searchRef = useRef(null);
  const [hasText, setHasText] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    let searchValue = searchRef.current.value;
    if (!searchValue) return;
    navigate(`/search?keyword=${searchValue}`);
  };

  const resetText = () => {
    searchRef.current.value = "";
    setHasText("");
  }

  const hasTextHandler = () => {
    setHasText(searchRef.current.value);
  };

  return (
    <>
    <form
      onSubmit={searchHandler}
      className="search-bar w-full relative ml-56 border-2 border-black border-opacity-50 rounded flex items-center max-lg:ml-44 max-md:w-3/5 max-md:ml-[180px] max-md:min-w-[290px] search-bar:hidden"
    >
      <input
        ref={searchRef}
        onChange={hasTextHandler}
        type="text"
        placeholder="책 제목 또는 저자를 입력"
        className="w-5/6 h-10 bg-transparent px-5 focus:outline-none"
      ></input>
      {hasText ? (
        <button type="button" onClick={resetText} className="rounded-full absolute right-[80px] w-[35px] h-[35px] text-[1.2rem] hover:bg-gray-100">X</button>
      ) : null}
      <button
        type="submit"
        className="w-[64.5px] h-10 font-pretendard font-semibold absolute right-0 border-l-2 border-gray-300 bg-white"
      >
        검색
      </button>
    </form>
    <img rel="button" tabIndex={0} src={searchIcon} alt="검색 아이콘" className="absolute hidden search-bar:flex w-[30px] right-[100px] cursor-pointer" />
    </>
  );
};

export default SearchBar;
