/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "quotation-pattern": 'url("/images/bg-pattern-quotation.svg")'
      },
      backgroundPosition:{
        "top-right-8": "top right 36px"
      },
      colors:{
        "custom-violet":"#7541c8",
        "custom-greyish-blue":"#48556a",
        "custom-blackish-blue":"#19212e",
        "custom-light-grey":"#cfcfcf",
        "custom-greyish-light-blue":"#ecf2f8"      
      },

      fontSize:{
        "h3":["20px", "28px"]
      },
      screens:{
        "xs" : {"min":"950px"}
      }
    },
  },
  plugins: [],
}

