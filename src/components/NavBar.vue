<script setup>
	//
</script>
<template>
	<nav class="flex items-center justify-between mb-8">
		<!-- <img src="assets/image/navbar-logo.png" alt="Logo" /> -->
		<router-link :to="{ name: 'Home' }" class="text-2xl font-semibold whitespace-nowrap text-gray-800">KAA</router-link>

		<router-link
			:to="{ name: 'AllPosts' }"
			class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
		>
			Blogs
		</router-link>
	</nav>
</template>
