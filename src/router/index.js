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
    children:[
      
    ]
  },
  // 关于我们
  {
    path: "/aboutme",
    name: "aboutme",
    component: () => import("../views/Aboutme.vue"),
  },
  {
    path: "/total",
    name: "total",
    component: () => import("../views/Total.vue"),
    children: [
      // 财务页面
      {
        path: 'financial',
        name: 'financial',
        component: () => import('../views/Financial.vue'),
      },
      // 审计页面
      {
        path: 'audit',
        name: 'audit',
        component: () => import('../views/Audit.vue'),
      },
      // 人才推荐
      {
        path: 'talent',
        name: 'talent',
        component: () => import('../views/Talent.vue'),
      },
      // 软件开发
      {
        path: 'software',
        name: 'software',
        component: () => import('../views/Software.vue'),
      },
    ],
  },
  // 资讯政策
  {
    path: "/incubation",
    name: "incubation",
    component: () => import("../views/Incubation.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
