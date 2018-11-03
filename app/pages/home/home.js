// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:['../../src/img/carousel.jpg','../../src/img/carousel.jpg','../../src/img/carousel.jpg'],
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:1000,
    indicatorcolor:'#444',
    lists:[
      {
        title:'门店',
        imgSrc:'../../src/img/shop.png'

      },
      {
        title:'购物',
        imgSrc:'../../src/img/shop.png'
        

      },
      {
        title:'红包',
        imgSrc:'../../src/img/hb.png'

      },

    ],
    goods:[
      {
        imgSrc:'/src/img/goodspic.png',
        title:'法国依泉（Uriage）1',
        price:5555
      },
      {
        imgSrc:'/src/img/goodspic.png',
        title:'法国依泉（Uriage）2',
        price:5555

      },
      {
        imgSrc:'/src/img/goodspic.png',
        title:'法国依泉（Uriage）3',
        price:5555
      },
      {
        imgSrc:'/src/img/goodspic.png',
        title:'法国依泉（Uriage）4',
        price:5555
      },
      {
        imgSrc:'/src/img/goodspic.png',
        title:'法国依泉（Uriage）4',
        price:5555
      },
      {
        imgSrc:'/src/img/goodspic.png',
        title:'法国依泉（Uriage）4',
        price:5555
      },
      {
        imgSrc:'/src/img/goodspic.png',
        title:'法国依泉（Uriage）4',
        price:5555
      },
      {
        imgSrc:'/src/img/goodspic.png',
        title:'法国依泉（Uriage）4',
        price:5555
      }
    ],
    display:true

  },

  /**
   * 生命周期函数--监听页面加载
   */

  changeState:function(){
    this.setData({display:false})
  },
  changRouter:function(){
    wx.navigateTo({ url:'/pages/search/search'})
  },
  goToShop(options){
    console.log(options.currentTarget.dataset.id)
    let {id} = options.currentTarget.dataset
    wx.navigateTo({url:'/pages/goodsinfo/info?id='+id})
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})