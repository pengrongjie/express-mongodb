# express-mongodb
express+mongodb,实现CURE和登录注册
## 介绍
#### 登录
![](./doc/1508135589(1).png)
#### 注册
![](./doc/1508135594(1).png)
#### 后台主页
点击右上角用户名，进入
![](./doc/1508135618(1).png)
#### 修改
![](./doc/1508135625(1).png)
#### 前台首页
![](./doc/1508135632(1).png)
#### 详情页面
![](./doc/1508135638(1).png)
## 运行安装
#### 克隆
```
git clone https://github.com/pengrongjie/express-mongodb.git
```
#### 安装
```
cd express-mongodb
cnpm install
```
#### 修改数据库名字
```
data/module.js
```
修改为你自己想要的数据库名称
```
mongoose.connect('mongodb://localhost:27017/test70');
```
#### 运行
```
npm start
```
或者
```
node app.js
```
#### 浏览器打开
```
http://localhost:3000/
```
