<template>
  <div>
    <header-top></header-top>
    <div class="home">
      <div class="home-nav">
        <home-nav></home-nav>
      </div>
      <div class="content-box" :class="{ 'content-collapse': collapse }">
        <div class="content">
          <transition name="move">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
          <el-backtop target=".content"></el-backtop>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/components/HomeNav.vue";
import HeaderTop from "@/components/Header.vue";
export default {
  name: "home",
  data() {
    return {
      collapse: false
    };
  },
  components: {
    HomeNav,
    HeaderTop
  }
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  .home-nav {
    width: 220px;
  }
  .content-box {
    width: 80vw;
    margin: 30px auto;
  }
}
</style>
