const PageNation = ({ currentPage, setCurrentPage, pageNumbers }) => {
  const numberPageNation = (e) => {
    setCurrentPage(e.target.innerText);
    window.scrollTo({ top: 0 });
  };

  const btnPageNation = (e) => {
    const btn = e.target.className;
    if (btn === "prev" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0 });
    }

    if (btn === "next" && currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div className="page_nation flex justify-center gap-10 w-full">
      <button className="prev" onClick={btnPageNation}>
        &lt;
      </button>
      {pageNumbers.map((num, index) => (
        <button
          key={index}
          onClick={numberPageNation}
          className={`relative font-pretendard ${
            currentPage == index + 1
              ? "text-white bg-blue-400 min-w-[23px] min-h-[23px] rounded-full"
              : "text-gray-500"
          }`}
        >
          {num}
        </button>
      ))}
      <button className="next" onClick={btnPageNation}>
        &gt;
      </button>
    </div>
  );
};

export default PageNation;
