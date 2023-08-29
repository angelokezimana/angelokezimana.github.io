<script setup>
	import { ref } from "vue"

	const open = ref(false)
</script>
<template>
	<nav class="bg-white border-gray-200 dark:bg-gray-900">
		<div
			class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
		>
			<router-link :to="{ name: 'Home' }" class="flex items-center">
				<span
					class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>KAA</span
				>
			</router-link>
			<button
				@click="open = !open"
				data-collapse-toggle="navbar-default"
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-default"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					v-if="!open"
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>

				<svg
          v-else
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="100"
					height="100"
					viewBox="0,0,256,256"
				>
					<g
						fill="#aeb2b9"
						fill-rule="nonzero"
						stroke="none"
						stroke-width="1"
						stroke-linecap="butt"
						stroke-linejoin="miter"
						stroke-miterlimit="10"
						stroke-dasharray=""
						stroke-dashoffset="0"
						font-family="none"
						font-weight="none"
						font-size="none"
						text-anchor="none"
						style="mix-blend-mode: normal"
					>
						<g transform="scale(8,8)">
							<path
								d="M7.21875,5.78125l-1.4375,1.4375l8.78125,8.78125l-8.78125,8.78125l1.4375,1.4375l8.78125,-8.78125l8.78125,8.78125l1.4375,-1.4375l-8.78125,-8.78125l8.78125,-8.78125l-1.4375,-1.4375l-8.78125,8.78125z"
							></path>
						</g>
					</g>
				</svg>
			</button>
			<div
				:class="[open ? 'block' : 'hidden']"
				class="w-full md:block md:w-auto"
				id="navbar-default"
			>
				<ul
					class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
				>
					<li>
						<a
							href="https://github.com/angelokezimana"
							class="btn btn-link"
							target="_blank"
							>Github</a
						>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/angelokezimana/"
							class="btn btn-link"
							target="_blank"
							>LinkedIn</a
						>
					</li>
					<li>
						<router-link
							:to="{ name: 'AllPosts' }"
							class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
							>Blogs</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
