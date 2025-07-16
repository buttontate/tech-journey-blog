/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [
            "dark",
            {
                "vikings": {
                    "primary": "#4F2683",
                    "secondary": "#FFC62F", 
                    "accent": "#FFFFFF",
                    "neutral": "#2a2e37",
                    "base-100": "#1a1625",
                    "base-200": "#16141f",
                    "base-300": "#13111a",
                    "info": "#3abff8",
                    "success": "#36d399", 
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
        ],
    },
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
            keyframes: {
                hop: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(3px)' },
                    '100%': { transform: 'translateY(-3px)' },
                },
            },
            animation: {
                hop: 'hop 300ms infinite'
            }
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
