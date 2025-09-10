import CoummunityBox from "../components/CommuBox";
import CommuPost from "../components/CommuPost";

const CommunityPage = () => {
  return (
    <div className="relative translate-y-[100px] w-full flex font-pretendard bg-slate-50">
      {/* 커뮤니티 옵션 */}
      <CoummunityBox />
      {/* 게시글 컴포넌트 */}
      <CommuPost />
    </div>
  );
};

export default CommunityPage;
