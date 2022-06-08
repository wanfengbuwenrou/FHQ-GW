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
  name: "Map",
  data() {
    return {
      map: null,
    };
  },

  mounted() {
       AMapLoader.load({
        key: "758a058ea9d1983deedafb8a1a4ed6cb", 
        version: "2.0", 
        plugins: ["AMap.Geocoder"],
      })
        .then((AMap) => {
          let map = new AMap.Map("container");         
          // 获得 地理位置信息
            AMap.plugin("AMap.Geocoder", function () {
              let geocoder = new AMap.Geocoder({
                city: "",
              });
              geocoder.getLocation('天津市滨海隐去博润商务1号楼', function (status, result) {
                let lng = result.geocodes[0].location.lng;
                let lat = result.geocodes[0].location.lat;
                showMap(lng, lat);
              });
            });
          function showMap(lng, lat) {
            var map = new AMap.Map("container", {
              zoom: 13, 
              center: [lng, lat], 
              viewMode: "3D", 
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
  },
  destroy () {
    map.destroy();
  },

};
</script>

<style scoped lang="scss">
@import "../assets/style/contactus.scss";
</style>
