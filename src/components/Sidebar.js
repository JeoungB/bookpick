const Sidebar = () => {
  return (
    <div className="sidebar fixed right-0 top-0 w-1/2 h-screen py-20 px-10 max-w-md z-[3] bg-brown-100 bg-gray-200">
      <ul className="relative w-3/4 h-full font-bold text-gray-700 flex flex-col items-center gap-12 text-lg">
        <li className="w-full h-14 items-center px-8 flex border-b-2 border-black cursor-pointer">커뮤니티</li>
        <li className="w-full h-14 items-center px-8 flex border-b-2 border-black cursor-pointer">저장한 책</li>
        <li className="w-full h-14 items-center px-8 flex border-b-2 border-black cursor-pointer">좋아요한 게시글</li>
      </ul>
      <div className="auth-menu w-full bg-red-300">
        <button type="button">회원가입</button>
        <button type="button">로그인</button>
      </div>
    </div>
  );
};

export default Sidebar;
 