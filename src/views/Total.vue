<template>
  <div>
    <div class="total">

      <yy-header></yy-header>
      <!-- 上方图片 -->
      <div class="pic">
        <img src="../assets/images/1.png" />
      </div>
      <!-- 导航 -->
      <el-container class="f2">
        <el-main>
           <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="black"
        active-text-color="red"
        router
        v-for="(item,i) in menu"
        :key="i"
      >
        <el-menu-item :index="item.path">{{item.title}}</el-menu-item>
      </el-menu>
        </el-main>
      </el-container>
      
      <router-view></router-view>
      <BackTop></BackTop>
      <yy-footer></yy-footer>
    </div>
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
      menu:[
        {title:'财税',path:'/total/financial'},
        {title:'审计',path:'/total/audit'},
        {title:'人才推荐',path:'/total/talent'},
        {title:'软件开发',path:'/total/software'},
      ]
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
      console.log(this.activeIndex);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/Total.scss';
</style>
