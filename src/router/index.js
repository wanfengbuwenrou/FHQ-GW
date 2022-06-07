import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  // 首页
  {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
    children: [],
    meta: {
      title: "元蚁科技",
    },
  },
  // 关于我们
  {
    path: "/aboutme",
    name: "aboutme",
    component: () => import("../views/Aboutme.vue"),
    meta: {
      //
      title: "公司简介",
    },
  },
  {
    path: "/total",
    name: "total",
    component: () => import("../views/Total.vue"),
    children: [
      // 财务页面
      {
        path: "financial",
        name: "financial",
        component: () => import("../views/Financial.vue"),
        meta: {
          title: "财务",
        },
      },
      // 审计页面
      {
        path: "audit",
        name: "audit",
        component: () => import("../views/Audit.vue"),
        meta: {
          title: "审计",
        },
      },
      // 人才推荐
      {
        path: "talent",
        name: "talent",
        component: () => import("../views/Talent.vue"),
        meta: {
          title: "人才推荐",
        },
      },
      // 软件开发
      {
        path: "software",
        name: "software",
        component: () => import("../views/Software.vue"),
        meta: {
          title: "软件开发",
        },
      },
    ],
  },
  // 资讯政策
  {
    path: "/incubation",
    name: "incubation",
    component: () => import("../views/Incubation.vue"),
    meta: {
      title: "资讯政策",
    },
  },
  // 最新政策详情
  {
    path: "/policydetail",
    name: "policydetail",
    component: () => import("../views/Policydetail.vue"),
    meta: {
      title: "最新政策",
    },
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: () => import('../views/Contactus.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '*',
    redirect:'/404'
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 }),
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
