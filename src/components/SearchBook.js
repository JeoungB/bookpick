import nullImg from "../assets/logo.png";

const SearchBook = ({book}) => {

  const date = new Date(book.datetime);
  const formatted = date.toISOString().split("T")[0];

  return (
    <li className="w-full flex items-center mb-10">
      {/* 책 이미지 */}
      <div className="w-[150px] h-[200px] relative overflow-hidden flex-shrink-0 bg-gray-500">
        <img
          src={book.thumbnail || nullImg}
          alt=""
          className="w-full h-full cursor-pointer border-2 border-gray-400"
        />
      </div>
      {/* 책 소개 */}
      <ul className="relative w-full h-full justify-center ml-5 flex flex-col gap-5">
        <li className="truncate relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard font-semibold">{book.title}</li>
        <li className="truncate relative w-2/4 h-[20px] rounded-lg leading-[20px] font-pretendard -translate-y-3">{book.contents}</li>
        <li className="truncate relative w-2/4 h-[20px] rounded-lg leading-[20px] font-pretendard">{book.authors}<span className="ml-2 text-gray-500 text-[.9rem]">저자(글)</span></li>
        <li className="truncate relative w-2/4 h-[20px] rounded-lg leading-[20px] font-pretendard -translate-y-3 text-gray-700">{book.publisher}<span className="mx-2 text-gray-400">|</span>{formatted}</li>
        <li className="font-pretendard">{book.price}원</li>
      </ul>
      <div className="absolute right-0 mr-8 flex flex-col gap-4">
        <button
          type="button"
          className="w-[130px] h-[50px] rounded-lg border-2 font-pretendard border-blue-400 text-blue-800 bg-gray-50"
        >
          찜하기
        </button>
        <button
          type="button"
          className="w-[130px] h-[50px] rounded-lg bg-blue-500 font-pretendard text-white"
        >
          판매 사이트
        </button>
      </div>
    </li>
  );
};

export default SearchBook;
