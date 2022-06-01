<template>
  <div>
    <yy-header></yy-header>
    <!-- 上方图片 -->
    <div>
      <img style="width: 100%; height: 40rem" src="../assets/images/1.png" />
    </div>
    <!-- 导航 -->
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="black"
      active-text-color="#36d"
      router
    >
      <el-menu-item index="/total/financial">财税</el-menu-item>
      <el-menu-item index="/total/audit">审计</el-menu-item>
      <el-menu-item index="/total/talent">人才推荐</el-menu-item>
      <el-menu-item index="/total/software">软件开发</el-menu-item>
    </el-menu> -->
    <div class="tag">
      <div>财税</div>
      <div>审计</div>
      <div>人才推荐</div>
      <div>软件开发</div>
    </div>
    
    <router-view></router-view>
    <BackTop></BackTop>
    <yy-footer></yy-footer>
  </div>
</template>

<script>
import YyHeader from "@/components/YyHeader.vue";
import YyFooter from "@/components/YyFooter.vue";
import BackTop from "@/components/BackTop.vue";
export default {
  components: { YyHeader, YyFooter, BackTop },
  data() {
    return {
      activeIndex: '',
    }
  },
  mounted() {
    let a = window.location.host;
    let b = window.location.href.split(`${a}`)[1];
    this.activeIndex = b;
  },
  methods: {
    handleSelect(key,keyPath) {
      this.activeIndex = keyPath + "";
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/Total.scss';
</style>
