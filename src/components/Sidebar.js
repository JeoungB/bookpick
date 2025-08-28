import logo from "../assets/logo.png";
import bookmark from "../assets/bookmark-icon.png";
import commu from "../assets/commu-icon.png";
import home from "../assets/home-icon.png";

const Sidebar = ({ open }) => {

  return (
    <>
    <div className={`sidebar fixed right-0 top-0 w-screen h-screen py-20 z-[3] 
    bg-white border-white/20 shadow-lg transition duration-700 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
      <img src={logo} alt="로고 이미지" className="w-[100px] absolute top-2 left-0 ml-5" />
      <ul className="relative w-full h-full font-bold text-gray-700 flex flex-col items-center gap-12 text-lg pt-20">
        <li tabIndex={0} className="w-[190px] h-[50px] flex items-center px-2 cursor-pointer hover:bg-slate-300 leading-[50px] rounded-lg">
          <img src={home} alt="홈 아이콘" className="w-[30px]" />
          <p className="relative left-[20%]">홈</p>
        </li>
        <li tabIndex={0} className="w-[190px] h-[50px] flex items-center px-2 cursor-pointer hover:bg-slate-300 leading-[50px] rounded-lg">
          <img src={commu} alt="커뮤니티 아이콘" className="w-[40px]" />
          <p className="relative left-[15%]">커뮤니티</p>
        </li>
        <li tabIndex={0} className="w-[190px] h-[50px] flex items-center px-2 cursor-pointer hover:bg-slate-300 text-center rounded-lg leading-[50px]">
          <img src={bookmark} alt="북마크 아이콘" className="w-[40px]" />
          <p className="relative left-[15%]">저장한 책</p>
        </li>
      </ul>
      <div className="auth-menu w-full font-bold flex justify-end absolute">
        <p>다크 모드</p>
        <button type="button" className="mx-2 min-w-20 h-10">
          회원가입
        </button>
        <button type="button" className="mx-5 min-w-20 h-10">
          로그인
        </button>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
