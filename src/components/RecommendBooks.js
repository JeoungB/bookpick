import { useEffect, useRef, useState } from "react";
import { useRecommendBooks } from "../store/bookStore";
import arrow from "../assets/arrow-icon.png";

const Recommend = () => {
  const { recommendBooks, fetchRecommend } = useRecommendBooks();
  const slider = useRef(null); // 전체 슬라이드
  const slide = slider.current;
  const slideList = slider.current?.querySelectorAll(".slide");
  const sliderWidth = slide?.getBoundingClientRect().width;
  let touchStartX = 0; // 터치 시작점 좌표.
  let diff = 0; // 마우스 이동 거리.
  let isTouch = false; // 터치를 시작 했는지.
  let currentSlideX = 0; // slide 실제 translateX 값.
  let btnCount = 1; // 버튼 카운트

  /** 추천도서 가져오는 함수. */
  useEffect(() => {
    fetchRecommend();
  }, [fetchRecommend]);

  /** 배열을 3등분 ( 슬라이드가 3개라서 ) */
  const chunkArray = (arr, size) => {
    const result = [];
    for(let i = 0 ; i < arr.length ; i+= size) {
      result.push(arr.slice(i, i + size));
    };
    return result;
  };

  const recommendArray = chunkArray(recommendBooks, 4);

  /** 버튼 선택시 슬라이드 이동 함수 */
  // 끝에 다다르면 버튼 비활성화 시키기
  const slideBtnHandler = (e) => {
    const target = e.target;
    const slideWidth =
      slide?.getBoundingClientRect().width / recommendArray.length;
    const minTranslate = 0;
    const maxTranslate = (slide.offsetWidth / 3) - sliderWidth;
    getTranslateX();
    if (target.className.indexOf("prev") === 0) {
      if (currentSlideX === 0) return;
      let slidePoint = slideWidth * btnCount;
      if (currentSlideX >= -slidePoint) btnCount -= 1;
      let resultX = -(btnCount * slideWidth);
      if (resultX > minTranslate) resultX = minTranslate;
      slide.style.transform = `translateX(${resultX}px)`;
    }

    if (target.className.indexOf("next") === 0) {
      if (currentSlideX === maxTranslate) return;
      let slidePoint = slideWidth * btnCount;
      if (currentSlideX <= -slidePoint) btnCount += 1;
      let resultX = -(btnCount * slideWidth);
      if (resultX < maxTranslate) resultX = maxTranslate;
      slide.style.transform = `translateX(${resultX}px)`;
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
      const maxTranslate = (slide.offsetWidth / 3) - sliderWidth;
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

  return (
    <section className="recommend mt-[100px] w-[1000px] h-[400px] px-4 flex flex-col relative max-lg:w-[800px] max-lg:h-[420px] max-md:w-[90%] max-sm:w-[400px] max-sm:h-[230px] max-sm:px-10">
      <h2 className="font-pretendard relative font-semibold text-[1.3rem] text-black">
        추천 도서{" "}
        <span
          role="button"
          tabIndex={0}
          className="ml-3 text-[1rem] text-blue-700 cursor-pointer"
        >
          더 보기+
        </span>
      </h2>
        <button
          onClick={slideBtnHandler}
          className="prev-btn absolute left-[-10px] top-1/2 z-[2] w-[70px] h-[70px] bg-white shadow-md shadow-gray-400 rounded-full max-md:hidden"
        >
          <img
            src={arrow}
            alt="화살표 이미지"
            className="relative rotate-180 left-1 pointer-events-none"
          />
        </button>
      {/* 추천 슬라이드 */}
      <div className="recommend-slide_container relative w-full h-full overflow-hidden pt-[30px]">
        <div
          id="recommend-slider"
          ref={slider}
          className="recommend-list absolute w-[300%] flex h-full justify-center transition-transform duration-300 ease-out"
        >
        {recommendArray?.map((books, index) => (
          <ul key={index} className="slide w-1/3 flex justify-around items-center font-pretendard font-semibold bg-slate-100">
            {books.map((book, i) => (
              <li key={i} className="flex flex-col gap-5 w-[160px]" >
                <img src={book.thumbnail} alt="책 이미지" className="rounded-xl scale-[1]" />
                <p>{book.title}</p>
              </li>
            ))}
          </ul>
        ))}
        </div>
      </div>
        <button
          onClick={slideBtnHandler}
          className="next-btn absolute right-[-10px] top-1/2 z-[2] w-[70px] h-[70px] bg-white shadow-md shadow-gray-400 rounded-full max-md:hidden"
        >
          <img
            src={arrow}
            alt="화살표 이미지"
            className="relative right-1 pointer-events-none"
          />
        </button>
    </section>
  );
};

export default Recommend;
