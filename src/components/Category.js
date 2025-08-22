//<a href="https://www.flaticon.com/kr/free-icons/" title="적립 아이콘">적립 아이콘 제작자: Freepik - Flaticon</a>
import novel from "../assets/novel-icon.png"
import economy from "../assets/economy-icon.png"
import science from "../assets/science-icon.png"
import comics from "../assets/comics-icon.png"
import cooking from "../assets/cooking-icon.png"

const Category = () => {
  return (
    <section className="category w-full mt-[150px] flex flex-col items-center px-10 max-sm:mt-[100px]">
      <h2 className="font-pretendard font-semibold text-[1.5rem] text-black">
        인기 카테고리
      </h2>
      <ul className="category-list w-full flex flex-wrap justify-center gap-5 pt-[30px] max-md:w-[400px] max-sm:min-w-[400px]">
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition max-md:w-[110px] max-md:h-[110px] max-sm:w-[90px] max-sm:h-[90px]"
        >
          <img src={novel} alt="아이콘 이미지" className="w-1/2"/>
          <p className="mt-[15px] font-pretendard font-semibold">소설</p>
        </li>
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition max-md:w-[110px] max-md:h-[110px] max-sm:w-[90px] max-sm:h-[90px]"
        ><img src={economy} alt="아이콘 이미지" className="w-1/2"/><p className="mt-[15px] font-pretendard font-semibold">경제</p></li>
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition max-md:w-[110px] max-md:h-[110px] max-sm:w-[90px] max-sm:h-[90px]"
        >
          <img src={science} alt="아이콘 이미지" className="w-1/2"/>
          <p className="mt-[15px] font-pretendard font-semibold">과학</p>
        </li>
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition max-md:w-[110px] max-md:h-[110px] max-sm:w-[90px] max-sm:h-[90px]"
        >
          <img src={comics} alt="아이콘 이미지" className="w-1/2"/>
          <p className="mt-[15px] font-pretendard font-semibold">만화</p>
        </li>
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition max-md:w-[110px] max-md:h-[110px] max-sm:w-[90px] max-sm:h-[90px]"
        >
          <img src={cooking} alt="아이콘 이미지" className="w-1/2"/>
          <p className="mt-[15px] font-pretendard font-semibold">요리</p>
        </li>
      </ul>
    </section>
  );
};

export default Category;
