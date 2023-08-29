<script setup>
	import { onMounted, ref } from "vue"
	import { fetchAllPosts } from "../services/posts.js"

	const posts = ref([])

	onMounted(async () => {
		posts.value = await fetchAllPosts()
	})
</script>
<template>
	<div>
		<h1 class="text-3xl text-center font-bold mb-4">Blog Posts</h1>
		<div v-for="post in posts" :key="post.frontmatter.id">
			<p class="m-4">
				<router-link
					:to="{ name: 'GetPost', params: { id: post.frontmatter.id } }"
					class="text-blue-400 underline p-4"
					>{{ post.frontmatter.title }}</router-link
				>
			</p>
		</div>
	</div>
</template>
<style>

</style>
