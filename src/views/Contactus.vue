<template>
  <div>
    <div class="contactus">
      <!-- 头部 -->
      <yy-header></yy-header>
      <!-- f1 -->
      <div class="f1">
        <img src="../assets/images/banner3.png" alt="" />
      </div>
      <!-- f2 -->
      <div class="f2">
        <div class="one">
          <div>
            <i class="el-icon-s-promotion"></i>
          </div>
          <div>联系电话</div>
          <div>座机</div>
          <div>18469845623</div>
        </div>
        <div class="two">
          <div><img src="../assets/images/wx2.svg" alt="" /></div>
          <div>微信</div>
          <div>元蚁科技孵化器</div>
          <div>HJGJ3215</div>
        </div>
        <div class="one">
          <div>
            <i class="el-icon-location-outline"></i>
          </div>
          <div>公司地址</div>
          <div>天津市滨海新区太湖地铁站博瑞广场</div>
        </div>
        <div class="one">
          <div>
            <i class="el-icon-message"></i>
          </div>
          <div>公司邮箱</div>
          <div>元蚁科技孵化器</div>
          <div>yykj@vip.163.com</div>
        </div>
      </div>
      <!-- f3 -->
      <div class="f3">
        <div id="container"></div>
      </div>
      <BackTop></BackTop>
      <!-- 底部 -->
      <yy-footer></yy-footer>
    </div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import YyHeader from "@/components/YyHeader.vue";
import YyFooter from "@/components/YyFooter.vue";
import BackTop from "@/components/BackTop.vue";
export default {
  components: { YyHeader, YyFooter, BackTop },
  data() {
    return {};
  },
  created() {
    AMapLoader.load({
      key: "758a058ea9d1983deedafb8a1a4ed6cb", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [],
    })
      .then((AMap) => {
            let map = new AMap.Map("container", {
              zoom: 13, //级别
              center: [116.397428, 39.90923], //中心点坐标
              viewMode: "3D", //使用3D视图
            });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
@import "../assets/style/contactus.scss";
</style>
