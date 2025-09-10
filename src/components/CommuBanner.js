import { useNavigate } from "react-router-dom";

const CommuBanner = () => {
    const navi = useNavigate();

    const communityNavi = () => {
        navi("/community");
    }

    return(
        <section className="w-[1000px] mt-[70px] max-lg:w-[750px] max-md:w-[500px]">
            <h2 className="font-pretendard font-semibold text-[1.3rem] ml-[8px]">커뮤니티<span onClick={communityNavi} className="ml-3 text-[1rem] cursor-pointer text-blue-700">더 보기+</span></h2>
            <ul className="commu-wrap mt-10 flex flex-wrap gap-8 justify-center">
                <li className="w-[48%] h-[150px] bg-gray-600 rounded-md max-lg:w-[46%]"></li>
                <li className="w-[48%] h-[150px] bg-gray-600 rounded-md max-lg:w-[46%]"></li>
                <li className="w-[48%] h-[150px] bg-gray-600 rounded-md max-lg:w-[46%]"></li>
                <li className="w-[48%] h-[150px] bg-gray-600 rounded-md max-lg:w-[46%]"></li>
                <li className="w-[48%] h-[150px] bg-gray-600 rounded-md max-lg:w-[46%]"></li>
                <li className="w-[48%] h-[150px] bg-gray-600 rounded-md max-lg:w-[46%]"></li>
            </ul>
        </section>
    );
};

export default CommuBanner;