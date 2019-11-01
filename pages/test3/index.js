Page({
  data: {

  },
  onReady: function () {
    //获得dialog组件 
    //页面定义的id
    this.toastDialog = this.selectComponent(".toast_animate");
  },
  showMesSuc(){
    this.toastDialog.showDialog({
      content: '自定义成功类型toast组件',
      icon:'success'
    });
  },
  showMesErr() {
    this.toastDialog.showDialog({
      content: '自定义失败类型toast组件',
      icon: 'error'
    });
  },
  showMesWar() {
    this.toastDialog.showDialog({
      content: '自定义警告类型toast组件',
      icon: 'warning'
    });
  },
  showMyMes() {
    this.toastDialog.showDialog({
      content: '自定义警告类型toast组件',
      image: '../../images/icon/test.png'
    });
  }
})
