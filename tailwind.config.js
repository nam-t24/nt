// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'OldLavender': '#6D6875',
        'DarkEnglishLavender': '#805E65',
        'EnglishLavender': '#B5838D',
        'PastelPink': '#E5989B',
        'Melon':'#FFB4A2',
        'Apricot' : '#FFCDB2',
      }),
       gradientColorStops: theme => ({
        'OldLavender': '#6D6875',
        'DarkEnglishLavender': '#805E65',
        'EnglishLavender': '#B5838D',
        'PastelPink': '#E5989B',
        'Melon':'#FFB4A2',
        'Apricot' : '#FFCDB2',
      }),
      borderColor: theme => ({
        'OldLavender': '#6D6875',
        'DarkEnglishLavender': '#805E65',
        'EnglishLavender': '#B5838D',
        'PastelPink': '#E5989B',
        'Melon':'#FFB4A2',
        'Apricot' : '#FFCDB2',
      })
    },
  },
  variants: {},
  plugins: [],
}