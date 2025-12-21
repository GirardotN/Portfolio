/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#09090b', // Zinc 950
                surface: '#18181b', // Zinc 900
                surfaceHighlight: '#27272a', // Zinc 800
                text: '#e4e4e7', // Zinc 200
                textMuted: '#a1a1aa', // Zinc 400
                primary: '#f97316', // Orange 500 (Industrial Accent)
                secondary: '#52525b', // Zinc 600
                border: '#27272a', // Zinc 800
            },
            fontFamily: {
                mono: ['"Fira Code"', 'monospace'],
                sans: ['"Space Grotesk"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
