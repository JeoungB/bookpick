import Category from "../../components/Category";
import Slider from "../../components/Slider";

const Main = () => {
  return (
    <main className="main w-full relative pt-[150px] flex flex-col items-center">
      {/* 메인 글귀 */}
      <h2 className="w-[390px] flex flex-wrap justify-center leading-normal font-bold font-sans text-[2.5rem] text-gray-700">
        책 선택의 즐거움, <span className="span_main text-blue-600">북픽</span>
        에서 시작하세요
      </h2>
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
