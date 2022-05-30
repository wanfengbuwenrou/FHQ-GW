<template>
  <div class="nav">
    <!-- 大图 -->
    <div class="pic">
      <img
        src="https://s.cn.bing.net/th?id=OIP-C.nRlAFygdctTCHmIWN7GxRwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
        alt=""
      />
    </div>
    <div class="pro">
      <div>公司介绍</div>
      <div>服务至上，精益求精</div>
    </div>
    <div class="text">
      <div>
        <p>
          岁之前可以尽情恋爱，跌倒，尝试，挥霍，任性，三教九流的朋友越多越好。25到30岁要慢慢学会孤独，人不会在狂欢里变得强大，太多拥抱只会让你依赖温暖。不必遗憾，等你成为了更好的人，并且拥有了更为健壮的内心，30岁以后，更好的朋友会找到你，与你并肩前行，从此便不再孤独。
        </p>
        <p>
          有一种伤痛，就不要尝试心痛;没有我的悲伤，就不要学我的坚强。、有一种伤痛，就不要尝试心痛;没有我的悲伤，就不要学我的坚强。、有一种伤痛，就不要尝试心痛;没有我的悲伤，就不要学我的坚强。
        </p>
        <p>
          从事一项事情，先就要去决定志向，志向决定之后就是要全力以赴的毫不犹豫地去实行
          从事一项事情，先就要去决定志向，志向决定之后就是要全力以赴的毫不犹豫地去实行
        </p>
        <div>地址：天津市滨海新区经济开发区泰达大厦507</div>
        <div>电话：010-2548796</div>
        <div>邮编：100301</div>
      </div>
    </div>
    <div class="pic2">
      <div>
        <img
          src="https://s.cn.bing.net/th?id=OIP-C.nRlAFygdctTCHmIWN7GxRwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.nav {
  background-color: rgb(230, 227, 227);
  .pic {
    width: 100%;
    height: 450px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .pro {
    text-align: center;
    div {
      margin: 15px 0;
    }
    > div:first-child {
      font-weight: bold;
      font-size: 20px;
    }
    > div:last-child {
      font-size: 14px;
      color: #6d6464;
    }
  }
  .text {
    background-color: #fff;
    margin: 0px 40px;
    > div {
      padding: 40px 80px;
      p {
        line-height: 30px;
        font-size: 14px;
        text-indent: 40px;
      }
      >div{
        font-weight: bold;
        margin: 10px 0;
      }
    }

  }
  .pic2 {
    margin: 40px 40px;
    > div {
      height: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
