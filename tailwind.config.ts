import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      xs: { min: '360px', max: '380px' },
      s: { min: '380px', max: '420px' },
      ss: { min: '420px', max: '480px' },
      xl: { min: '1500px', max: '1800px' },
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
    },
  },
  plugins: [],
};
export default config;
