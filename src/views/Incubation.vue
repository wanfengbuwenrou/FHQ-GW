<template>
  <div>
    <!-- 头部 -->
    <YyHeader></YyHeader>
    <div>
      <img style="width: 100%; height: 40rem" src="https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_115546_0051de9a7c27a608260989b53287df4b11.png" />

    </div>
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
