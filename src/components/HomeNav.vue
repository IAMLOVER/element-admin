<template>
  <div class="page">
    <el-row>
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          router
          active-text-color="#ffd04b"
        >
          <template v-for="item in items">
            <template v-if="item.subs">
              <el-submenu :index="item.index" :key="item.index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
                </template>
                <template v-for="subItem in item.subs">
                  <el-submenu
                    v-if="subItem.subs"
                    :key="subItem.index"
                    :index="subItem.index"
                  >
                    <template slot="title">{{ subItem.title }}</template>
                    <el-meun-item
                      v-for="(threeItem, i) in subItem.subs"
                      :key="i"
                      :index="threeItem.index"
                      >{{ threeItem.title }}</el-meun-item
                    >
                  </el-submenu>
                  <el-menu-item
                    v-else
                    :index="subItem.index"
                    :key="subItem.index"
                    >{{ subItem.title }}</el-menu-item
                  >
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :key="item.index" :index="item.index">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-setting",
          index: "index",
          title: "系统首页"
        },
        {
          icon: "el-icon-setting",
          index: "table",
          title: "基础表格"
        },
        {
          icon: "el-icon-setting",
          index: "3",
          title: "表单相关",
          subs: [
            {
              index: "form",
              title: "基础表单"
            }
          ]
        },
        {
          icon: "el-icon-setting",
          index: "upload",
          title: "图片上传"
        },
        {
          icon: "el-icon-setting",
          index: "charts",
          title: "图表"
        },
        {
          icon: "el-icon-setting",
          index: "tip",
          title: "温馨提示"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped lang="less"></style>
