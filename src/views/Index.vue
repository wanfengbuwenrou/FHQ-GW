<template>
  <div>
    <yy-header></yy-header>
    <router-view></router-view>
    <!-- 轮播图 -->
    <yy-swiper></yy-swiper>
    <el-container class="f3">
      <el-main class="one">
        <div>
          <span>关于我们</span>
          <span>ABOUT US</span>
        </div>
        <div>
          北京奥宇科技企业孵化器有限责任公司成立于2002年5月21日，注册资金12亿元，公司地址位
          于北京市大兴区金星路12号院2号楼。公司运营管理的奥宇科技英巢园区以电子信息、文化创意
          和节能环保为主要孵化方向，园区占地面积约40亩，总建筑面积约9万平方米，其中孵化总面积
          约5万平方米，入驻企业共计300余家。奥宇孵化器是国家科技部火炬中心认定的“国家级解化
          器和“国家级众创空间”，国家工信部认定的广国家小型微型企业创业创新示范基地”，目
          前是大兴区唯——家同时获得国家科技部和国家工信部认定为国家级资质的标杆孵化器。经过
          不断地摸索和深化，奥宇孵化器打造了“创业辅导、投融资、科技支持”和“基础孵化”的孵
          化服务模式，为创业团队、初创企业和高成长企业提供有针对性的孵化服务，形成“场地+资金
          +专业服务+科技中介，的运营模式。奥宇孵化器通过资源整合，聚集各类创新要索，为创业企
          业提供全方位、多层次和多元化的一条龙服务，营造良好的创新创业生态环境，形成组织体系
          网络化创业服务专业化、服务体系规范化的发展局面，致力打造京南区域标杆孵化器。
        </div>
        <div @click="goaboutme">了解更多></div>
      </el-main>
      <el-main class="two">
        <div>
          <el-image
      style="width: 100%; height: 450px"
      :src="url"
      lazy
></el-image>
        </div>
      </el-main>
    </el-container>
    <!-- 孵化服务 -->
    <el-container class="f4">
      <el-header class="top">
        <div>
          <span>孵化服务</span>
          <span>INCUBATION SERVICES</span>
        </div>
      </el-header>
      <el-main class="main1">
        <div>
          <div>{{ FhFw }}</div>
          <div>
            <div>
              <img src="" alt="">
            </div>
          </div>
          <div>
            <div v-for="a in 6" :key="a">2</div>
          </div>
        </div>
      </el-main>
    </el-container>
    <!-- 合作企业 -->
    <el-container class="f4">
      <el-header class="top">
        <div>
          <span>合作企业</span>
          <span>COOPERATIVEENTERPRISE</span>
        </div>
      </el-header>
      <el-main class="main2">
        <div>
          <div v-for="a in 6" :key="a">3</div>
        </div>
      </el-main>
    </el-container>
    <yy-footer></yy-footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
import YySwiper from "@/components/YySwiper.vue";
import YyFooter from "@/components/YyFooter.vue";
import YyHeader from "@/components/YyHeader.vue";
import BackTop from "@/components/BackTop.vue";
export default {
  components: { YySwiper, YyFooter, YyHeader, BackTop },
  data() {
    return {
      FhFw: "针对科技企业孵化，孵化器对入孵的企业在提供基础服务的同时，开展了多样化的增值服务，建设了以软件服务，财税服务，人力资源服务，企业诊断服务，创业培训服务，审计服务，企业财务管理服务，投融资服务，市场推广服务，创业服务等多种服务为内容的孵化服务体系",
    };
  },
  methods: {
    goaboutme(){
      this.$router.push('/index/aboutme')
    }
  },
};
</script>

<style lang="scss">
@import "../assets/style/Index.scss";
</style>
