<template>
  <div class="page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>个人信息</span>
      </div>
      <div class="pd">用户名：{{ userName }}</div>
      <div class="pd">登录地址：{{ address }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      address: "深圳"
    };
  },
  created() {
    this.userName = localStorage.getItem("ms_username");
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.pd {
  padding-bottom: 30px;
}
</style>
