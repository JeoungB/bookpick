import novel from "../assets/novel-icon.png"
import economy from "../assets/economy-icon.png"
import science from "../assets/science-icon.png"
import comics from "../assets/comics-icon.png"
import cooking from "../assets/cooking-icon.png"
import { useEffect, useRef } from "react"

const Category = () => {
  const categoryRef = useRef([]);

  useEffect(() => {
    // 
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      // isIntersecting 요소가 화면에 보이는지 boolean값으로 알려줌.
      if(entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.remove("translate-y-full");
          entry.target.classList.add("translate-y-0");
          entry.target.style.opacity = 1;
        }, index * 150);
      }
    });
  }, {
    threshold: .7
  });

  // observe : 단일 대상으로 요소를 담아서 forEach 사용.
  categoryRef.current.forEach((el) => {
    if(el) observer.observe(el);
  });

  return () => observer.disconnect();
  }, []);

  const categories = [
    {name : "소설", src : novel},
    {name : "경제", src : economy},
    {name : "과학", src : science},
    {name : "만화", src : comics},
    {name : "요리", src : cooking},
  ];

  return (
    <section className="category w-full mt-[150px] flex flex-col items-center px-10 max-sm:mt-[100px]">
      <h2 className="font-pretendard font-semibold text-[1.5rem] text-black">
        인기 카테고리
      </h2>
      <ul className="category-list w-full flex flex-wrap justify-center gap-5 pt-[30px] max-md:w-[400px] max-sm:min-w-[400px]">
        {categories.map((data, index) => (
        <li
          tabIndex={0}
          role="button"
          key={index}
          ref={(el) => (categoryRef.current[index] = el)}
          className="category-item w-[130px] h-[130px] translate-y-full opacity-0 flex flex-col items-center justify-center transition duration-300 rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-300 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-300 focus:-translate-y-1 max-md:w-[110px] max-md:h-[110px] max-sm:w-[90px] max-sm:h-[90px]"
        >
          <img src={data.src} alt="아이콘 이미지" className="w-1/2"/>
          <p className="mt-[15px] font-pretendard font-semibold">{data.name}</p>
        </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
