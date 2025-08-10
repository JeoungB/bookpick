const BargerMenu = ({ open, setOpen }) => {
  /** 버거 메뉴 엔터시 함수 */
  const bergerEnter = (e) => {
    if (e.key === "Enter") {
      setOpen(!open);
    }
  };

  return (
    <div className="right-5 h-20 flex fixed items-center z-[5]">
      <ul
        tabIndex={0}
        role="button"
        className="berger_menu w-[40px] h-1/2 z-[5] flex-col justify-center gap-2 cursor-pointer hidden max-md:flex"
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
    </div>
  );
};

export default BargerMenu;
