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
        <!-- <el-popover
    placement="left"
    width="200"
    trigger="hover"
    content="solt">
    <div slot="reference" class="vx">
      <img src="../assets/images/vx.svg" alt="">
    </div>
  </el-popover> -->
        <div class="vx">
          <img class="tu1" src="../assets/images/vx.svg" />
          <div  class="tu2">
            <img src="../assets/images/erweima.svg" alt="">
          </div>
        </div>
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
export default {
};
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
    height: 150px;
    display: flex;
    flex-direction: column;
    font-size: 35px;
    justify-content: space-evenly;
    align-items: center;
    color: #1296db;
  }
  .el-icon-phone {
    transform: rotate(270deg);
    background-color: #1296db;
    color: white;
    border-radius: 5px;
    font-size: 33px;
  }
  .vx .tu1:hover+.tu2{
    display: block;
  }
  .vx {
    width: 35px;
    height: 35px;
    position: relative;
    background: url(../assets/images/vx.svg) no-repeat cover;
    > img {
      width: 100%;
      height: 100%;
      margin-bottom: 20px;
    }
    >div{
      display: none;
      position: absolute;
      left: -120px;
      top: -25px;
      width: 100px;
      height: 100px;
      >img{
        width: 100%;
        height: 100%;
      }
    }
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
    position: relative;
    bottom: 0;
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
