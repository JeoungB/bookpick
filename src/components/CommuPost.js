import searchIcon from "../assets/search-icon.png";
import CommunityList from "./CommuList";
import CommunityMenu from "./CommuMenu";
import CommunityOptionBox from "./CommuOption";

const CommuPost = () => {
  return (
    <>
      <section className="commu_list relative p-[60px] w-[calc(100%-250px)]">
        {/* 커뮤니티 상단 */}
        <div>
          <div className="flex w-full justify-between mb-5">
            <h1 className="text-[1.5rem] font-semibold">커뮤니티</h1>
            <div className="w-[200px] h-[35px] flex items-center px-[7px] bg-white border-[2px] border-gray-400">
              <input
                className="w-full h-full outline-none bg-white"
                placeholder="글 검색"
              ></input>
              <img className="w-[20px] ml-4" src={searchIcon} alt="" />
            </div>
          </div>
          {/* 커뮤니티 메뉴 */}
          <CommunityMenu />
          {/* 글 옵션 */}
          <div className="relative w-full bg-white border-x-[2px] border-b-[2px] border-gray-300">
            <CommunityOptionBox />
            {/* 글 리스트 */}
            <CommunityList />
          </div>
        </div>
      </section>
    </>
  );
};

export default CommuPost;
