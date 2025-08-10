// 헤더
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full h-20 left-0 border-b border-black-600 fixed flex items-center">
      {/* 로고 */}
      <h1 className="logo w-36 ml-6 flex items-center cursor-pointer fixed max-lg:ml-0">
        <img src={logo} alt="로고 이미지" className="w-20" />
        <p className="text-3xl font-bold text-blue-600 ">북픽</p>
      </h1>
      {/* 검색창 */}
      <div className="search w-2/3 relative ml-56 border-2 border-black border-opacity-50 rounded flex max-lg:ml-44">
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
    </header>
  );
};

export default Header;
