import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    let searchValue = searchRef.current.value;
    if (!searchValue) return;
    navigate(`/search?keyword=${searchValue}`);
  };

  return (
    <form
      onSubmit={searchHandler}
      className="search-bar w-full relative ml-56 border-2 border-black border-opacity-50 rounded flex max-lg:ml-44 max-md:w-3/5 max-md:ml-[180px] max-md:min-w-[290px] search-bar:hidden"
    >
      <input
        ref={searchRef}
        type="text"
        placeholder="책 제목 또는 저자를 입력"
        className="w-5/6 h-10 bg-transparent px-5 focus:outline-none"
      ></input>
      <button
        type="submit"
        className="w-[64.5px] h-10 font-pretendard font-semibold absolute right-0 border-l-2 border-gray-300 bg-white"
      >
        검색
      </button>
    </form>
  );
};

export default SearchBar;
