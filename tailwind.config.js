/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            }
        },
        extend: {
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
                'serif': ['"Dancing Script"', 'serif'],
            }
        }
    },

    daisyui: {
        darkTheme: false,
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    'primary': colors.amber[500],
                    'primary-content': 'white'
                },
            },
        ],
    },

    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui"),
    ],
};
