<script setup>
import { importModules } from "/src/services/posts.js";

let importComponents = importModules();
</script>
<template>
  <div>
    <h1>Blog Posts</h1>
    <div v-for="PostComponent in importComponents">
      <component :is="PostComponent" class="prose prose-a:text-blue-600 ml-1" />
      <hr>
    </div>
  </div>
</template>
<style>

</style>
