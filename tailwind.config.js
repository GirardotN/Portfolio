/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#1a1a1a', // Anthracite
                surface: '#2d2d2d',
                primary: '#3b82f6', // Blue code
                secondary: '#cbd5e1', // Light gray
            },
            fontFamily: {
                mono: ['"Fira Code"', 'monospace'], // Codeur style
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
