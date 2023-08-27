<script setup></script>
<template>
  <nav>
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </div>
    <ul>
      <li>
        <router-link :to="{ name: 'AllPosts' }">Blogs</router-link>
      </li>
    </ul>
  </nav>
</template>
