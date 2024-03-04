/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		screens: {
			lsm: {'max': '500px'},
			sm: '500px',
			lmd: {'max': '768px'},
			md: '768px',
			llg: {'max': '976px'},
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				primary: "#6173FF",
				primaryh: "#8896FF",
				secondary: "#26BAA4",
				secondaryh: "#5DCCBB",
				cdark: "#4C545D",
				cgray: "#9FABB2",
			},
			fontFamily: {
				sans: ["Bai Jamjuree", "sans-serif"],
			},
		},
	},
	plugins: [],
};

