const CommunityMenu = () => {
    return(
        <>
        <div className="w-full h-[60px] bg-white">
            <ul className="w-full h-full flex justify-between">
                <li className="w-1/4 text-center leading-[60px] text-[1.1rem] border-[2px] border-r-0 border-b-0 cursor-pointer border-gray-300">전체</li>
                <li className="w-1/4 text-center leading-[60px] text-[1.1rem] border-[2px] border-r-0 cursor-pointer border-gray-300">질문</li>
                <li className="w-1/4 text-center leading-[60px] text-[1.1rem] border-[2px] border-r-0 cursor-pointer border-gray-300">추천</li>
                <li className="w-1/4 text-center leading-[60px] text-[1.1rem] border-[2px] cursor-pointer border-gray-300">일반</li>
            </ul>
        </div>
        </>
    );
};

export default CommunityMenu;