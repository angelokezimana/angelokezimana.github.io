<script setup>
	import { onMounted, ref } from "vue"
	import { useRoute } from "vue-router"
	import { getPost } from "../services/posts.js"

	const route = useRoute()

	const post = ref([])

	onMounted(async () => {
		const id = route.params.id
		post.value = await getPost(id)
	})
</script>
<template>
	<div v-if="post">
		<h1>#{{ post.frontmatter?.title }}</h1>
		<p>{{ post.frontmatter?.date }}</p>
		<div v-html="post.content" class="prose prose-a:text-blue-600 ml-1"></div>
		<hr />
	</div>
</template>
<style>

</style>
