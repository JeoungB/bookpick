import Category from "../../components/Category";
import HeroText from "../../components/HeroText";
import Slider from "../../components/Slider";
import RecommendBooks from "../../components/RecommendBooks";
import CommuBanner from "../../components/CommuBanner";

const Main = () => {

  return (
    <main className="main w-full max-w-[2700px] overflow-x-hidden relative pt-[150px] flex flex-col items-center">
      {/* 메인 글귀 */}
      <HeroText />
      {/* 책 슬라이더 */}
      <Slider />
      {/* 카테고리 */}
      <Category />
      {/* 추천 도서 */}
      <RecommendBooks />
      {/* 커뮤니티 */}
      <CommuBanner />
    </main>
  );
};

export default Main;
