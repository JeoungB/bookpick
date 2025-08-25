const LodingBookList = () => {
    return (
        <li className="w-full flex items-center mb-10">
                  <div className="w-[150px] h-[200px] flex-shrink-0 relative overflow-hidden bg-gray-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                  <ul className="relative w-full h-full justify-center ml-5 flex flex-col gap-5">
                    <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                    </li>
                    <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                    </li>
                    <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                    </li>
                    <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                    </li>
                    <li className="bg-gray-400 overflow-hidden relative w-3/5 h-[20px] rounded-lg leading-[20px] font-pretendard">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                    </li>
                  </ul>
                </li>
    );
};

export default LodingBookList;