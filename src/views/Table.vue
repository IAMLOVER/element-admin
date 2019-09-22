<template>
  <div class="table">
    姓名：
    <el-input v-model="input" placeholder="请输入搜索关键字">
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="searchFormName(input)"
      ></el-button>
    </el-input>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="right" inline class="demo-table-expand">
            <el-form-item label="日期:">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="姓名:">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="地址:">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
            >移除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2016-05-03",
          id: 1,
          name: "刘陈希",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          id: 2,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          id: 3,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          id: 4,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          id: 5,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          id: 6,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          id: 7,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    deleteRow(index, rows) {
      this.$confirm("你确定执行删除操作吗？", "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warn"
      })
        .then(() => {
          this.deleteMethods(index, rows);
        })
        .catch(() => {
          this.$message.info({
            message: "已经取消操作"
          });
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    async deleteMethods(index, rows) {
      await setTimeout(() => {
        rows.splice(index, 1);
        this.$message.success({
          message: "删除成功"
        });
      }, 300);
    },
    searchFormName(input) {
      this.tableData = this.tableData.filter(item => item.name === input);
    }
  }
};
</script>

<style lang="less" scoped>
.el-input {
  width: 250px;
  margin-bottom: 30px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
