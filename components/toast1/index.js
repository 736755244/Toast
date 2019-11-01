Component({
  properties: {
   
  },
  data: {
    dataText: '',
    icon:'',
    showToast: false
  },
  methods: {
    //展示弹框
    showDialog(data) {
      var _this = this
      _this.setData({
        showToast: true,
        dataText: data.content,//设置提示内容
        iconType:data.icon//设置提示图片类型
      })
      // 定时器关闭弹框  
      setTimeout(function () {
        _this.setData({
          showToast: false
        })
      }, 2000);
    }
  }
})