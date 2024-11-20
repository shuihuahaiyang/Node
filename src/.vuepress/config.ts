import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Node/",

  lang: "zh-CN",
  title: "EBLOG",
  description: "vuepress-theme-hope 的博客演示",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,

});
