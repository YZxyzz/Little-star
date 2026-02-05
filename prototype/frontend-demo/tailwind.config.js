/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // 核心背景色
                // Moimoi Vibrant Palette
                'hot-pink': '#FF8FAB',
                'fresh-green': '#B0E57C',
                'sky-blue': '#74C0FC',
                'sunshine-yellow': '#FFD43B',
                'lilac': '#CCBCFF',
                'super-black': '#000000',
                'soft-gray': '#868e96',
            },
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
            },
            borderRadius: {
                'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
                'blob-2': '60% 40% 30% 70% / 60% 30% 70% 40%',
            },
            boxShadow: {
                'pop': '0 10px 20px -5px rgba(0, 0, 0, 0.1)',
                'glow-pink': '0 0 20px rgba(255, 143, 171, 0.5)',
            }
        },
    },
    plugins: [],
}
