import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "quicksand": ["Quicksand", 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    rotate: {
        '270': '270deg',
    }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
            'bg-gradient': (angle) => ({
              'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
            }),
          },
          {
            // values from config and defaults you wish to use most
            values: Object.assign(
                theme('bgGradientDeg', {}), // name of config key. Must be unique
                {
                  10: '10deg', // bg-gradient-10
                  15: '15deg',
                  20: '20deg',
                  25: '25deg',
                  30: '30deg',
                  45: '45deg',
                  60: '60deg',
                  90: '90deg',
                  100: '100.06deg',
                  120: '120deg',
                  135: '135deg',
                }
            )
          }
      )
    })
  ],
};
export default config;
