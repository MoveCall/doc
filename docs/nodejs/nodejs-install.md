# nodejs install

## 网站

https://nodejs.org/download/release/

## 手动挡 LTS 版本安装

更新软件列表

```cmd
sudo apt update
```

版本是 v16.x

```cmd
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
```

执行命令安装

```cmd
sudo apt-get install -y nodejs gcc g++ make python
```

获取 node.js 版本

```cmd
node -v
```

获取 npm 版本

```cmd
npm -v
```

升级 npm

```cmd
sudo npm i -g npm
```
