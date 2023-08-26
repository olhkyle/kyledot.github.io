/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				blue: {
					primary: 'var(--color-primary)',
					subPrimary: 'var(--color-sub-primary)',
					sub: 'var(--color-sub-blue)',
					accent: 'var(--color-accent)',
					hover: 'var(--color-accent)',
					extraLight: 'var(--color-extralight-primary)',
				},
				dark: {
					primary: 'var(--color-text-dark)',
				},
			},
		},
	},
	plugins: ['gatsby-plugin-postcss'],
};
