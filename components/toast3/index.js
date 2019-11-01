Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持 
  },
  properties: {
   
  },
  data: {
    animationData: {},
    dataText: '',
    icon:'',
    showToast: false,
    isUserImg:false,
    imgPath:''
  },
  methods: {
    //展示弹框
    showDialog(data) {
      var _this = this
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      _this.animation = animation
      animation.opacity(1).step()

      _this.setData({
        animationData: animation.export(),
        showToast: true,
        dataText: data.content,//设置提示内容
        isUserImg: data.image?true:false,//是否展示用户自定义图片
        imgPath: data.image,//用户自定义图片
        iconType:data.icon//设置提示图片类型
      })
      // 定时器关闭弹框  
      setTimeout(function () {
        animation.opacity(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 2000)
    }
  }
})