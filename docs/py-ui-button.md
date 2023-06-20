# Python UI Button

```python
import ttkbootstrap as ttk
from ttkbootstrap.constants import *
from ttkbootstrap.dialogs import Messagebox

def button1():
    print("点击了button1")

def button2():
    print("点击了button2")
    Messagebox.okcancel(message="hello")

def main():
    app = ttk.Window(
        title="标题",
        themename="litera",
        size=(250,150),
        resizable=None,
        iconphoto="R-C.png",
        # alpha=0.5,
    )
    # 窗口居中
    app.place_window_center()

    btn1 = ttk.Button(app, text="按键1", bootstyle=(PRIMARY, "outline-toolbutton"), command=button1)
    btn1.pack(side=LEFT, padx=5, pady=10)

    btn2 = ttk.Button(app, text="按键2", bootstyle=SUCCESS, command=button2)
    btn2.pack(side=LEFT, padx=5, pady=10)

    app.mainloop()

if __name__ == "__main__":
    main()


```

## 运行界面

-![这是图片](https://cloud-sh.oss-cn-shanghai.aliyuncs.com/picture/py-ui-button-run.png 'Magic Gardens')
