export default {
	semi: false,
	singleQuote: true,
	tabWidth: 1,
	useTabs: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
