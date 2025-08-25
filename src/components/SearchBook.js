import nullImg from "../assets/logo.png";
import { useAlertStore } from "../store/bookStore";

const SearchBook = ({book, setAlrt}) => {

  const date = new Date(book.datetime);
  const formatted = date.toISOString().split("T")[0];
  const { alert ,openAlert } = useAlertStore();

  const openAlertHandler = (url) => {
    if(alert === true) return;
    openAlert({msg:"판매 사이트로 이동합니다", url: url})
  }

  return (
    <li className="w-full flex items-center mb-10 box-border max-md:w-[400px] max-md:flex-col max-md:pb-3 max-sm:pb-[50px]">
      {/* 책 이미지 */}
      <div className="w-full flex justify-between items-center">
        <div className="w-[150px] h-[200px] relative overflow-hidden flex-shrink-0 bg-gray-500 max-md:w-[120px] max-md:h-[170px] max-sm:w-[100px] max-sm:h-[150px]">
        <img
          src={book.thumbnail || nullImg}
          alt=""
          className="w-full h-full cursor-pointer border-2 border-gray-400"
        />
      </div>
      {/* 책 소개 */}
      <ul className="relative w-full h-full justify-center ml-5 flex flex-col gap-5 max-md:gap-4 max-md:text-[.9rem] max-sm:text-[.8rem] max-sm:gap-2">
        <li className="truncate relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard font-semibold">{book.title}</li>
        <li className="truncate relative w-2/4 h-[20px] rounded-lg leading-[20px] font-pretendard -translate-y-3 max-md:w-3/4 ">{book.contents}</li>
        <li className="truncate relative w-2/4 h-[20px] rounded-lg leading-[20px] font-pretendard max-sm:text-[.7rem]">{book.authors}<span className="ml-2 text-gray-500 text-[.9rem] max-md:text-[.8rem] max-sm:text-[.6rem]">저자(글)</span></li>
        <li className="truncate relative w-2/4 h-[20px] rounded-lg leading-[20px] font-pretendard -translate-y-3 text-gray-700 max-sm:text-[.7rem]">{book.publisher}<span className="mx-2 text-gray-400">|</span>{formatted}</li>
        <li className="font-pretendard">{book.price}원</li>
      </ul>
      </div>
      <div className="absolute right-0 flex flex-col gap-4 max-md:flex-row max-md:translate-y-[150px] max-sm:flex-row max-sm:w-full">
        <button
          type="button"
          className="w-[130px] h-[50px] rounded-lg border-2 font-pretendard border-blue-400 text-blue-800 bg-gray-50 max-md:w-[90px] max-md:h-[40px] max-md:text-[.8rem] max-sm:relative max-sm:top-[120px] max-sm:w-[100px] max-sm:h-[45px] max-sm:text-[.8rem]"
        >
          찜하기
        </button>
        <button
          type="button"
          className="w-[130px] h-[50px] rounded-lg bg-blue-500 font-pretendard text-white max-md:w-[90px] max-md:h-[40px] max-md:text-[.8rem] max-sm:relative max-sm:top-[120px] max-sm:w-[100px] max-sm:h-[45px] max-sm:text-[.8rem]"
          onClick={() => openAlertHandler(book.url)}
        >
          판매 사이트
        </button>
      </div>
    </li>
  );
};

export default SearchBook;
