<script setup>
	import BlogIcon from "./BlogIcon.vue"
</script>
<template>
	<nav class="flex items-center justify-between">
		<!-- <img src="assets/image/navbar-logo.png" alt="Logo" /> -->
		<router-link
			:to="{ name: 'Home' }"
			class="text-2xl font-semibold whitespace-nowrap text-gray-800"
			>KAA</router-link
		>

		<router-link
			:to="{ name: 'AllPosts' }"
			class="px-2 py-2 md:px-3 md:py-3 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-500 hover:text-gray-70 transition ease-linear duration-500"
		>
			<span class="align-middle">
				<BlogIcon class="inline-block" />
				Blogs
			</span>
		</router-link>
	</nav>
</template>
