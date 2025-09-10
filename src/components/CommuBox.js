import writeIcon from "../assets/write-icon.png";
import userIcon from "../assets/user-icon.png";

const CoummunityBox = () => {
    return(
        <>
        <section className="commu_option relative w-[250px] h-[300px] p-[15px] font-pretendard border-r-[1px] border-b-[1px] border-gray-300 bg-white">
        <div className="write w-full h-[60px] flex items-center justify-center gap-3 cursor-pointer bg-blue-950">
            <img src={writeIcon} alt="" className="w-[25px] h-[25px] invert"/>
            <p className="font-semibold text-[1.6rem] text-white">글쓰기</p>
        </div>
        <div className="auth w-[full] h-[150px] mt-[10px] flex flex-col items-center justify-center bg-slate-200">
            <img src={userIcon} alt="유저 아이콘" className="w-[50px]" />
            <p className="text-[1rem] flex flex-col items-center mt-[15px] gap-1"><span><span className="text-blue-600">로그인</span> 후 활동을</span> <span className="block">시작해보세요</span></p>
        </div>
        </section>
        </>
    );
};

export default CoummunityBox;