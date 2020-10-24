import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../views/Homepage.vue";
import Moderate from "../views/Moderate.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/moderate",
    name: "Moderate",
    component: Moderate
  }
];

const router = new VueRouter({
  routes
});

export default router;
