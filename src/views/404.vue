<template>
  <div>
    <div class="not">
      <div>404 Not Found</div>
      <div>The requested URL /404/ was not found on this server.</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.not{
  text-align: center;
  margin-top: 100px;
  font-size: 50px;
  >div:first-child{
    font-weight: 600;
  }
  >div:last-child{
    margin-top: 20px;
    font-size: 25px;
  }
}
</style>