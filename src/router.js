import Vue from "vue";
import Router from "vue-router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/",
      component: () => import("./views/Home.vue"),
      meta: { title: "自述文件" },
      children: [
        {
          path: "/index",
          component: () => import("./views/Index.vue"),
          meta: { title: "系统首页" }
        },
        {
          path: "/table",
          component: () => import("./views/Table.vue"),
          meta: { title: "基础表格" }
        },
        {
          path: "/form",
          component: () => import("./views/Form.vue"),
          meta: { title: "基础表单" }
        },
        {
          path: "/upload",
          component: () => import("./views/Upload.vue"),
          meta: { title: "图片上传" }
        },
        {
          path: "/charts",
          component: () => import("./views/Charts.vue"),
          meta: { title: "图表" }
        },
        {
          path: "/tip",
          component: () => import("./views/Tip.vue"),
          meta: { title: "温馨提示" }
        }
      ]
    },
    {
      path: "/login",
      component: () => import("./views/Login.vue"),
      meta: { title: "登录页" }
    }
  ]
});
