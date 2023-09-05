const common = require("../../utils/common")

// pages/detail/detail.js
Page({
  addFavorites: function(){
    let article = this.data.article
    //添加到本地缓存
    wx.setStorageSync(article.id, article)
    this.setData({isAdd: true})
  },

  cancelFavorites: function(){
    let article = this.data.article
    //从本地缓存删除
    wx.removeStorageSync(article.id)
    this.setData({isAdd: false})
  },
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    console.log(id)
    //检查当前新闻是否在收藏夹中
    var article = wx.getStorageSync(id)
    console.log(article)
    //已存在
    if (article != ""){
      console.log("已经存在")
      this.setData({
        article: article,
        isAdd: true
      })
    }
    //不存在
    else {
      console.log("不存在")
      let result = common.getNewsDetail(id)
      if (result.code == '200')
        this.setData({
          article: result.news,
          isAdd: false
        })
    }
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