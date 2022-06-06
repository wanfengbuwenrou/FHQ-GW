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
            岁之前可以尽情恋爱，跌倒，尝试，挥霍，任性，三教九流的朋友越多越好。25到30岁要慢慢学会孤独，人不会在狂欢里变得强大，太多拥抱只会让你依赖温暖。不必遗憾，等你成为了更好的人，并且拥有了更为健壮的内心，30岁以后，更好的朋友会找到你，与你并肩前行，从此便不再孤独。
          </p>
          <p>
            有一种伤痛，就不要尝试心痛;没有我的悲伤，就不要学我的坚强。、有一种伤痛，就不要尝试心痛;没有我的悲伤，就不要学我的坚强。、有一种伤痛，就不要尝试心痛;没有我的悲伤，就不要学我的坚强。
          </p>
          <p>
            从事一项事情，先就要去决定志向，志向决定之后就是要全力以赴的毫不犹豫地去实行
            从事一项事情，先就要去决定志向，志向决定之后就是要全力以赴的毫不犹豫地去实行
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
