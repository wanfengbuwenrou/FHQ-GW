<template>
  <div class="header">
    <div class="container">
      <i class="el-icon-user"></i>
      <div class="col-lg-3 col-xs-11 left">
        <div>
          <img src="../assets/images/logo.png" alt="" />
        </div>
        <div @click="goindex">元蚁科技孵化器</div>
      </div>
      <div class="col-lg-8 col-xs-0 center">
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#303133"
          active-text-color="red"
          router
          v-for="(item, i) in navmenu"
          :key="i"
        >
          <el-menu-item :index="item.path">{{ item.title }}</el-menu-item>
          <!-- <el-submenu
            :popper-append-to-body="false"
            v-for="(item, i) in navmenu"
            :key="i"
            :index="item.path"
          >
            <template slot="title">{{ item.title }}</template>
            <el-menu-item
              v-for="(option, j) in item.options"
              :key="j"
              :index="item.path"
            >
              {{ option }}
            </el-menu-item>
          </el-submenu> -->
        </el-menu>
      </div>
      <div class="col-lg-1 col-xs-1 right">登录</div>
      <!-- 抽屉 -->
      <i @click="drawer=true" class="el-icon-s-operation"></i>
      <div class="menu2">
      <el-drawer
          :visible.sync="drawer"
          direction="ttb"
          :modal="false"
          class="drawer"
          :before-close="handleClose"
          :show-close="false"
          destroy-on-close
        >
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="#303133"
            active-text-color="red"
            router
             v-for="(item, i) in navmenu"
              :key="i"
          >
            <el-menu-item :index="item.path">{{item.title}}</el-menu-item>

            <!-- <el-submenu
              v-for="(item, i) in navmenu"
              :key="i"
              :index="item.path"
            >
              <template slot="title">{{ item.title }}</template>
              <el-menu-item
                v-for="(option, j) in item.options"
                :key="j"
                :index="item.path"
              >
                {{ option }}
              </el-menu-item>
            </el-submenu> -->
          </el-menu>
        </el-drawer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      navmenu: [
        { title: "首页", path: "/index" },
        {
          title: "软件服务",
          path: "/total/software",
        },
        {
          title: "人才服务",
          path: "/total/talent",
        },
        {
          title: "审计服务",
          path: "/total/audit",
        },
        {
          title: "财税服务",
          path: "/total/financial",
        },
        {
          title: "资讯服务",
          path: "/incubation",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {},
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
