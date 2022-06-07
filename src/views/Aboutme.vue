<template>
  <div>
    <div class="aboutme">
      <YyHeader></YyHeader>
      <!-- 大图 -->
      <div class="pic">
        <img  src="../assets/images/2.png" />
      </div>
      <!-- 面包屑 -->
      <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>关于我们</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 企业介绍 -->
      <div class="pro">
        <div>公司介绍</div>
        <div>服务至上，精益求精</div>
      </div>
      <div class="text">
        <div>
          <p>
            孵化器有限责任公司成立于2002年5月21日，注册资金1.2亿元，公司地址位于天津市。公司运营管理的英巢园区以电子信息，文化创意和节能环保为主要孵化方 向，园区占地面积约40亩，总建筑面积约9万平方米，其中孵化总面积约5万平方米，入驻企业共计300余家。奥宇孵化器是国家科技部火炬中心认定的“国家级解化 器和“国家级众创空间”，国家工信部认定的“国家小型微型企业创业创新示范基地”，目前是大兴区唯一一家同时获得国家科技部和国家工信部认定为国家级资质的 标杆孵化器。
          </p>
          <p>
            经过不断地摸索和深化，奥宇孵化器打逃了“创业辅导、投融资、科技支持”和基础孵化” 的孵化服务模式，为创业团队、初创企业和高成长企业提供有针对性 的孵化服务，形成”场地+资金+专业服务+科技中介 的运营模式
          </p>
          <p>
            孵化器通过资源整合，聚集各类创新要素，为创业企业提供全方位，多层次，和多元化的一条龙服务。营造良好的创新创业生态环境，形成组织体系网络化创业服务传业华，服务体系话规范化的发展局面，致力打造京南区域标杆孵化器
          </p>
          <div>地址：天津市滨海新区经济开发区泰达大厦507</div>
          <div>电话：010-2548796</div>
          <div>邮编：100301</div>
        </div>
      </div>
      <!-- <div class="pic2">
        <div>
          <img
            style="width: 100%; height: 400px"
            src="../assets/images/3.png"
          />
        </div>
      </div> -->
      <yy-footer></yy-footer>
      <BackTop></BackTop>
    </div>
  </div>
</template>

<script>
import YyHeader from "@/components/YyHeader.vue";
import YyFooter from "@/components/YyFooter.vue";
import BackTop from "@/components/BackTop.vue";
export default { components: { YyHeader, YyFooter, BackTop } };
</script>

<style scoped lang="scss">
@import "../assets/style/Aboutme.scss";
</style>
