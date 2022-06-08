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
            v-for="(item, i) in menu"
            :key="i"
          >
            <el-menu-item :index="item.path">{{ item.title }}</el-menu-item>
          </el-menu>
        </el-main>
      </el-container>

      <router-view></router-view>
      <BackTop></BackTop>
      <yy-footer></yy-footer>
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
import YyHeader from "@/components/YyHeader.vue";
import YyFooter from "@/components/YyFooter.vue";
import BackTop from "@/components/BackTop.vue";
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  components: { YyHeader, YyFooter, BackTop },
  data() {
    return {
      activeIndex: "",
      menu: [
        { title: "财税", path: "/total/financial" },
        { title: "审计", path: "/total/audit" },
        { title: "人才推荐", path: "/total/talent" },
        { title: "软件开发", path: "/total/software" },
      ],
    };
  },
  mounted() {
    // 配置地图
    AMapLoader.load({
      key: "758a058ea9d1983deedafb8a1a4ed6cb", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [],
    })
      .then((AMap) => {
        this.map = new AMap.Map("container");
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    handleSelect(key, keyPath) {},
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/Total.scss";
</style>
