import { useEffect, useState } from "react";
import bookSearchIcon from "../assets/book-search-gif.gif";
import communityIcon from "../assets/community-gif.gif";
import pinIcon from "../assets/pin-icon.png";


const Banner = () => {
    const [bannerAnimation, setBannerAnimation] = useState(false);

    // setTimeout실행 시 state가 리렌더링 되면서 반복 및 interval 쌓이면서 메모리 누수 및 성능저하 이슈 가능성 생김.
    // useEffect에서 return으로 정리.
    useEffect(() => {
     const interval = setInterval(() => {;
       setBannerAnimation((prev) => !prev);
     },5000);

     return ()=> clearTimeout(interval);
    }, []);

    return (
    <section className="w-[1000px] h-[300px] relative font-pretendard mt-[100px] flex justify-center rounded-3xl rounded-bl-none bg-white shadow-xl border-[1px]">
        <img src={pinIcon} alt="" className="w-[60px] translate-y-[-28px] absolute"/>
        {/* 첫번째 배너 */}
        <div className="w-full h-full absolute flex justify-around items-center">
          <p className={`flex flex-col items-center gap-5 text-[2rem] transition duration-700 ease-in-out ${bannerAnimation ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[20px]"}`}>
            도서 검색은<span className="font-bold block text-blue-600">북픽!</span> 다양한 책을 검색하고 찾아보세요
          </p>
          <div className="w-[300px] h-[300px]">
            <img src={bookSearchIcon} alt=""  className={`w-[300px] h-[300px] mix-blend-multiply transition duration-700 ease-in-out ${bannerAnimation ? "opacity-100 translate-y-[0]" : "opacity-0 translate-y-[-20px]"}`}/>
          </div>
        </div>
        {/* 두번째 배너 */}
        <div className="w-full h-full flex justify-around items-center">
            <p className={`flex flex-col items-center gap-5 text-[2rem] transition duration-700 ease-in-out ${bannerAnimation ? "opacity-0 translate-y-[20px]" : "opacity-100 translate-y-[0]"}`}>
            원하는 도서를 사람들과 함께<span className="font-bold block text-blue-600">공유</span>해보세요
          </p>
          <div className="w-[300px] h-[300px]">
            <img src={communityIcon} alt=""  className={`w-[300px] h-[300px] mix-blend-multiply transition duration-700 ease-in-out ${bannerAnimation ? "opacity-0 translate-y-[-20px]" : "opacity-100 translate-y-[0]"}`}/>
          </div>
        </div>
    </section>
    )
};

export default Banner;