<template>
  <div>
    <div class="content">
      <div class="left">
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        active-text-color="red"
        router
          text-color="black"
        >
          <el-menu-item index="/total/audit">审计</el-menu-item>
          <el-menu-item index="1">审计服务</el-menu-item>
          <el-menu-item index="2">审计时间</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">联系我们</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <div>审计服务</div>
        <div>
          <div>1.提供的服务内容</div>
          <div>
            <img src="../assets/images/linshi.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(key,keyPath) {
      
    }
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/Total.scss";
</style>
