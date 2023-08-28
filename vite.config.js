import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Markdown from "unplugin-vue-markdown/vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
		Markdown(),
	],
	base: "/",
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.toString()
					}
				},
			},
		},
	},
})
