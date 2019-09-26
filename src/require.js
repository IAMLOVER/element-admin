import axios from "axios";

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "https://devwww.qmbuy.com";
} else if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "https://picop.sqplus.cn/sqj/";
}

// 请求时间不能超过10s
axios.defaults.timeout = 10000;
// post请求头设置
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8";

export default axios;
