<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12">
          <div class="row-fluid">
            <div class="span6 one">
              <ul class="unstyled">
                <li>联系我们</li>
                <li>地址：天津市滨海新区经济开发区泰达大厦507</li>
                <li>电话：010-2548796</li>
                <li>邮编：100301</li>
                <li>备案号：津ICP备2022052812号</li>
              </ul>
            </div>
            <div class="span6 two">
              <ul class="unstyled">
                <li>关于我们</li>
                <li>公司介绍</li>
                <li>荣誉资质</li>
                <li>联系我们</li>
              </ul>
              <ul class="unstyled">
                <li>合作企业</li>
              </ul>
              <ul class="unstyled">
                <li>资讯政策</li>
              </ul>
              <ul class="unstyled">
                <li>孵化服务</li>
                <li>基础服务</li>
                <li>咨询辅导</li>
                <li>科技服务对接</li>
                <li>科技成果转化</li>
                <li>投融资服务</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container-fluid {
  background-color: rgb(72, 69, 69);
  color: #fff;
  .row-fluid {
    .row-fluid {
      display: flex;
      justify-content: space-between;
      .one {
        flex: 4;
        ul > li {
          padding: 5px 0;
          list-style-type: none;
        }
      }
      .two {
        flex: 6;

        ul > li:first-child {
          font-size: 20px;
        }
        ul > li {
          padding: 5px 0;
          list-style-type: none;
        }
      }
    }
  }
  .span6 {
    display: flex;
    justify-content: space-evenly;
    margin: 60px 0;
  }
}
</style>
