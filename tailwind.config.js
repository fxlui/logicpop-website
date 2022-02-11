module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F93FF',
        focused: '#000000', // text color
        unfocused: '#999999', // eg. unselected menu link
        label: '#808080',
        'bg-card': '#f8f8f8',
        'bg-wash': '#abc8ff'
      }
    }
  },
  plugins: []
}
