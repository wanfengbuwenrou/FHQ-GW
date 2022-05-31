<template>
  <div class="header">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="col- left">
        <div>
          <img src="" alt="" />
        </div>
        <div @click="goindex">元蚁科技孵化器官网</div>
      </div>
      <div id="show1" class="col center">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#303133"
          active-text-color="red"
          router
          unique-opened
        >
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/total/software">
            <el-dropdown placement="bottom-start">
              <span class="el-dropdown-link"> 软件服务 </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>软件服务</el-dropdown-item>
                <el-dropdown-item>软件服务</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
          <el-menu-item index="/total/talent">
            <el-dropdown>
              <span class="el-dropdown-link">人才服务 </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>软件服务</el-dropdown-item>
                <el-dropdown-item>软件服务</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
          <el-menu-item index="/total/audit">
            <el-dropdown>
              <span class="el-dropdown-link"> 审计服务 </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>审计服务</el-dropdown-item>
                <el-dropdown-item>审计服务</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
          <el-menu-item index="/total/financial">
            <el-dropdown>
              <span class="el-dropdown-link"> 财税服务 </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>财税服务</el-dropdown-item>
                <el-dropdown-item>财税服务</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
          <el-menu-item index="/incubation">
            <el-dropdown>
              <span class="el-dropdown-link"> 资讯政策 </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>政策内容</el-dropdown-item>
                <el-dropdown-item>资讯政策</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="col right">登陆</div>
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
      activeIndex: "",
      activeIndex1: "",
    };
  },
  mounted() {
    let a = window.location.host;
    let b = window.location.href.split(`${a}`)[1];
    this.activeIndex = b;
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key);
      this.activeIndex = keyPath + "";
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
