<script setup>
import NavBar from "./components/NavBar.vue";
</script>
<template>
  <div>
    <NavBar />
    <main class="container mx-auto mt-4">
      <router-view />
    </main>
  </div>
</template>
