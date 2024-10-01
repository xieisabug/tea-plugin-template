import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.tsx'),
			name: 'SamplePlugin',
			fileName: 'main',
			formats: ['es']
		},
		rollupOptions: {
			input: resolve(__dirname, 'src/main.tsx'),
			output: {
				entryFileNames: 'main.js',
				format: 'es',
			},
		},
	},
})
