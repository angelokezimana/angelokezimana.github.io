<script setup>
	import { onMounted, ref } from "vue"
	import { fetchAllPosts } from "../services/posts.js"
	import { formatDate } from "../services/date.js"

	const posts = ref([])

	onMounted(async () => {
		posts.value = await fetchAllPosts()
	})
</script>
<template>
	<section class="py-4 md:py-8">
		<div class="container max-w-screen-xl mx-auto px-4">
			<h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
				Blog Posts
			</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					v-for="post in posts"
					:key="post.frontmatter.id"
					class="transition ease-in-out delay-100 bg-white px-8 py-10 rounded-md hover:shadow-2xl"
				>
					<h4 class="font-medium text-gray-700 text-lg mb-4">
						{{ formatDate(new Date(post.frontmatter.date)) }}
					</h4>

					<p class="font-normal text-gray-500 text-md mb-4">
						<router-link
							:to="{ name: 'GetPost', params: { id: post.frontmatter.id } }"
						>
							{{ post.frontmatter.title }}
						</router-link>
					</p>

					<div class="relative">
						<h6 class="font-semibold text-gray-500 text-md relative z-10">
							<router-link
								:to="{ name: 'GetPost', params: { id: post.frontmatter.id } }"
							>
								Read
							</router-link>
						</h6>
						<span
							class="w-8 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"
						></span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
