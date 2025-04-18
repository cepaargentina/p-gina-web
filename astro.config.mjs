// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	site: 'https://cepaargentina.github.io',
	base: '/p-gina-web/',
	image: {
		service: passthroughImageService(),
	},
})
