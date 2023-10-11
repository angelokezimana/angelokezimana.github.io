<script setup>
	import NavBar from "./components/NavBar.vue"
	import TheFooter from "./components/TheFooter.vue"
</script>
<template>
	<header class="py-4 md:py-8">
		<div class="container max-w-screen-xl mx-auto px-2">
			<NavBar />
		</div>
	</header>
	<main>
		<router-view />
	</main>
	<TheFooter />
</template>
