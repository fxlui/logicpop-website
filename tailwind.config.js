module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/views/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: 'Outfit, sans-serif',
      symptrack: 'Quicksand, sans-serif'
    },
    extend: {
      colors: {
        primary: '#1F93FF',
        focused: '#000000', // text color
        unfocused: '#999999', // eg. unselected menu link
        label: '#585858',
        'bg-card': '#f8f8f8',
        'bg-wash': '#abc8ff',
        secondary: '#636363',
        'st-pink': '#FF7272',
        'st-orange': '#FF8A58',
        'st-border': '#C1C1C1',
        'st-secondary': '#F3F3F3',
        'st-text': '#757575'
      },
      width: {
        160: '40rem',
        240: '60rem'
      },
      borderRadius: {
        card: '30px'
      }
    }
  },
  plugins: []
}
