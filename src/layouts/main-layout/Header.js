// 헤더
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  /** 사이드 메뉴 오픈 상태 */
  const [open, setOpen] = useState(false);

  /** 버거 메뉴 엔터시 함수 */
  const bergerEnter = (e) => {
    if (e.key === "Enter") {
      setOpen(!open);
    }
  };

  return (
    <header className="w-full h-20 border-b border-black-600 relative flex items-center">
      {/* 로고 */}
      <div className="logo w-36 flex items-center cursor-pointer fixed">
        <img src={logo} alt="로고 이미지" className="w-20" />
        <p className="text-3xl font-bold text-gray-700 ">북픽</p>
      </div>
      {/* 검색창 */}
      <div className="search w-2/3 relative ml-56 border-2 border-black border-opacity-50 rounded flex max-lg:ml-40">
        <input
          type="text"
          placeholder="책 제목 또는 저자를 입력하세요."
          className="w-5/6 h-10 bg-transparent px-5 focus:outline-none"
        ></input>
        <button
          type="button"
          className="w-[64.5px] h-10 absolute right-0 border-l-2 border-gray-300 bg-white"
        >
          검색
        </button>
      </div>
      {/* 메뉴 */}
      <div className="menu w-[300px] h-full relative ml-5 flex items-center text-l font-bold text-gray-600 max-lg:hidden">
        <button type="button" className="w-[80px] h-10 mx-2">
          커뮤니티
        </button>
        <button type="button" className="w-[80px] h-10 mx-2 font-sans">
          회원가입
        </button>
        <button type="button" className="w-[80px] h-10 mx-2">
          로그인
        </button>
      </div>
      {/* 버거 메뉴 */}
      <ul
        tabindex="0"
        className="berger_menu w-[40px] h-1/2 ml-5 flex flex-col justify-center gap-2 cursor-pointer hidden max-lg:flex"
        onClick={() => setOpen(!open)}
        onKeyDown={bergerEnter}
      >
        <li
          className={`relative w-full h-[4px] bg-black rounded-lg transition-all duration-300 ${
            open ? "rotate-45 translate-y-3" : ""
          }`}
        ></li>
        <li
          className={`relative w-full h-[4px] bg-black rounded-lg transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></li>
        <li
          className={`relative w-full h-[4px] bg-black rounded-lg transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-3" : ""
          }`}
        ></li>
      </ul>
    </header>
  );
};

export default Header;
