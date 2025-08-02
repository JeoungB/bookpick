// 헤더
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full h-20 border-b border-black-600 px-20 flex items-center justify-between">
      {/* 로고 */}
      <div className="logo w-36 flex items-center cursor-pointer">
        <img src={logo} alt="로고 이미지" className="w-20" />
        <p className="text-3xl font-bold text-gray-700 ">북픽</p>
      </div>
      {/* 검색창 */}
      {/* 검색 버튼 있어야할듯 핸드폰 생각하면 */}
      <input
        type="text"
        placeholder="책 제목 또는 저자를 입력하세요."
        className="w-1/2 h-10 bg-transparent border-2 border-black border-opacity-50 rounded px-5"
      ></input>
      {/* 가입 */}
      <div className="auth w-48 h-full flex justify-between items-center text-l font-bold text-gray-600 ">
        <button className="h-10 font-sans">회원가입</button>
        <button className="h-10">로그인</button>
      </div>
    </header>
  );
};

export default Header;
