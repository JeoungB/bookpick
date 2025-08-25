const Sidebar = ({ open }) => {

  return (
    <>
        {open ? (
          <div className="sidebar-container fixed z-[3] w-full h-full bg-white/10 backdrop-blur-sm overflow-hidden overflow-y-hidden">
          <div className={`sidebar fixed right-0 top-0 w-1/2 h-screen py-20 px-10 max-w-md z-[3] 
    bg-white border-white/20 shadow-lg duration-500 ease-in-out animate-sidebar`}>
      <ul className="relative w-3/4 h-full font-bold text-gray-700 flex flex-col items-center gap-12 text-lg">
        <li tabIndex={0} className="w-[190px] h-14 items-center px-8 flex border-b-2 border-black cursor-pointer">
          커뮤니티
        </li>
        <li tabIndex={0} className="w-[190px] h-14 items-center px-8 flex border-b-2 border-black cursor-pointer">
          저장한 책
        </li>
      </ul>
      <div className="auth-menu w-full font-bold flex justify-end absolute pr-5">
        <button type="button" className="mx-2 min-w-20 h-10">
          회원가입
        </button>
        <button type="button" className="mx-5 min-w-20 h-10">
          로그인
        </button>
      </div>
    </div>
    </div>
    ) : null}
    </>
  );
};

export default Sidebar;
