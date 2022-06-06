<template>
  <div>
    <div class="pc">
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
    <div class="phone">
      <div>
        <i class="el-icon-phone"></i>
        <div>电话咨询</div>
      </div>
      <div>
        <i class="el-icon-message"></i>
        <div>邮件联系</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pc {
  z-index: 9999;
  position: fixed;
  background-color: #fff;
  bottom: 100px;
  right: 40px;
  box-shadow: 5px 5px 15px gray;
  > div {
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
.phone {
  display: none;
}
@media (max-width: 768px) {
  .pc {
    display: none;
  }
  .phone {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    border-top: 3px solid rgb(234, 234, 234);
    font-size: 18px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      > i {
        margin-right: 5px;
      }
    }
    .el-icon-phone {
      font-size: 22px;
      color: rgb(82, 137, 224);
    }
    .el-icon-message {
      font-size: 22px;
      color: rgb(0, 200, 0);
    }
  }
}
</style>
