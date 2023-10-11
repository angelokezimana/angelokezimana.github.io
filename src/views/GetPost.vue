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
	<section class="py-4 md:py-8">
		<div class="container max-w-screen-xl mx-auto px-4">
			<h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
				{{ post.frontmatter?.title }}
			</h1>
			<p>{{ post.frontmatter?.date }}</p>
			<div v-html="post.content" class="ml-4"></div>
		</div>
	</section>
</template>
