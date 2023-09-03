/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				retro: {
					DEFAULT: '#7541e4',
					black: 'rgba(0,0,0,0.2)',
					green: '#BFFF0A',
					yellow: '#FFBA0A'
				}
			},
			fontFamily: {
				krona: ['KronaOne', 'system-ui', 'sans-serif']
			},
			backgroundImage: {
				'retro-bg': 'linear-gradient(90deg, #2D0D38 0%, 62.9447%, #090C25 100%)'
			}
		}
	},
	safelist: [
		'retro-bg',
		'border-retro-yellow',
		'border-retro-green',
		'bg-retro-yellow',
		'bg-retro-green'
	],
	plugins: [],
}
