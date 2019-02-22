# webpack-config
webpack配置
 - 入口文件
   - ./2.js
 - 出口文件
   - ./dist/app.js
 - loaders
   - css-loader 加载.css文件
   - style-loader　使用<style>将css-loader内部样式注入到我们的HTML页面
   - file-loader 处理图片
 - plugins
   - html-webpack-plugin html模板
   - mini-css-extract-plugin css分离
   - open-browser-webpack-plugin 自动开启浏览器
 - dev-server 开启服务，绑定端口，设置热替换

启动命令：
 - npm run build 打包项目
 - npm start 开发中启动项目
