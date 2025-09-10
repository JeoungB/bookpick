// 헤더
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";

const Header = ({mSearch, setMSearch}) => {

  return (
    <header className="w-full h-[100px] left-0 border-b border-black-600 bg-white z-[3] fixed flex items-center justify-between shadow-md">
      {/* 로고 */}
      <Logo mSearch={mSearch}/>
      {/* 검색창 */}
      <SearchBar mSearch={mSearch} setMSearch={setMSearch}/>
      {/* 메뉴 */}
      <div className="menu w-[300px] h-full relative ml-5 flex items-center text-l font-bold text-gray-600 max-md:hidden max-sm:hidden">
        <button type="button" className="w-[80px] h-10 mx-2 font-pretendard">
          커뮤니티
        </button>
        <button type="button" className="w-[80px] h-10 mx-2 font-pretendard">
          회원가입
        </button>
        <button type="button" className="w-[80px] h-10 mx-2 font-pretendard">
          로그인 
        </button>
      </div>
    </header>
  );
};

export default Header;
