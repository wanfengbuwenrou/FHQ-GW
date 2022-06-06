<template>
  <div>
      <canvas id="myCanvas">
</canvas>
  </div>
</template>

<script>
export default {
    mounted () {
        var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.moveTo(0,0);
ctx.lineTo(1800,0);
ctx.stroke();
    },
}
</script>

<style>
#myCanvas{
    margin-top: 100px;
}
</style>