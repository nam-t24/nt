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
        //green theme
        'Charcoal': '#2F3E46',
        'DarkSlateGrey': '#354F52',
        'HookersGreen': '#52796F',
        'DarkSeaGreen': '#84A98C',
        'AshGrey': '#CAD2C5',
      }),
       gradientColorStops: theme => ({
        'OldLavender': '#6D6875',
        'DarkEnglishLavender': '#805E65',
        'EnglishLavender': '#B5838D',
        'PastelPink': '#E5989B',
        'Melon':'#FFB4A2',
        'Apricot' : '#FFCDB2',
        //green theme
        'Charcoal': '#2F3E46',
        'DarkSlateGrey': '#354F52',
        'HookersGreen': '#52796F',
        'DarkSeaGreen': '#84A98C',
        'AshGrey': '#CAD2C5',
      }),
      borderColor: theme => ({
        'OldLavender': '#6D6875',
        'DarkEnglishLavender': '#805E65',
        'EnglishLavender': '#B5838D',
        'PastelPink': '#E5989B',
        'Melon':'#FFB4A2',
        'Apricot' : '#FFCDB2',
        //green theme
        'Charcoal': '#2F3E46',
        'DarkSlateGrey': '#354F52',
        'HookersGreen': '#52796F',
        'DarkSeaGreen': '#84A98C',
        'AshGrey': '#CAD2C5',
      }),
      minHeight: {
        '22rem': '22rem',
        '1/2': '50%',
      },
      maxHeight: {
        '1/2': '50%',
      },
      maxWidth: {
        '2/5': '50rem',
      },
      minWidth: {
        'screen': '100vw',
      },
      padding: {
        '18px': '18px',
      },
    },
  },
  variants: {},
  plugins: [],
}