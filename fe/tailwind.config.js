const spacings = {};
for (let i = -100; i < 500; i += 0.5) {
  spacings[i] = `${i / 8}rem`;
}

const opacities = {};
for (let i = 0; i < 100; i ++) {
  opacities[i] = (i * 0.01).toFixed(2);
}


module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ssp': ['Source Serif Pro'],
        'roboto': ['Roboto'],
      },
      spacing: spacings,
      colors: {
        black: {
          DEFAULT: '#000',
          one: '#051C2C',
          two: '#00000080'
        },
        green: {
          one: '#71DE361A',
          DEFAULT: '#71DE36'
        },
        grey: {
          one: '#777777',
          two: '#CCCCCC4D'
        }
      },
      fontSize: {
        "md": ["16px", { lineHeight: "19px" }],
        "lg": ["24px", { lineHeight: "30px" }],
        "xl": ["28px", { lineHeight: "35px" }],
        "2xl": ["40px", { lineHeight: "50px" }],
      },
      boxShadow: {
        card: "0px 2px 5px #9BB1A180"
      },
    },
  },
  plugins: [],
};
