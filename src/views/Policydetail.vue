<template>
  <div>
    <div class="f1">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/incubation' }">资讯政策</el-breadcrumb-item>
        <el-breadcrumb-item>最新政策</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
};
</script>

<style scoped lang="scss">
@import '../assets/style/Policydetail.scss'
</style>
