/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'/styles/*.{css,scss,sass}',
		'./public/styles/*.{css,scss,sass}',
		'./public/styles/**/*.{css,scss,sass}', // Add this line
	],
	theme: {
		extend: {
			backdropBlur: {
				'4xl': '96px'
			}
		},
	},
	plugins: [],
}
