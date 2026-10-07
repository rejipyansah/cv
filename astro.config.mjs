// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL,
	devToolbar: { enabled: false },
	i18n: {
		defaultLocale: 'id',
		locales: ['id', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
