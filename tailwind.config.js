/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens : {
      /** 반응형 분기점 */
      // 모바일
      "max-sm" : {'max' : '649px'},
      // 태블릿
      "max-md" : {'max' : '767px'},
      // 노트북
      "max-lg" : {'max' : '1023px'},
      // 데스크탑
      "max-xl" : {'max' : '1279px'},
    }
  },
  plugins: [],
}

