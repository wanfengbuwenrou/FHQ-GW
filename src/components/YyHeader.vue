<template>
  <div class="header">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <!-- 抽屉开关 -->
      <div class="p-icon" @click="drawer = true">
        <i class="el-icon-s-operation"></i>
      </div>
      <div class="col- left">
        <div>
          <img src="../assets/images/logo.png" alt="" />
        </div>
        <div @click="goindex">元蚁科技孵化器</div>
      </div>
      <div id="show1" class="col center">
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#303133"
          active-text-color="red"
          router
          v-for="(item, i) in navmenu" :key="i" 
        >
        <!-- 一级菜单 -->
        <el-menu-item v-if="!navmenu.options" :index="item.path">
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
        <!-- 二级菜单 -->
          <el-submenu :index="item.path" v-else>
            <template  slot="title">{{ item.title }}</template>
              <el-menu-item
                v-for="(option, j) in item.options"
                :key="j"
                :index="item.path">
                {{ option }}
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="col right">
       请登录

      </div>
      <!-- 登陆图标 -->
      <div class="p-icon">
        <i class="el-icon-user"></i>
      </div>
      <!-- 抽屉 -->
      <el-drawer
        :visible.sync="drawer"
        direction="ltr"
        :modal="false"
        class="drawer"
        :before-close="handleClose"
        :show-close="false"
      >
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
          active-text-color="red"

        >
          <el-menu-item
            v-for="(item, i) in navmenu"
            :key="i"
            :index="item.path"
          >
            {{ item.title }}</el-menu-item
          >
        </el-menu>
      </el-drawer>
    </div>
    <!-- <div>
      <div>孵化器服务</div>
      <div>图标</div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      navmenu: [
        { title: "首页", path: "/index", options: [] },
        {
          title: "软件服务",
          path: "/total/software",
          options: ["软件开发", "软件出售"],
        },
        {
          title: "人才服务",
          path: "/total/talent",
          options: ["人才输送", "人才培养"],
        },
        {
          title: "审计服务",
          path: "/total/audit",
          options: ["审计服务", "审计查账"],
        },
        {
          title: "财税服务",
          path: "/total/financial",
          options: ["财税服务", "财税服务"],
        },
        {
          title: "资讯服务",
          path: "/incubation",
          options: ["最新资讯", "资讯政策"],
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
    handleSelect(key, keyPath) {
     
    },
    handleClose(done) {
      this.drawer = false;
    },
    goindex() {
      this.$router.push("/index");
    },
  },
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/style/Header.scss";
</style>
