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
      <input></input>
      {/* 가입 */}
      <div className="auth">
        <button>회원가입</button>
        <button>로그인</button>
      </div>
    </header>
  );
};

export default Header;
