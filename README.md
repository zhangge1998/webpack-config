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
 
存在问题：
 项目关闭后再启动时会出现端口占用错误
 ！！！很坑！！！是关闭时使用ctrl+z，没能结束进程（可以杀掉占用端口的进程，重新启动，不过很麻烦）
 使用trl+c就能直接结束进程
 
      

         
