/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens : {
      /** 반응형 분기점 */
      "max-sm" : {'max' : '649px'},
      "max-md" : {'max' : '767px'},
      "max-lg" : {'max' : '1023px'},
      "max-xl" : {'max' : '1279px'},
    }
  },
  plugins: [],
}

