import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '3D Printing',
			customCss: [
				'./src/styles/home.css'
			],
			social: {
				github: 'https://github.com/bonmast/3dprinting',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'intro' },
				},
			],
		}),
	],
});
