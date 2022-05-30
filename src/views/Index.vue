<template>
  <div >
    <yy-header ></yy-header>
    <!-- 轮播图 -->
    <yy-swiper></yy-swiper>
    <el-container class="contentnav">
      <el-main class="content f1 one">
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
        <div>了解更多></div>
      </el-main>
      <el-main class="content f2 two">
        <div>
          <img
            src="https://tse1-mm.cn.bing.net/th/id/R-C.901f8ebdab22d065baefeae6c2701cc0?rik=Z3Hew18zFaF%2bLQ&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2f20120418lw%2f13.jpg&ehk=Es5ZGH90h%2foCghvlIwdKfUiqpO05gLSgOEBU2i0Mwok%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </el-main>
    </el-container>
    <el-container>
      <el-main>

      </el-main>
    </el-container>
    <yy-footer></yy-footer>
  </div>
</template>

<script>
import YySwiper from '@/components/YySwiper.vue';
import YyFooter from '@/components/YyFooter.vue';
import YyHeader from '@/components/YyHeader.vue';
export default {
  components: { YySwiper, YyFooter, YyHeader },
  data() {
    return {
      data: [
        {
          title: "[园区新闻]今年河北将开展30次京津冀产业链对接活动",
          date: "05-24",
        },
        {
          title: "[园区新闻]今年河北将开展30次京津冀产业链对接活动",
          date: "05-24",
        },
        {
          title: "[园区新闻]今年河北将开展30次京津冀产业链对接活动",
          date: "05-24",
        },
        {
          title: "[园区新闻]今年河北将开展30次京津冀产业链对接活动",
          date: "05-24",
        },
        {
          title: "[园区新闻]今年河北将开展30次京津冀产业链对接活动",
          date: "05-24",
        },
        {
          title: "[园区新闻]今年河北将开展30次京津冀产业链对接活动",
          date: "05-24",
        },
      ],
    };
  },
  methods: {
   
  },
};
</script>

<style lang="scss">
@import '../assets/style/Index.scss'
</style>
