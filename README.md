## 环境配置
### Nodejs
下载并安装Nodejs
官方的仓库比较慢，要找个快一点的仓库，在命令行界面（windows系统，在任意的文件夹，按shift+鼠标左键），输入下面的命令：
npm config set registry https://registry.npm.taobao.org 
npm info underscore 

### 安装ionic cli
命令行界面输入
npm install -g cordova ionic，还有一个辅助工具phonegap 也可以安装一下：
npm install -g phonegap@latest

### android studio
安装android studio到D:\app\android-studio，然后配置环境变量
ANDROID_HOME=D:\app\android-studio

### 下载 android sdk
使用android studio，指定sdk存放位置为：D:\app\android\sdk，然后使用sdk管理器下载android sdk的各种包

### 复制gradle模板
复制 D:\app\android-studio\plugins\android\lib\templates 这个文件夹到 D:\app\android\sdk\tools
否则会报找不到D:\app\android\sdk\tools\templates的错误

### 测试
命令行界面，输入下面的目录
ionic start myapp

## 开发工具
最好是使用vs code，因为插件比较全，智能提示也不错






