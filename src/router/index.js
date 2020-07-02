import VueRouter from "vue-router";
import Vue from "vue";
import Homepage from "../pages/Homepage.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Product from "../pages/Product.vue";
import Basket from "../pages/Basket.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Homepage },
  { path: "/home", component: HelloWorld },
  { path: "/product/:id", component: Product },
  { path: "/basket", component: Basket }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
