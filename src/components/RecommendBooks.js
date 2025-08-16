import { useEffect, useRef, useState } from "react";
import { useRecommendBooks } from "../store/bookStore";
import arrow from "../assets/화살표.png";

const Recommend = () => {
  const { recommendBooks, fetchRecommend } = useRecommendBooks();
  const slider = useRef(null); // 전체 슬라이드
  const slide = slider.current;
  const slideList = slider.current?.querySelectorAll(".slide");
  const sliderWidth = slide?.getBoundingClientRect().width;
  let position = 0; // 슬라이드 움직이는 위치값.
  let touchStartX = 0; // 터치 시작점 좌표.
  let diff = 0; // 마우스 이동 거리.
  let isTouch = false; // 터치를 시작 했는지.
  let currentSlideX = 0; // slide 실제 translateX 값.
  let btnCount = 1; // 버튼 카운트

  /** 추천도서 가져오는 함수. */
  useEffect(() => {
    fetchRecommend();
  }, [fetchRecommend]);

  /** 추천 책 렌더 함수 */
  // const renderRecommend = () => {
  //   if(!recommendBooks.length || !slideList) return;
  //   const slideSectionSize = Array.from(slideList).length;
  //   const slideSection = [];

  //   for(let i = 0 ; i < recommendBooks.length ; i += slideSectionSize) {
  //     // slice : 배열을 범위내로 잘라서 새로운 배열을 반환. (0, 3) : 인덱스 0부터 3직전 까지 자름.
  //     slideSection.push(recommendBooks.slice(i, i + slideSectionSize));
  //   }
    
  //   return slideSection?.map((section, sectionIndex) => {
  //     <section key={sectionIndex} className="slide w-1/3 z-[1] h-full bg-orange-600">
        
  //     </section>
  //   });
  // };

    // recommendBooks.map((item, index) => {
    //   return (
    //     <li key={index} className="w-[250px] h-[300px] mx-[30px] bg-neutral-200">
    //     <img src={item.thumbnail} alt="추천 책 이미지" />
    //     </li>
    //   );
    // })

  /** 버튼 선택시 슬라이드 이동 함수 */
  // 끝에 다다르면 버튼 비활성화 시키기
  const slideBtnHandler = (e) => {
    const target = e.target;
    const slideWidth = slide?.getBoundingClientRect().width / Array.from(slideList).length;
    const minTranslate = 0;
    const maxTranslate = slideList[0].offsetWidth - sliderWidth;
    getTranslateX();
    if (target.className.indexOf("prev") === 0) {
      if(currentSlideX === 0) return;
      let slidePoint = slideWidth * btnCount;
      if(currentSlideX >= -slidePoint) btnCount -= 1;
      let resultX = -(btnCount * slideWidth);
      if (resultX > minTranslate) resultX = minTranslate;
      slide.style.transform = `translateX(${resultX}px)`;
      console.log(btnCount);
    }

    if (target.className.indexOf("next") === 0) {
      if(currentSlideX === maxTranslate) return;
      let slidePoint = slideWidth * btnCount;
      if(currentSlideX <= -slidePoint) btnCount += 1;
      let resultX = -(btnCount * slideWidth);
      if (resultX < maxTranslate) resultX = maxTranslate;
      slide.style.transform = `translateX(${resultX}px)`;
      console.log(btnCount);
    }
  };

  /** 터치 슬라이드 함수 */
  const slideMove = () => {
    if (!slideList) return;

    slide.addEventListener("pointerdown", (e) => {
      // 마우스 비활성화 제거.
      e.preventDefault();
      isTouch = true;
      getTranslateX();
      // 클릭한 위치정보
      touchStartX = e.clientX;
    });

    slide.addEventListener("pointerup", (e) => {
      isTouch = false;
    });

    slide.addEventListener("pointermove", (e) => {
      if (!isTouch) return;
      const minTranslate = 0;
      const maxTranslate = slideList[0].offsetWidth - sliderWidth;
      // 실시간 마우스 움직임 - 시작점
      diff = e.clientX - touchStartX;
      // 현재 slideX 값 + 마우스 이동 거리 = 실제 이동해야 할 거리.
      let resultX = currentSlideX + diff;

      // 슬라이드 움직임 제한.
      if (resultX > minTranslate) resultX = minTranslate;
      if (resultX < maxTranslate) resultX = maxTranslate;

      slide.style.transform = `translateX(${resultX}px)`;
    });

    slide.addEventListener("pointerleave", (e) => {
      isTouch = false;
    });
  };

  slideMove();

  /** 움직인 이후 slide의 실시간 X 위치값 구하는 함수 */
  const getTranslateX = () => {
    // 실제로 적용된 ( css가 계산된 이후 ) 결과값.
    const currentStyle = window.getComputedStyle(slide);
    // transform 의 행렬 형태로 해석.
    // ex) transform: translateX(100px) -> matrix(1, 0, 0, 1, 100, 0) : 실제 저장값.
    // 브라우저 지원 이슈로 인해 두가지 사용.
    const matrix = new (window.DOMMatrix || window.WebKitCSSMatrix)(
      currentStyle.transform
    );
    currentSlideX = matrix.m41;
  };
  let tt = [1, 2, 3]
  return (
    <section className="recommend mt-[100px] w-[1000px] h-[400px] flex flex-col relative">
      <h2 className="font-pretendard font-semibold text-[1.3rem] text-black">
        추천 도서{" "}
        <span
          role="button"
          tabIndex={0}
          className="ml-3 text-[1rem] text-blue-700 cursor-pointer"
        >
          더 보기+
        </span>
      </h2>
      {/* 추천 슬라이드 */}
      <div className="recommend-slide_container relative mt-[30px] w-full h-full overflow-x-hidden">
        <button
          onClick={slideBtnHandler}
          className="prev-btn absolute ml-5 left-0 top-1/2 z-[2] w-[70px] h-[70px] bg-white shadow-lg rounded-full"
        ><img src={arrow} alt="화살표 이미지" className="relative rotate-180 left-1 pointer-events-none" /></button>
        {/* 전체 슬라이드 */}
        <div
          id="recommend-slider"
          ref={slider}
          className="recommend-list absolute w-[300%] flex h-full justify-center transition-transform duration-300 ease-out"
        >
          {/* 3등분 슬라이드 */}
          {/* 여기 slide가 위에서 먼저 불러오는데 map같은 조건 써서 없으니까 에러가 뜸 */}
          <section className="slide w-1/3 z-[1] h-full flex justify-center">
            {recommendBooks.slice(0, 3).map((book, index) => (<li key={index} className="w-[200px] h-[150px] mx-[30px] flex justify-center overflow-hidden bg-gray-500">
         <img src={book.thumbnail} alt="추천 책 이미지" className="absolute" />
         </li>))}
          </section>
                    <section className="slide w-1/3 z-[1] h-full flex justify-center">
            {recommendBooks.slice(3, 6).map((book, index) => (<li key={index} className="w-[150px] h-[150px] mx-[30px] flex flex-col bg-gray-500">
         <img src={book.thumbnail} alt="추천 책 이미지" className="" />
         </li>))}
          </section>
                    <section className="slide w-1/3 z-[1] h-full flex justify-center">
            {recommendBooks.slice(6, 9).map((book, index) => (<li key={index} className="w-[150px] h-[150px] mx-[30px] flex flex-col bg-gray-500">
         <img src={book.thumbnail} alt="추천 책 이미지" className="" />
         </li>))}
          </section>
        </div>
        <button
          onClick={slideBtnHandler}
          className="next-btn absolute mr-5 right-0 top-1/2 z-[2] w-[70px] h-[70px] bg-white shadow-lg rounded-full"
        ><img src={arrow} alt="화살표 이미지" className="relative right-1 pointer-events-none" /></button>
      </div>
    </section>
  );
};

export default Recommend;