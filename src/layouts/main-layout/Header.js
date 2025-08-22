// 헤더
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";

const Header = () => {
  return (
    <header className="w-full h-[100px] left-0 border-b border-black-600 bg-white z-[3] fixed flex items-center justify-between">
      {/* 로고 */}
      <Logo />
      {/* 검색창 */}
      <SearchBar />
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
