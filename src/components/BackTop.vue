<template>
  <div >
    <div class="nav">
      <div>
        <el-tooltip
          class="item"
          effect="light"
          offset="-8"
          content="154123541321"
          placement="left-start"
        >
          <div><i class="el-icon-phone"></i></div>
        </el-tooltip>
      <i class="el-icon-message"></i>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  z-index: 9999;
  position: fixed;
  background-color: #fff;
  bottom: 100px;
  right: 40px;
  box-shadow: 5px 5px 15px gray;
  > div{
    width: 60px;
    height: 110px;
    display: flex;
    flex-direction: column;
    font-size: 35px;
    justify-content: space-evenly;
    align-items: center;
    color: #36d;
  }
  .el-icon-phone {
    transform: rotate(270deg);
    background-color: #36d;
    color: white;
    // margin-top: 10px;
    border-radius: 5px;
    font-size: 33px;
  }
}
</style>
