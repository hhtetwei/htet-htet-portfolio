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
    colors: {
      baseClr: '#9D76C1',
      textClr: '#FFF9F9',
      boxAClr: '#E7A020',
      boxBClr: '#A5EA6C',
      basetextClr: '#FFFFFF',
      buttontxtClr: '#7E36B8',
    },
  },
  plugins: [],
};
export default config;
