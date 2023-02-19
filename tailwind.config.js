module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Eudoxus Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
    extend: {
      colors: {
        primary: '#F8F7F1',
        secondary: '#7F56D9',
        customPrimary: '#ed7771',
        customSecondary: '#f6dd83',
        customThird: '#645888 ',
        customfour: '#2cc166',
        customGreen: '#22c55e'
      },
      textColor: {
        custom: '#ed7771',
        customThird:'#645888',
        customfour:'#2cc166 ',
        customYellow:'#f7e9b5 ',
        customGreen:'#22c55e'  
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
        2: '0px 4px 30px rgba(238, 238, 238, 1.5)',
      },
    },
  },
  plugins: [],
};