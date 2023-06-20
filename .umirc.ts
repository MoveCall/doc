import { defineConfig } from 'dumi';

const repo = 'doc'; // 项目名

export default defineConfig({
  title: 'Site Name',
  mode: 'doc',
  devServer: {
    port: 5001, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  // more config: https://d.umijs.org/config
});
