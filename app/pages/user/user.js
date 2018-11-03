Page({
  data:{
    isLogin:false,
    userImg:'',
    userName:'',
    states:[
      {
        title:'待付款',
        imgSrc:'/src/img/useractive.png'
      },
      {
        title:'待拼团',
        imgSrc:'/src/img/useractive.png'
      },
      {
        title:'待消费',
        imgSrc:'/src/img/useractive.png'
      },
      {
        title:'待收货',
        imgSrc:'/src/img/useractive.png'
      },
    ],
    tab:['我的收货地址','联系客服','关于我们','用户编号：2330']
  },
  userInfoReadyCallback(res){
    var obj =res.userInfo
    this.setData({
      isLogin:true,
      userName:obj.nickName,
      userImg:obj.avatarUrl
    })
  },
  onReady(){
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              var obj =res.userInfo
              this.setData({
                isLogin:true,
                userName:obj.nickName,
                userImg:obj.avatarUrl
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  handleUser(){
    this.onReady(); 
   },
})