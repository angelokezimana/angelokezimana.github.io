import { createRouter, createWebHistory } from "vue-router";
import HomePage from '/src/views/HomePage.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
//   {
//     path: "/about",
//     name: "About",
//     component: () => import("/src/views/about.vue"),
//   },
  {
    path: "/posts",
    name: "AllPosts",
    component: () => import("/src/views/AllPosts.vue"),
  },
  {
    path: "/posts/:id",
    name: "GetPost",
    component: () => import("/src/views/GetPost.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
