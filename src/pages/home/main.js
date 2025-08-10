import Category from "../../components/Category";
import HeroText from "../../components/HeroText";
import Slider from "../../components/Slider";
import { searchBooks } from "../../services/api/book";

const Main = () => {

    searchBooks("베스트 셀러");

  return (
    <main className="main w-full relative pt-[150px] flex flex-col items-center">
      {/* 메인 글귀 */}
      <HeroText />
      {/* 책 슬라이더 */}
      <Slider />
      {/* 카테고리 */}
      <Category />
      {/* 추천 도서 */}
      <section className="recommend mt-10">
        <span></span>
        <h2 className="font-sans font-bold text-[1.5rem] text-gray-800">추천 도서</h2>
        <ul className="recommend-list w-full flex bg-slate-800">
            <li className="recommend-item w-[100px] h-[150px]"></li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
