<template>
  <div>
      <yy-header></yy-header>
      <router-view></router-view>
      <yy-footer></yy-footer>
  </div>
</template>

<script>
import YyHeader from '@/components/YyHeader.vue'
import YyFooter from '@/components/YyFooter.vue'
export default {
  components: { YyHeader, YyFooter },

}
</script>

<style>

</style>