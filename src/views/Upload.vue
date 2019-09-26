<template>
  <div class="page">
    <el-upload
      class="avatar-uploader"
      action=""
      list-type="picture-card"
      :limit="3"
      :on-exceed="handleExceed"
      :on-preview="handlePreview"
      :http-request="upload"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :before-remove="beforeRemove"
      :on-remove="handleRemove"
      :file-list="fileList"
    >
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-dialog title="图片大图" :visible.sync="dialogImgVisible">
      <img :src="visibleImg" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      fileList: [],
      dialogImgVisible: false,
      visibleImg: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    upload(file) {
      let fileObj = file.file;
      let formData = new FormData();
      formData.append("file", fileObj);
      formData.append("type", "1");
      this.$http({
        url: "szmktstore/proxy/upload/file",
        data: formData,
        method: "post"
      }).then(res => {
        console.log(res);
        this.fileList.push({
          name: res.data.data,
          url: "https://pictest.sqplus.cn/sqj/" + res.data.data
        });
      });
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file) {
      let index = this.fileList.indexOf(file);
      this.fileList.splice(index, 1);
    },
    handleExceed(files, fileList) {
      this.$message.error(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    handlePreview(file) {
      this.dialogImgVisible = true;
      this.visibleImg = file.url;
    }
  }
};
</script>

<style lang="less">
.page .avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
