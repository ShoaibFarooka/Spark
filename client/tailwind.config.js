/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8B5CF6', // Vibrant purple
                    dark: '#7C3AED',
                    light: '#A78BFA',
                },
                secondary: {
                    DEFAULT: '#EC4899', // Vibrant pink
                    dark: '#DB2777',
                    light: '#F472B6',
                },
                dark: {
                    DEFAULT: '#0F172A', // Dark blue-gray
                    lighter: '#1E293B',
                    darker: '#020617',
                },
                accent: {
                    DEFAULT: '#06B6D4', // Vibrant cyan
                    dark: '#0891B2',
                    light: '#22D3EE',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backdropBlur: {
                xl: '24px',
            },
        },
    },
    plugins: [],
};
