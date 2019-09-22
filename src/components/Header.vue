<template>
  <div class="page">
    后台管理系统
    <el-dropdown style="float:right;margin-right:50px" @command="handleCommand">
      <el-button type="primary">
        操作
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginout">立即退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleCommand(command) {
      if (command == "loginout") {
        this.$message({
          message: "退出成功",
          type: "success"
        });
        this.$router.push("/login");
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.page {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #133456;
  color: #fff;
  font-size: 30px;
  .el-button--primary {
    background-color: #133456;
  }
}
</style>
