//index.js
//获取应用实例
const app = getApp()
Page({
  data: {

    phoneInfo:[
      {
        "title":"省份：",
        "value":""
      },
      {
        "title":"城市：",
        "value":""
      },
      {
        "title":"运营商：",
        "value":""
      },
      {
        "title":" 区号：",
        "value":""
      },
      {
        "title":" 邮编：",
        "value":""
      }

    ],
    phoneNum:null,
  },
  phoneNum:function(e){
    var that=this

    that.setData({

       phoneNum:e.detail.value

    })
  },
  sendPhoneNum:function(){

    var that=this,
        phonenumber  = that.data.phoneNum,
        myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
    if (!myreg.test(phonenumber)){ 
      


    }


   



  }

})

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
