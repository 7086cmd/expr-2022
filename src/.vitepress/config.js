import { defineConfig } from "vitepress";

export default defineConfig({
  title: "暑假实验报告合集 By 吴承宇",
  markdown: {
    config(md) {
      md.use(require("markdown-it-katex"));
    }
  },
  head: [
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"} ]
  ],
  themeConfig: {
    localeLinks: {
      text: "简体中文",
      items: [],
    },
    footer: {
      message: "按照 MIT License 发布内容",
      copyright: "Copyright © 2020-2023 7086cmd",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "实验", items: [
        { text: "实验一", link: "/ex1/" },
        { text: "实验二", link: "/ex2/" },
        { text: "实验三", link: "/ex3/" },
        { text: "实验四", link: "/ex4/" },
      ] },
      { text: "关于", link: "/about/" },
    ],
    sidebar: {
      "/ex1/": createSideBar(),
      "/ex2/": createSideBar(),
      "/ex3/": createSideBar(),
      "/ex4/": createSideBar(),
    },
    docFooter: {
      prev: "上一章",
      next: "下一章",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/7086cmd/expr-2022" },
    ],
    lastUpdatedText: "本文最后更改日期",
  },
  cleanUrls: "without-subfolders",
});

function createSideBar() {
  return [
    { text: "实验一 鸡蛋泡醋", items: [
      { text: "首页", link: "/ex1/" },
    ] },
    { text: "实验二 杆秤制作", items: [ 
      { text: "首页", link: "/ex2/" },
    ] },
    { text: "实验三 自制酸碱...", items: [
      { text: "首页", link: "/ex3/" },
      { text: "实验主体", link: "/ex3/main" },
      { text: "番外1", link: "/ex3/extend1" },
      { text: "番外2", link: "/ex3/extend2" },
    ] },
    { text: "实验四 金属生锈的条件", items: [
      { text: "首页", link: "/ex4/" },
      { text: "实验准备", link: "/ex4/prepare" },
      { text: "实验观察第一天", link: "/ex4/day1" },
      { text: "实验观察第四天", link: "/ex4/day4" },
      { text: "实验结果", link: "/ex4/final" },
      { text: "番外", link: "/ex4/extend" },
    ] },
  ]
}