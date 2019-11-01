const app=getApp()

Page({
  data: {

  },
  onLoad(){
    new app.ToastPannel()
  },
  showMesSuc(){
    this.showTip({
      icon: "success",
      content:"这是自定义成功弹窗"
    })
  },
  showMesErr() {
    this.showTip({
      icon: "error",
      content: "这是自定义错误弹窗"
    })
  },
  showMesWar() {
    this.showTip({
      icon: "warning",
      content: "这是自定义警告弹窗"
    })
  },
  showMyMes() {
    this.showTip({
      image: '../../images/icon/test.png',
      content: "这是自定义警告弹窗"
    })
  }
})
