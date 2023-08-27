import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "unplugin-vue-markdown/vite";
import hljs from "highlight.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return (
                '<pre class="hljs"><code>' +
                hljs.highlight(str, { language: lang, ignoreIllegals: true })
                  .value +
                "</code></pre>"
              );
            } catch (__) {}
          }
        },
      },
    }),
  ],
  build: {
    sourcemap: true,
  },
});
