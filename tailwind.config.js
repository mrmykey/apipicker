module.exports = {
	purge: [
		'./src/**/*.svelte',
		'./public/*.html'
	],
	theme: {
		extend: {},
		fontFamily: {
			'mono': ['Ubuntu Mono', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
			'sans': ['"Segoe UI"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
		},
		backgroundColor: theme => ({
			...theme('colors'),
			'primary': 'var(--bg-primary)',
			'secondary': 'var(--bg-secondary)',
			'badge-blue': 'var(--badge-bg-blue)',
			'badge-green': 'var(--badge-bg-green)',
			'badge-orange': 'var(--badge-bg-orange)',
			'gh-btn-left': 'var(--bg-gh-btn-left)',
			'gh-btn-hover': 'var(--bg-gh-btn-hover)'
		}),
		textColor: theme => ({
			...theme('colors'),
			'primary': 'var(--text-primary)',
			'badge-blue': 'var(--badge-text-blue)',
			'badge-green': 'var(--badge-text-green)',
			'badge-orange': 'var(--badge-text-orange)',
		}),
		borderColor: theme => ({
			...theme('colors'),
			'gh-btn': 'var(--border-gh-btn)',
			'primary': 'var(--border-card)',
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
