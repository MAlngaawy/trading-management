module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#3AFD9F',
                second: '#2BA7ED',
                mainGray: '#f4f2ff',
                secondGray: '#6e6893',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            keyframes: {
                showUp: {
                    '0%': { transform: 'scale(.5)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            animation: {
                showUp: 'showUp .2s ease-in-out',
            },
        },
    },
    plugins: [],
}
