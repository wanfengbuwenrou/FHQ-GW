<template>
  <div>
    <div class="body">
      <!-- 头部 -->
      <YyHeader></YyHeader>
      <div class="pic">
        <img 
          src="../assets/images/2.png"
        />
      </div>
      <!-- 政策导航 -->
      <el-container class="f2">
        <el-main>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="black"
            active-text-color="red"
            router
          >
            <el-menu-item index="1">最新政策</el-menu-item>
            <el-menu-item index="2">新闻资讯</el-menu-item>
          </el-menu>
        </el-main>
      </el-container>
      <el-container class="f3">
        <!-- 标题 -->
        <el-header>最新政策</el-header>
        <el-main>
          <!-- 政策列表 -->
          <el-card class="box-card">
            <div v-for="(item, i) in cardcontent" :key="i" @click="godetail">
              <div>{{ item.title }}</div>
              <div>{{ item.content }}</div>
              <div>{{ item.time }}</div>
              <div></div>
            </div>
            <!-- 分页条 -->

            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-main>
      </el-container>
      <BackTop></BackTop>
      <YyFooter></YyFooter>
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import YyHeader from "@/components/YyHeader.vue";
import YyFooter from "@/components/YyFooter.vue";
import BackTop from "@/components/BackTop.vue";
export default {
  components: { YyHeader, YyFooter, BackTop },
  data() {
    return {
      activeIndex: "1",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      cardcontent: [
        {
          title: '国家税务总局："大众创业，万众创新"税费优惠政策指引',
          content:
            "2015年政府工作报告明确提出要打造“大众创业、万众创新”，国家也出台了《关于发展众创空间推进大众创新创业的指导意见》，对推动创业和创新具有指导作用。 近年来，我国大众创业发展很快，大学毕业生、留学归国人员和返乡农民工等正成为大众创业的主要群体。",
          time: "2022-05-28",
        },
        {
          title: '国家税务总局："大众创业，万众创新"税费优惠政策指引',
          content:
            "2015年政府工作报告明确提出要打造“大众创业、万众创新”，国家也出台了《关于发展众创空间推进大众创新创业的指导意见》，对推动创业和创新具有指导作用。 近年来，我国大众创业发展很快，大学毕业生、留学归国人员和返乡农民工等正成为大众创业的主要群体。",
          time: "2022-05-28",
        },
        {
          title: '国家税务总局："大众创业，万众创新"税费优惠政策指引',
          content:
            "2015年政府工作报告明确提出要打造“大众创业、万众创新”，国家也出台了《关于发展众创空间推进大众创新创业的指导意见》，对推动创业和创新具有指导作用。 近年来，我国大众创业发展很快，大学毕业生、留学归国人员和返乡农民工等正成为大众创业的主要群体。",
          time: "2022-05-28",
        },
        {
          title: '国家税务总局："大众创业，万众创新"税费优惠政策指引',
          content:
            "2015年政府工作报告明确提出要打造“大众创业、万众创新”，国家也出台了《关于发展众创空间推进大众创新创业的指导意见》，对推动创业和创新具有指导作用。 近年来，我国大众创业发展很快，大学毕业生、留学归国人员和返乡农民工等正成为大众创业的主要群体。",
          time: "2022-05-28",
        },
      ],
    };
  },
  mounted () {
     AMapLoader.load({
      key: "758a058ea9d1983deedafb8a1a4ed6cb", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [],
    })
      .then((AMap) => {
        this.map = new AMap.Map("container");
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    handleSelect(key, keyPath) {},
    godetail() {
      this.$router.push("/policydetail");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/Incubation.scss";
</style>
