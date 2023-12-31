<script setup>
	import { onMounted, ref } from "vue"
	import { fetchAllPosts } from "../services/posts.js"
	import { formatDate } from "../services/date.js"

	import GitHubIcon from "../components/GitHubIcon.vue"
	import LinkedInIcon from "../components/LinkedInIcon.vue"
	import cvIcon from "../components/cvIcon.vue"

	const posts = ref([])

	onMounted(async () => {
		posts.value = (await fetchAllPosts()).reverse().slice(0,3)
	})
</script>
<template>
	<div class="container max-w-screen-xl mx-auto px-2">
		<div class="text-center">
			<div class="flex justify-center mb-1">
				<img
					src="/pics/kezimana.jpg"
					alt="Image"
					class="shadow rounded-full align-middle border-none w-56 h-56"
				/>
			</div>

			<h6 class="font-medium text-gray-600 text-base md:text-lg uppercase mb-2">
				Aimé Angelo Kezimana
			</h6>

			<h1
				class="font-normal text-gray-900 text-3xl md:text-5xl leading-none mb-2"
			>
				Senior Software Engineer
			</h1>

			<p class="font-normal text-gray-600 text-md md:text-lg mb-4">
				I love everything related into technology and like to learn and build
				new things.
			</p>

			<a
				href="/assets/cv.pdf"
				class="block sm:inline mr-0 mb-2 sm:mr-2 sm:mb-0 px-2 pt-1 pb-2 md:px-3 md:pt-2 md:pb-3 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-500 hover:text-gray-70 transition ease-linear duration-500"
				target="_blank"
			>
				<span class="align-middle">
					<cvIcon class="inline-block align-text-top" />
					Get my CV
				</span>
			</a>
			<a
				href="https://github.com/angelokezimana"
				class="block sm:inline mr-0 mb-2 sm:mr-2 sm:mb-0 px-2 pt-1 pb-2 md:px-3 md:pt-2 md:pb-3 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-500 hover:text-gray-70 transition ease-linear duration-500"
				target="_blank"
			>
				<span class="align-middle">
					<GitHubIcon class="inline-block align-text-top" />
					Github
				</span>
			</a>
			<a
				href="https://www.linkedin.com/in/angelokezimana/"
				class="block sm:inline px-2 pt-1 pb-2 md:px-3 md:pt-2 md:pb-3 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-500 hover:text-gray-70 transition ease-linear duration-500"
				target="_blank"
			>
				<span class="align-middle">
					<LinkedInIcon class="inline-block align-text-top" />
					LinkedIn
				</span>
			</a>
		</div>
	</div>

	<section class="py-10 md:py-16">
		<div class="container max-w-screen-xl mx-auto px-4">
			<h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
				Latest Blog Posts
			</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					v-for="post in posts"
					:key="post.frontmatter.id"
					class="transition ease-in-out delay-100 bg-white px-8 py-10 rounded-md hover:shadow-2xl cursor-pointer"
				>
					<router-link
						:to="{ name: 'GetPost', params: { id: post.frontmatter.id } }"
					>
						<h4 class="font-medium text-gray-700 text-lg mb-4">
							{{ formatDate(new Date(post.frontmatter.date)) }}
						</h4>

						<p class="font-normal text-gray-500 text-md mb-4">
							{{ post.frontmatter.title }}
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
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>
