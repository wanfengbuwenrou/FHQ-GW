<template>
  <div>
    <!-- 顶部导航 -->
    <yy-header></yy-header>
    <!-- 轮播图 -->
    <yy-swiper></yy-swiper>
    <!-- 简介 -->
    <el-container class="f3">
      <el-main class="one">
        <div>
          <span>关于我们</span>
          <span>ABOUT US</span>
        </div>
        <div>
          {{ Aboutme }}
        </div>
        <div @click="goaboutme">了解更多></div>
      </el-main>
      <el-main class="two">
        <img src="../assets/images/4.png" />
      </el-main>
    </el-container>
    <!-- 孵化服务 -->
    <el-container class="f4">
      <el-header class="top">
        <div>
          <span>孵化服务</span>
          <span>INCUBATION SERVICES</span>
        </div>
      </el-header>
      <el-main class="content">
        <el-main class="main1">
          <div>
            <div>
              <!-- 上方文字 -->
              <p>
                针对科技企业孵化，孵化器对入孵的企业在提供基础服务的同时，开展了多样化的增值服务，建设了以软件服务，财税服务,人力资源服务，企业诊断服务.
              </p>
              <p>
                创业培训服务，审计服务，企业财务管理服务，投融资服务，市场推广服务，创业服务等多种服务为内容的孵化服务体系
              </p>
            </div>
            <div>
              <!-- 上边6个 -->
              <div class="top">
                <div>
                  <router-link to="/total/software" class="goes">
                    <div>
                      <img src="../assets/images/caishui.png" alt="" />
                    </div>
                    <div>技术开发</div>
                    <div></div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/total/software" class="goes">
                    <div>
                      <img src="../assets/images/dingzhi.png" alt="" />
                    </div>
                    <div>APP定制</div>
                    <div></div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/total/software" class="goes">
                    <div>
                      <img src="../assets/images/jishu.png" alt="" />
                    </div>
                    <div>技术转让</div>
                    <div></div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/total/software" class="goes">
                    <div>
                      <img src="../assets/images/kaifa.png" alt="" />
                    </div>
                    <div>技术咨询</div>
                    <div></div>

                  </router-link>
                </div>
                <div>
                  <router-link to="/total/talent" class="goes">
                    <div>
                      <img src="../assets/images/rencaituijian.png" alt="" />
                    </div>
                    <div>人才推荐</div>
                    <div></div>

                  </router-link>
                </div>
                <div>
                  <router-link to="/total/financial" class="goes">
                    <div>
                      <img src="../assets/images/caishui.png" alt="" />
                    </div>
                    <div>财税咨询</div>
                    <div></div>

                  </router-link>
                </div>
              </div>
              <!-- 分割线 -->
              <div class="center">
                <!-- <div class="top" v-for="a in 6" :key="a"></div> -->
                <el-divider class="hr"> </el-divider>
                <!-- <div class="bottom" v-for="b in 6" :key="b"></div> -->
              </div>
              <!-- 下面六个 -->
              <div class="bottom">
                <div>
                  <router-link to="/total/financial" class="goes">
                    <div></div>

                    <div>
                      <img src="../assets/images/lianxi.png" alt="" />
                    </div>
                    <div>税收筹划</div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/total/audit" class="goes">
                    <div></div>

                    <div>
                      <img src="../assets/images/renli.png" alt="" />
                    </div>
                    <div>审计服务</div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/total/talent" class="goes">
                    <div></div>

                    <div>
                      <img src="../assets/images/shenji.png" alt="" />
                    </div>
                    <div>人力资源</div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/total/audit" class="goes">
                    <div></div>

                    <div>
                      <img src="../assets/images/shui.png" alt="" />
                    </div>
                    <div>评估模型</div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/total/financial" class="goes">
                    <div></div>

                    <div>
                      <img src="../assets/images/caishui.png" alt="" />
                    </div>
                    <div>税务管理</div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/total/audit" class="goes">
                    <div></div>

                    <div>
                      <img src="../assets/images/dingzhi.png" alt="" />
                    </div>
                    <div>审计服务</div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </el-main>
      </el-main>
    </el-container>
    <!-- 合作企业 -->
    <el-container class="f4">
      <el-header class="top">
        <div>
          <span>合作企业</span>
          <span>COOPERATIVEENTERPRISE</span>
        </div>
      </el-header>
      <el-main class="main2">
        <div>
          <div v-for="(item, i) in cooperative" :key="i">
            <img :src="item.url" alt="" />
          </div>
        </div>
      </el-main>
    </el-container>
    <!-- 荣誉资质 -->
    <el-container class="f5">
      <el-header class="top">
        <div>
          <span>荣誉资质</span>
          <span>HONORARY QUALIFICATION</span>
        </div>
      </el-header>
      <el-main>
        <template>
          <el-carousel :autoplay="false" type="card" height="200px">
            <el-carousel-item>
              <div>
                <img src="../assets/images/ry1.png" alt="" />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div>
                <img src="../assets/images/ry2.png" alt="" />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div>
                <img src="../assets/images/ry3.png" alt="" />
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>
      </el-main>
    </el-container>
    <!-- 底部简介 -->
    <yy-footer></yy-footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
