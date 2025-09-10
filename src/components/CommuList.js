import questionIcon from "../assets/question-icon.png";
import likeIcon from "../assets/like-icon.png";
import likeCommuIcon from "../assets/like-commu-icon.png";
import chatIcon from "../assets/chat-icon.png";
import bookMarkIcon from "../assets/bookmark-icon.png";

const CommunityList = () => {
  return (
    <>
    {/* 게시글 리스트 */}
      <div className="list">
        <ul className="w-full flex flex-col items-center">
          <li className="w-[90%] pt-[30px] border-b-[1px] border-gray-300">
            <div className="flex text-gray-600 gap-3 mb-[20px]">
              <p className="bg-slate-200 w-fit px-[7px] py-[3px] cursor-pointer hover:text-blue-700 hover:bg-blue-100">
                소설
              </p>
              <p className="bg-slate-200 w-fit px-[7px] py-[3px] cursor-pointer hover:text-blue-700 hover:bg-blue-100">
                추천 도서
              </p>
            </div>
            <div className="flex items-center text-[1.4rem] w-fit h-fit pb-[15px] cursor-pointer">
              <img className="w-[30px] mr-3" src={questionIcon} alt="" />
              <p className="[display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [text-overflow:ellipsis] overflow-hidden">
                이 도서 어떤가요
              </p>
            </div>
            <p className="w-full cursor-pointer h-fit text-gray-500 leading-[23px] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [text-overflow:ellipsis]">
              안녕하세요 하세요 감사해안해요. 잘있어요 다시 만나요 감사해요.
              잘있어요 다시 만우우
            </p>
            {/* 글 상태 */}
            <div className="flex justify-between pt-[10px] pb-[20px]">
              <div className="flex w-[200px] justify-between items-center">
                <div className="w-[20px] flex items-center gap-2">
                  <img src={likeCommuIcon} alt="" />
                  <p className="font-semibold">0</p>
                </div>
                <div className="w-[20px] flex items-center gap-2">
                  <img src={chatIcon} alt="" />
                  <p className="font-semibold">0</p>
                </div>
                <p className="text-gray-400">7시간 전 작성</p>
              </div>
              <div className="flex">
                <div className="w-[40px]">
                  <img src={bookMarkIcon} alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CommunityList;
