<script setup>
	import { onMounted, ref } from "vue"
	import { useRoute } from "vue-router"
	import { getPost } from "../services/posts.js"
	import { formatDate } from "../services/date.js"

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
			<p>{{ formatDate(new Date(post.frontmatter?.date)) }}</p>
			<div v-html="post.content" class="ml-4"></div>
			<button
				@click="$router.back()"
				class="mt-4 px-2 py-1 font-semibold text-md rounded-md bg-gray-700 text-white hover:bg-gray-500 transition ease-linear duration-500"
			>
				&larr;Go Back
			</button>
		</div>
	</section>
</template>
