const Category = () => {
  return (
    <section className="category w-full mt-[150px] flex flex-col items-center px-10">
      <h2 className="font-pretendard font-semibold text-[1.5rem] text-black">
        인기 카테고리
      </h2>
      <ul className="category-list w-full flex flex-wrap justify-center gap-5 pt-[30px] max-md:max-w-[500px]">
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition"
        >
          소설
        </li>
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition"
        >
          소설
        </li>
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition"
        >
          소설
        </li>
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition"
        >
          소설
        </li>
        <li
          tabIndex={0}
          role="button"
          className="category-item w-[130px] h-[130px] rounded-lg border-2 border-gray-300 hover:shadow-lg hover:shadow-slate-500 hover:-translate-y-1 focus:shadow-lg focus:shadow-slate-500 focus:-translate-y-1 transition"
        >
          소설
        </li>
      </ul>
    </section>
  );
};

export default Category;
