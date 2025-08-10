import { useEffect, useRef } from "react";
import useBookStore from "../store/bookStore";

const Slider = () => {
  /** 슬라이더 ul 참조 */
  // position(슬라이드 위치)나 애니메이션의 값이 변경되어도 렌더링을 발생시키기 않기 위해 Ref사용.
  // 일반 변수는 값이 초기화되서 슬라이드가 초기화되기에 애니메이션이 끊기거나 이상하게 보일 수 있음.
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  // 이미지 정보 가져오기.
  const { slideImgs, fetchSlideImg } = useBookStore();

  // 이미지 정보 가져오는 함수.
  useEffect(() => {
    fetchSlideImg();
  }, [fetchSlideImg]);

  /** 무한 슬라이드 세팅 */
  useEffect(() => {
    if (slideImgs.length === 0) return;
    const slider = sliderRef.current;
    let slideWidth;
    /** 참조 값이 없으면 멈춰용 */
    if (!slider) return;

    /** 슬라이드 복제 */
    const slideNodes = slider.querySelectorAll("li");
    const clones = [...slideNodes].map((node) => {
      const clone = node.cloneNode(true);
      clone.classList.add("clone");
      slider.appendChild(clone);
      return clone;
    });

    /** 유동적인 margin 크기 구하기 */
    let firstSlideStyle = window.getComputedStyle(slideNodes[0]);
    let margin =
      parseInt(firstSlideStyle.marginLeft) +
      parseInt(firstSlideStyle.marginLeft);

    /** 슬라이드 초기 세팅 */
    const setSliderSize = () => {
      slideWidth = slideNodes[0].offsetWidth + margin; // 아이템 넓이 (넓이 + margin + padding)
      const totalSlides = slideNodes.length * 2; // 기존 아이템 + 복제 아이템 갯수
      const totalWidth = slideWidth * totalSlides; // ul 총 넓이
      slider.style.width = `${totalWidth}px`;
      
    };

    setSliderSize();
    window.addEventListener("resize", setSliderSize);

    /** 슬라이드 애니메이션 */
    const slideAnimation = () => {
      positionRef.current -= 2;

      if (Math.abs(positionRef.current) >= slideWidth * slideNodes.length) {
        positionRef.current = 0;
      }

      slider.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(slideAnimation);
    };

    animationRef.current = requestAnimationFrame(slideAnimation);

    /** 언마운트 시 초기화 */
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", setSliderSize);
      clones.forEach((clone) => slider.removeChild(clone));
      slider.style.transform = "";
      slider.style.width = "";
    };
    // 서버에서 이미지를 가져오는 과정에서 먼저 슬라이드 렌더링 해버리면
    // li 가 없다고 에러 발생.
    // 의존성 배열에 이미지가 업데이트 될때 실행 할 수 있게 변경.
  }, [slideImgs]);

  /** 슬라이드 이미지 렌더 함수 */
  const renderSlides = () =>
    slideImgs.map((item, index) => (
      <li
        key={index}
        className="slide-item w-[150px] h-full mx-[20px] flex bg-slate-300"
      >
        <img className="slide-img" src={item} alt="슬라이드 이미지" />
      </li>
    ));

  return (
    <div className="slide w-full h-60 mt-[50px] overflow-x-hidden">
      <ul
        ref={sliderRef}
        className="slider w-full h-full flex flex-wrap"
      >
        {renderSlides()}
      </ul>
    </div>
  );
};

export default Slider;
