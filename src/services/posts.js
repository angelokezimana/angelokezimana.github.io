import { Marked } from "marked"
import { markedHighlight } from "marked-highlight"
import fm from "front-matter"
import hljs from "highlight.js"

const marked = new Marked(
	markedHighlight({
		langPrefix: "hljs language-",
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : "plaintext"
			return hljs.highlight(code, { language }).value
		},
	})
)

export const fetchAllPosts = async () => {
	try {
		let getAllPosts = []
		const posts = import.meta.glob("../posts/*.md")
		for (const post in posts) {
			const fileName = post.substring(
				post.indexOf("posts/") + 6,
				post.lastIndexOf(".md")
			)

			const markdownText = await import(`../posts/${fileName}.md?raw`)

			const { attributes: frontmatter } = fm(markdownText.default)

			getAllPosts.push({
				frontmatter,
			})
		}
		return await Promise.resolve(getAllPosts)
	} catch (error) {
		return await Promise.reject(error)
	}
}

export const getPost = async (fileName) => {
	try {
		const markdownText = await import(`../posts/${fileName}.md?raw`)

		const { attributes: frontmatter, body: content } = fm(markdownText.default)

		const htmlContent = marked.parse(content)

		const post = {
			frontmatter: frontmatter,
			content: htmlContent,
		}
		return await Promise.resolve(post)
	} catch (error) {
		return await Promise.reject(error)
	}
}
