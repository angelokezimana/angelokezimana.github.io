<script setup>
	import { onMounted, ref } from "vue"
	import { fetchAllPosts } from "/src/services/posts.js"

	const posts = ref([])

	onMounted(async () => {
		posts.value = await fetchAllPosts()
	})
</script>
<template>
  <div>
    <h1>Blog Posts</h1>
		<div v-for="post in posts" :key="post.frontmatter.id">
			<router-link :to="{ name: 'GetPost',params: { id: post.frontmatter.id }}">{{ post.frontmatter.title }}</router-link>
			<hr />
		</div>
	</div>
</template>
<style>

</style>
