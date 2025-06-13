// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                figtree: ['Figtree', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                grotesk: ['"Space Grotesk"', 'sans-serif'],
                kufam: ['Kufam', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['64px', {
                    lineHeight: '72px',
                    letterSpacing: '-0.02em',
                    animation: {
                        'spin-slow': 'spin 6s linear infinite',
                    },
                    plugins: [
                        require('@tailwindcss/line-clamp'),
                    ],
                }],
            },
        },
    },
};
