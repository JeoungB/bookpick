import dangerIcon from "../assets/danger-icon.png";

const NoFindeSearch = () => {
    return(
        <div className="flex flex-col items-center gap-7">
            <img src={dangerIcon} alt="경고 이미지" className="w-[100px]" />
            <p className="overflow-y-hidden w-full h-[50px] font-pretendard font-bold text-center text-gray-500">검색 결과 없거나, 다시 검색해 보세요</p>
        </div>
    );
};

export default NoFindeSearch;