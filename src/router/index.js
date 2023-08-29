import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '/src/views/HomePage.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
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
  history: createWebHashHistory(),
  routes,
});

export default router;
