import { defineConfig } from 'dumi';

const repo = 'doc'; // 项目名

export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  logo: 'https://cloud-sh.oss-cn-shanghai.aliyuncs.com/picture/R-C.png',
  devServer: {
    port: 5001, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  // more config: https://d.umijs.org/config

  // 单语言配置方式如下
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
    {
      title: '我有二级导航',
      path: '链接是可选的',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        { title: '第一项', path: '/nodejs/nodejs-install' },
        { title: '第二项', path: '/guide' },
      ],
    },
  ],

  menubar: {
    '/python': [
      {
        title: '菜单项',
        path: '菜单路由（可选）',
        children: [
          // 菜单子项（可选）
          'guide/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
    ],
  },
});
