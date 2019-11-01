const app=getApp()

Page({
  data: {

  },
  onLoad(){
    new app.ToastPannel()
  },
  showMes(){
    this.showTip({
      icon: "success",
      content:"这是自定义弹窗"
    })
  }
})
