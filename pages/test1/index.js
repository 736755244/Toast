Page({
  data: {

  },
  onReady: function () {
    //获得dialog组件 
    //页面定义的id
    console.log(this.selectComponent("#toastDialog"))
    this.toastDialog = this.selectComponent("#toastDialog");
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
  }
})