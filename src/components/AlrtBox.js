import { useEffect, useRef } from "react";
import { useAlertStore } from "../store/bookStore";

const AlrtBox = () => {
  const { alert, closeAlert, message, bookUrl } = useAlertStore();
  const alertRef = useRef(null);

  const handleClick = (e) => {
    if (alertRef.current && !alertRef.current.contains(e.target)) {
      closeAlert();
    }
  };

  useEffect(() => {
    if (alert === false) return;

    // 외부 클릭은 캡처단계에서 버튼 클릭은 버블링 단계에서 실행되게.
    // 각각의 버튼 클릭 이벤트를 캡처링과 버블링 단계로 나눔.
    document.addEventListener("click", handleClick, true); // 캡처링 단계.

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [alert]);

  return (
    <>
      {alert && (
        <div className="absolute w-full h-full top-0 z-[10] flex justify-center">
          <div
            ref={alertRef}
            className="fixed bg-white border-2 font-pretendard shadow-gray shadow-xl flex flex-col items-center justify-center gap-6 w-[400px] h-[130px] bottom-[20px] animate-alertUp box-content rounded-xl max-sm:w-[350px]"
          >
            <p className="text-[1.2rem] max-sm:text-[1rem]">{message}</p>
            <div className="flex gap-5">
              <button
                type="button"
                className="relavite w-[130px] h-[50px] bg-gray-300 rounded-lg max-sm:w-[100px]"
                onClick={() => closeAlert()}
              >
                아니오
              </button>
              <a
                target="_blank"
                href={bookUrl}
                rel="noopener noreferrer"
                onClick={() =>closeAlert()}
                className="relative w-[130px] h-[50px] bg-blue-500 text-white rounded-lg text-center leading-[50px] max-sm:w-[100px]"
              >
                예
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlrtBox;
