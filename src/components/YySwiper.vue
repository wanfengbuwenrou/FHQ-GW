<template>
  <!--基础存放容器-->
  <div class="swiper-container">
    <!-- 需要进行轮播的部分 -->
    <div class="swiper-wrapper">
      <!-- 每个节点 -->
      <div class="swiper-slide">
        <img src="https://s.cn.bing.net/th?id=OIP-C.nRlAFygdctTCHmIWN7GxRwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="图片1" />
      </div>
      <div class="swiper-slide">
        <img src="https://s.cn.bing.net/th?id=OIP-C.P3NSGTdAYdyqy5zJpb5QXQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="图片2" />
      </div>
      <div class="swiper-slide">
        <img src="https://s.cn.bing.net/th?id=OIP-C.qQKiZmNZqM39tKUHPUAkIwHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="图片3" />
      </div>
    </div>

    <!--分页器-->
    <div class="swiper-pagination swiper-pagination-white"></div>

    <!-- 前进后退按钮 -->
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>
</template>
<script>
import swiper from "swiper";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        //设置轮播的循环方式
        loop: true,
        //设置自动播放间隔时间
        autoplay: 3000,
        // 轮播效果,默认为平滑轮播
        effect: "fade",
        //分页器
        pagination: ".swiper-pagination",
        //前进后退按钮
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        // 用户中断轮播后续播
        autoplayDisableOnInteraction: false,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../node_modules/swiper/dist/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 550px;
}

.swiper-slide {
  width: 100%;
  object-fit: cover;
  img{
      height: 100%;
      width: 100%;
  }
}
</style>
