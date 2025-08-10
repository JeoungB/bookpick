/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        fadeUpSpan : 'fadeUp 1.3s ease-out forwards'
      },
    },
    screens: {
      /** 반응형 분기점 */
      // 모바일
      "max-sm": { max: "649px" },
      // 태블릿
      "max-md": { max: "767px" },
      // 노트북
      "max-lg": { max: "1023px" },
      // 데스크탑
      "max-xl": { max: "1279px" },
    },
  },
  plugins: [],
};
