import arrow from "../assets/arrow-icon.png";
import { useEffect, useRef, useState } from "react";

const OptionBox = ({value, option, setOption}) => {
  const [popularityOpenMenu, setPopularityOpenMenu] = useState(false);
  const boxRef = useRef(null);

  const popMenuHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPopularityOpenMenu(!popularityOpenMenu);
  };

  const popMenuKeydown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.keyCode === 13) {
      setPopularityOpenMenu(!popularityOpenMenu);
    }
  };

  const changeOption = (e) => {
    let text = e.target.innerText;
    setOption(text);
    setPopularityOpenMenu(false);
  };

  /** 메뉴 밖에 클릭 시 닫힘 */
  const menuDrop = (e) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      setPopularityOpenMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", menuDrop);

    return () => {
      document.removeEventListener("click", menuDrop);
    };
  }, []);

  return (
    <div className="w-full h-[80px] px-10 flex items-center justify-between border-b-2 border-gray-200 max-sm:px-1 max-md:px-1">
      <p className="font-pretendard relative font-semibold text-[1.1rem]">
        전체 <span className="text-blue-600">{value}</span>건
      </p>
      <div ref={boxRef} className="select-box flex">
        {/* 인기순 */}
        <div
          className={`relatve w-[140px] h-[45px] cursor-pointer bg-white font-pretendard max-md:w-[120px] ${
            popularityOpenMenu ? "rounded-t-md" : "rounded-md"
          }`}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={popMenuHandler}
            onKeyDown={popMenuKeydown}
            className={`w-[140px] h-full flex justify-center pl-[17px] overflow-hidden border-2 border-gray-400 ${
              popularityOpenMenu ? "rounded-t-md" : "rounded-md"
            }`}
          >
            <p className="relatve w-full leading-[44px]">{option}</p>
            <img
              src={arrow}
              alt="화살표 이미지"
              className={`scale-[.6] -translate-y-[3px] ${
                popularityOpenMenu
                  ? "-rotate-90 translate-y-[3px]"
                  : "rotate-90"
              }`}
            />
          </div>
          <ul
            className={`relative w-[140px] flex-col items-center rounded-b-md bg-white border-2 border-t-0 border-gray-400 ${
              popularityOpenMenu ? "flex" : "hidden"
            }`}
          >
            <li
              role="button"
              tabIndex={0}
              onClick={changeOption}
              className="w-full h-[45px] flex pl-[17px] items-center hover:bg-gray-100"
            >
              이름순
            </li>
            <li
              role="button"
              tabIndex={0}
              onClick={changeOption}
              className="w-full h-[45px] flex pl-[17px] items-center hover:bg-gray-100"
            >
              가격순
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OptionBox;
