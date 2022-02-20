module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/views/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: 'Outfit, sans-serif'
    },
    extend: {
      colors: {
        primary: '#1F93FF',
        focused: '#000000', // text color
        unfocused: '#999999', // eg. unselected menu link
        label: '#585858',
        'bg-card': '#f8f8f8',
        'bg-wash': '#abc8ff',
        secondary: '#636363'
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
