import checkIcon from "../assets/check-icon.png";

const CommunityOptionBox = () => {
  return (
    <>
      <div className="commu_option px-[30px] flex items-center justify-between border-b-[2px] border-gray-300 shadow-sm h-[70px]">
        <p className="text-[1.2rem] font-semibold">
          총 <span className="text-blue-700">100</span>건
        </p>
        <ul className="flex w-fit text-[1rem] gap-6 text-gray-600">
          <li className="cursor-pointer text-blue-400 font-semibold flex items-center">
            <img src={checkIcon} alt="" className="w-[30px]" />
            <p>최신순</p>
          </li>
          <li className="cursor-pointer flex items-center">
            <p>인기순</p>
          </li>
          <li className="cursor-pointer flex items-center">
            <p>좋아요</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CommunityOptionBox;
