
Page({

  data: {
    power:wx.getBatteryInfoSync().level

  },

  onLoad: function (options) {
    console.log(wx.getBatteryInfoSync())

  },
//   chooseImage:function(){
//     let that  = this;
//       // 上传图片 获取路径
//     wx.chooseImage({
//       success: function (res) {
//         console.log('临时路径：' + res.tempFilePaths[0])   
//         wx.uploadFile({
//           url: '开发者服务器 url',
//           filePath: res.tempFilePaths[0],
//           name: 'file',
//           header: { "Content-Type": "multipart/form-data" },
//           formData: {
//             'program': 'logs'
//           },
//           success: function (result) {
//             wx.showLoading({
//               title: '上传中...',
//             })
//             //上传成功后的路径：
//             var img = "服务器域名" + JSON.parse(result.data).path
//             that.setData({
//               img: img
//             })
//             wx.hideLoading()
//             //缓存图片
//             wx.setStorageSync('img', img)
//           }
//         })
//       }
//     })

//   },
 

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
