const Sidebar = ({ open }) => {
  return (
    <div className={`sidebar fixed right-0 top-0 w-1/2 h-screen py-20 px-10 max-w-md z-[3] backdrop-blur-md 
    bg-white/30 border-white/20 shadow-lg bg-gray-200 duration-500 ease-in-out   ${open ? "right-0" : "translate-x-full"} `}>
      <ul className="relative w-3/4 h-full font-bold text-gray-700 flex flex-col items-center gap-12 text-lg">
        <li tabindex={0} className="w-full h-14 items-center px-8 flex border-b-2 border-black cursor-pointer">
          커뮤니티
        </li>
        <li tabindex={0} className="w-full h-14 items-center px-8 flex border-b-2 border-black cursor-pointer">
          저장한 책
        </li>
        <li tabindex={0} className="w-full h-14 items-center px-8 flex border-b-2 border-black cursor-pointer">
          좋아요한 게시글
        </li>
      </ul>
      <div className="auth-menu w-full font-bold flex justify-end">
        <button type="button" className="mx-2 w-20 h-10">
          회원가입
        </button>
        <button type="button" className="mx-5 w-20 h-10">
          로그인
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