import YySwiper from "@/components/YySwiper.vue";
import YyFooter from "@/components/YyFooter.vue";
import YyHeader from "@/components/YyHeader.vue";
import BackTop from "@/components/BackTop.vue";

export default {
  components: { YySwiper, YyFooter, YyHeader, BackTop },
  data() {
    return {
      FhFw: "针对科技企业孵化，孵化器对入孵的企业在提供基础服务的同时，开展了多样化的增值服务，建设了以软件服务，财税服务，人力资源服务，企业诊断服务,    创业培训服务，审计服务，企业财务管理服务，投融资服务，市场推广服务，创业服务等多种服务为内容的孵化服务体系",
      Aboutme:
        "天津科技孵化器有限责任公司成立于2002年5月21日，注册资金12亿元，公司地址位于北京市大兴区金星路12号院2号楼。公司运营管理的奥宇科技英巢园区以电子信息、文化创意和节能环保为主要孵化方向，园区占地面积约40亩，总建筑面积约9万平方米，其中孵化总面积约5万平方米，入驻企业共计300余家。奥宇孵化器是国家科技部火炬中心认定的“国家级解化器和“国家级众创空间”，国家工信部认定的广国家小型微型企业创业创新示范基地”，目前是大兴区唯——家同时获得国家科技部和国家工信部认定为国家级资质的标杆孵化器。经过不断地摸索和深化，奥宇孵化器打造了“创业辅导、投融资、科技支持”和“基础孵化”的孵化服务模式，为创业团队、初创企业和高成长企业提供有针对性的孵化服务，形成“场地+资金+专业服务+科技中介，的运营模式。奥宇孵化器通过资源整合，聚集各类创新要索，为创业企业提供全方位、多层次和多元化的一条龙服务，营造良好的创新创业生态环境，形成组织体系 网络化创业服务专业化、服务体系规范化的发展局面，致力打造京南区域标杆孵化器。",
      cooperative: [
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_120136_46bddbdd9d6ae89b8c80d2a1c4cf9c2d72.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_130119_54dcfbc91056a764d377d369009ecf9380.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_130136_9375ff17f6d587bf0fdfe55e70464d3588.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_130146_c4d8447e3993b00030cb56285080b12c29.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_130210_5791b8f39ba9b3dd8b8b86aa34ec40cf82.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_130230_8555f0a26ae3f2f3bfbe9739eb0f9fb434.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_130247_eaee9b15de900c6d8d53b2e86a00956670.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_120136_46bddbdd9d6ae89b8c80d2a1c4cf9c2d72.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_130119_54dcfbc91056a764d377d369009ecf9380.png",
        },
        {
          url: "https://oss.yesdev.cn/uploads/c4fdfba43916368965fcdfeb16983c54/20220601/YesDev20220601_213707_120136_46bddbdd9d6ae89b8c80d2a1c4cf9c2d72.png",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    goaboutme() {
      this.$router.push("/aboutme");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/Index.scss";
</style>
