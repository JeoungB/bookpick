import { useEffect, useRef, useState } from "react";
import { slideBookImg } from "../services/api/book";

const Slider = () => {
  /** 슬라이더 ul 참조 */
  // position(슬라이드 위치)나 애니메이션의 값이 변경되어도 렌더링을 발생시키기 않기 위해 Ref사용.
  // 일반 변수는 값이 초기화되서 슬라이드가 초기화되기에 애니메이션이 끊기거나 이상하게 보일 수 있음.
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  /** 무한 슬라이드 세팅 */
  useEffect(() => {
    const slider = sliderRef.current;
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

    /** 슬라이드 값 구하기 */
    const slideWidth = slideNodes[0].offsetWidth + 40; // 아이템 넓이 (넓이 + margin + padding)
    const totalSlides = slideNodes.length + clones.length; // 기존 아이템 + 복제 아이템 갯수
    const totalWidth = slideWidth * totalSlides; // ul 총 넓이

    slider.style.width = `${totalWidth}px`;
    /** 슬라이드 애니메이션 */
    const slideAnimation = () => {
      positionRef.current -= 1;

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
      clones.forEach((clone) => slider.removeChild(clone));
      slider.style.transform = "";
      slider.style.width = "";
    };
  }, []);

  return (
    <div className="slide w-full h-60 mt-[50px] overflow-x-hidden bg-gray-800">
      <ul ref={sliderRef} className="slider w-full h-full flex flex-wrap">
              <li className="slide-item w-[150px] h-full mx-[20px] bg-slate-300">
          1
        </li>
      </ul>
    </div>
  );
};

export default Slider;
