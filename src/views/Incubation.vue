<template>
  <div>
    <!-- 头部 -->
    <YyHeader></YyHeader>
    <el-image style="width: 100%; height: 350px" :src="url"></el-image>
    <div class="tag">
      <div>最新政策</div>
      <div>新闻资讯</div>
    </div>
    <BackTop></BackTop>
    <YyFooter></YyFooter>
  </div>
</template>

<script>
import YyHeader from '@/components/YyHeader.vue';
import YyFooter from '@/components/YyFooter.vue';
import BackTop from '@/components/BackTop.vue';
export default { components: { YyHeader, YyFooter, BackTop } };
</script>

<style scoped lang="scss">
@import '../assets/style/Incubation.scss'
</style>
