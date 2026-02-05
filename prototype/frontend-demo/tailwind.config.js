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
                'cream': '#FFFBF0',

                // 品牌色
                'star': {
                    DEFAULT: '#FFC800', // 蛋黄
                    dark: '#E5B000',    // 阴影色
                    light: '#FFD700',   // 高光
                },

                // 辅助色 (马卡龙系)
                'soft-green': '#88D66C',
                'magic-purple': '#B497FF',
                'sky-blue': '#74C0FC',

                // 文本色
                'ink': '#2C2C2C',
                'subtext': '#8E8E93',
            },
            fontFamily: {
                sans: ['"Nunito"', '"Rounded Mplus 1c"', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
                '3d-star': '0 6px 0 #E5B000',
                '3d-green': '0 6px 0 #72B859',
            }
        },
    },
    plugins: [],
}
