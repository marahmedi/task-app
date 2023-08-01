// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // Light theme
      vlg: 'hsl(0, 0%, 98%)',
      vlgb: 'hsl(236, 33%, 92%)',
      lgb: 'hsl(233, 11%, 84%)',
      dgb: 'hsl(236, 9%, 61%)',
      vdgb: 'hsl(235, 19%, 35%)',
      // dark theme
      vdb: 'hsl(235, 21%, 11%)',
      vddb: 'hsl(235, 24%, 19%)',
      darklgb: 'hsl(234, 39%, 85%)',
      hoverdarklgb: 'hsl(236, 33%, 92%)',
      darkdgb: 'hsl(234, 11%, 52%)',
      darkvdgb: 'hsl(233, 14%, 35%)',
      darkvdgb2: 'hsl(233, 14%, 35%)'
    },
    extend: {
      backgroundImage: {
        'mobile-light': "url(/public/images/bg-mobile-light.jpg)",
        'mobile-dark': "url(/images/bg-mobile-dark.jpg)",
        'desktop-light': "url(/images/bg-desktop-light.jpg)",
        'desktop-dark': "url(/images/bg-desktop-dark.jpg.jpg)",
      },
    },
  },
  plugins: [],
}

