module.exports = {
  title: "forward",
  description: 'day day up!',
  base:'/blog/',
  port: 4000,
  evergreen: true,
  themeConfig: {
    //主题配置
    nav: [
      // 导航栏
      {
        text: "目录",
        link: "/"
      },
    ], // 侧边栏
    sidebar: [
      // {
      //   title: "源码系列",
      //   path: "/",
      // },
      {
        title: "java", // 必要的
        path: "/java/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
      },
    ],
  },
  markdown: {
    lineNumbers: true
  }
};
