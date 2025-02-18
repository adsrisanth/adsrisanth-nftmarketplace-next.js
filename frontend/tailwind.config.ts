import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],media: false, // or 'purge' or 'class'
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        robotoslab: ['Roboto Slab', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        Raleway: ['Raleway', 'serif'],
        Atkinson: ['Atkinson Hyperlegible Mono', 'serif'],
        roboto_mono: ['Roboto Mono', 'serif'],
        mulish: ["Mulish", 'serif'],
      }
    },
    screens: {
      lxl: '1500px',
      xxl: '1200px',
      xl: '992px',
      lg: '840px',
      md: '768px',
      sm: '640px',
      ssm: '576px',
      vsm: '400px',
      vvsm: '330px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}