<template>
  <div>
    <div class="content">
      <div class="left">
        <div>财税</div>
        <div>财税服务</div>
        <div>财税服务</div>
        <div>财税服务</div>
        <div>财税服务</div>
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
};

  
</script>

<style scoped lang="scss">
@import "../assets/style/Total.scss";
</style>
