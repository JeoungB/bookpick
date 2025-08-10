import Category from "../../components/Category";
import HeroText from "../../components/HeroText";
import Slider from "../../components/Slider";
import { searchBooks } from "../../services/api/book";

const Main = () => {
  searchBooks("베스트 셀러");

  return (
    <main className="main w-full bg-stone-700 relative pt-[150px] flex flex-col items-center">
      {/* 메인 글귀 */}
      <HeroText />
      {/* 책 슬라이더 */}
      <Slider />
      {/* 카테고리 */}
      <Category />
      {/* 추천 도서 */}
      <section className="recommend mt-10 w-full flex flex-col bg-orange-200">
        <h2 className="font-sans font-bold text-[1.5rem] flex justify-center text-gray-800">
          추천 도서
        </h2>
        {/* 추천 슬라이드 */}
        <div className="recommend-slide_container relative w-full h-60 overflow-x-hidden bg-blue-800">
            <ul className="slider absolute h-full flex flex-nowrap gap-10 px-10 bg-gray-600">
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
                <li className="item w-[200px] h-full bg-red-900"></li>
            </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
