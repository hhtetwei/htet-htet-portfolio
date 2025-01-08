import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  lightMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    screens: {
      xxs: { min: '320px', max: '360px' },
      s: { min: '360px', max: '640px' },
      sm: { min: '640px', max: '768px' },
      md: { min: '768px', max: '1024px' },
      lg: { min: '1024px', max: '1280px' },
      xl: { min: '1280px', max: '1536px' },
      twoXL: { min: '1536', max: '2000px' },
      threeXL: { min: '2000px', max: '3500px' },
      fourXL: { min: '3500px', max: '4500px' },
      fiveXL: { min: '4500px', max: '6000px' },
    },

    colors: {
      baseClr: '#9D76C1',
      textClr: '#FFF9F9',
      boxAClr: '#E7A020',
      boxBClr: '#A5EA6C',
      basetextClr: '#FFFFFF',
      buttontxtClr: '#7E36B8',
      grey: '#B4B4B8',
      headerClr: '#EAB16C',
      black: '#000000',
      red: '#FF0000 ',
    },
  },
  plugins: [],
};
export default config;
