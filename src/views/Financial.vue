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
          <el-menu-item index="/total/financial">财税</el-menu-item>
          <el-menu-item index="1">财税服务</el-menu-item>
          <el-menu-item index="2">财税时间</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">联系我们</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <div>财税服务</div>
        <div>
          <div>1.提供的服务内容</div>
          <div>
            <img src="../assets/images/linshi.png" alt="" />
          </div>
        </div>
      </div>
    </div>


    <hr>

<canvas id="canvas" width="150" height="150"></canvas>
 
  </div>
</template>

<script>
export default {
  mounted () {
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    }
  },
   methods: {
    handleSelect(key,keyPath) {
      
    }
  },
};

  
</script>

<style scoped lang="scss">
@import "../assets/style/Total.scss";
</style>
