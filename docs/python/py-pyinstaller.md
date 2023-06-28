# Python 库 Pyinstaller 使用简介

## 简介

应用程序在其他人的环境部署时，需要具备 Python 的环境一些依赖包才能正常运行。这时候 pyinstaller 就可以将程序打包成“.exe”文件。

### 首先先通过 pip 安装

```pyhton
pip install pyinstaller
```

### pyinstaller 命令：

- -F: 打包程序为单个可执行文件
- -D: 打包程序为一个文件夹
- -i: 程序图标，格式为.ico
- -n: 打包后可执行文件的名称
- -w: 禁止命令行窗口弹出

### 打包例子

```python
pyinstaller -F -i logo.ico main.py
```

- 将 Python 文件“main.py”打包单个可执行文件，图标为“logo.ico”,

### 打包一个包含 x.dll 的 exe

先编译一遍

```python
pyinstall -Fw .\main.py
```

修改 **main.spec**,在**datas**中添加 x.dll 文件

```python
a = Analysis(
    ['main.py'],
    pathex=[],
    binaries=[],
    datas=[('xxx.dll', '.')],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

```

最后再打包**main.spec**

```python
pyinstall .\main.spec
```
