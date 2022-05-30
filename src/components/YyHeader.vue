<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="col- left">
        <div>
          <img src="" alt="" />
        </div>
        <div>元蚁科技孵化器官网</div>
      </div>
      <div id="show1" class="col center">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#303133"
          active-text-color="red"
          v-model="activeIndex"
          router
        >
          <el-menu-item index="/index">首页</el-menu-item>
          <el-submenu index="/total/aboutme">
            <template slot="title"
              ><div @click="goaboutme">关于我们</div></template
            >
            <el-menu-item index="/total/aboutme" class="twomenu"
              >软件开发</el-menu-item
            >
            <el-menu-item index="/total/aboutme" class="twomenu"
              >公司介绍</el-menu-item
            >
          </el-submenu>
          <el-menu-item index="/total/aboutme">财务税筹</el-menu-item>
          <el-menu-item index="/total/aboutme">审计</el-menu-item>
          <el-menu-item index="/total/inforpolicy">资讯政策</el-menu-item>
          <el-menu-item index="/total/incubation">孵化服务</el-menu-item>
        </el-menu>
      </div>
      <div class="col right" @click="show" :class="{}">登陆</div>
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
    goaboutme() {
      this.$router.push("/total/aboutme");
    },
    show(){
      let a=document.getElementById('show1')
      let left=document.getElementsByClassName('left')
      let right=document.getElementsByClassName('right')
     $(a).css("display","flex")
     $(left).css('display',"none")
     $(right).css('display',"none")
    }
  },
  watch: {},
};
</script>

<style lang="scss">
@import '../assets/style/Header.scss';
</style>
