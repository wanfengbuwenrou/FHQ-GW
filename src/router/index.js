import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/index",
  },
   // 首页
   {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/total",
    name: "total",
    component: () => import("../views/Total.vue"),
    children: [
      {
        path: "aboutme",
        name: "aboutme",
        component: () => import("../views/Aboutme.vue"),
      },
      {
        path: "inforpolicy",
        name: "inforpolicy",
        component: () => import("../views/Inforpolicy.vue"),
      },
      {
        path: "incubation",
        name: "incubation",
        component: () => import("../views/Incubation.vue"),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
