<template>
  <div>
    <div>
      <yy-header></yy-header>
      <!-- 面包屑 -->
      <div class="f1">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/incubation' }"
            >资讯政策</el-breadcrumb-item
          >
          <el-breadcrumb-item>最新政策</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 内容 -->
      <div class="f2">
        <h2>国家税务总局：“大众创业 万众创新” 税费优惠政策指引</h2>
        <div>发表时间：2022-05-24 浏览量：435</div>
        <p>
          推进大众创业、万众创新，是发展的动力之源，也是常民之道、公平之计、强国之策，近年来，大众创业，万众创新持续向更大范围
          更高层次和事活
          歌合，对推动新旧动能转换和经济结构升级、扩大就业和改善民生，营造公平营商环境和创新社会氛围发挥了重要作用
        </p>
        <p>
          2022年，党中央、 国务之银 的组会式检费支持政策后， 税务总局围绕创
          的主要环节利 期。
        </p>
        <p>一。企业初创期税费优惠</p>
        <p>
          企业初创期税费优惠 ，除了普惠式粉收优惠
          小型微利企业、个体工商户，特殊群体创业或者吸纳特殊群 残孩大
          家等）还能享受特殊的税费优惠，同时，国家还对扶持企业成长的科技企业
          业和全人告给予税收优表 充分发挥集半效应，给予企业金融支持。具体包括：
        </p>
        <p>（一）小微企业税费优惠</p>
        <p>1小微企业增值税期末留抵退税</p>
        <p>2.符合条件的增值税小规模纳税人免征增值税</p>
        <p>3.增信税小规模纳税人阶段性免征增值税</p>
        <p>4.小型微利企业减免企业所得税</p>
        <p>5.个体工商户应纳税所得不超过100万元部分个人所得税减半征收</p>
        <p>6.增值税小规模纳税人减征地方“六税两费</p>
        <p>7.小型微利企业减征地方“六税两费</p>
        <p>8.个体工商户减征地方“六税两费</p>
        <p>9.制造业中小微企业延缓缴纳部分税费</p>
        <p>10.中小微企业购置设备器员按一定比例一次性税前扣除</p>
        <p>11.个体工商户阶段性缓缴企业社会保险费政策</p>
        <p>12.符合条件的企业暂免征收残疾人就业保障金</p>
        <p>13.符合条件的缴纳义务人免征有关政府性基金</p>
        <p>14.符合条件的企业减征残疾人就业保障金</p>
        <p>15.符合条件的缴纳义务人减征文化事业建设费</p>
        <p>16符合条件的增值税小规模纳税人免征文化事业建设器</p>
      </div>
      <yy-footer></yy-footer>
      <back-top></back-top>
      <div id="container"></div>
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
  mounted () {
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
};
</script>

<style scoped lang="scss">
@import "../assets/style/Policydetail.scss";
</style>
