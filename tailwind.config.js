/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        // 메인 문구 애니메이션
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        alertUp : {
          "0%": {transform: "translateY(100%)"},
          "100%": {transform: "translateY(0%)"},
        },
        sideShow : {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(0%)"},
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        fadeUpSpan : 'fadeUp 1.3s ease-out forwards',
        shimmer: "shimmer 1.5s infinite",
        alertUp: "alertUp .3s ease-out",
        sidebar: "sideShow 1s"
      },
      // 폰트
      fontFamily : {
         pretendard: [
          'Pretendard Variable',
          'Pretendard',
          'apple-system',
          'system-ui',
          'Roboto',
          'sans-serif'
        ],
      },
    },
    screens: {
      /** 반응형 분기점 */
      // 모바일
      "max-sm": { min: '1px', max: '480px' },
      // 태블릿
      "max-md": { min: '481px', max: '768px' },
      // 노트북
      "max-lg": { min: '769px', max: '1279px' },
      // 데스크탑
      "max-xl": { min: '1280px' },
      "search-bar" : {max : '645px'},
      "detail-bar" : {max : "540px"}
    },
  },
  plugins: [],
};
