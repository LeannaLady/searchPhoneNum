//index.js
//获取应用实例
const app = getApp()
Page({
  data: {

    phoneInfo:{
     
    },
    phoneNum:'',
  },
  phoneNum:function(e){
    var that=this

    that.setData({

       phoneNum:e.detail.value

    })
  },
  cleanPhoneNum:function(){
    var that = this;
    that.setData({
     phoneNum:''
    })

  },
  sendPhoneNum:function(){
    wx.showLoading({
      title: '加载中',
    })

    var that=this,
        phonenumber  = that.data.phoneNum.replace(/-/g,""),
        myreg=/^[1][3,4,5,7,8][0-9]{9}$/, 
        sendphone  = phonenumber.substring(0,7);

    if (!myreg.test(phonenumber)){ 

      wx.showModal({
            content: '请输入合法手机号码!',
          });
      that.setData({

       phoneNum:''

      })
      wx.hideLoading()

      return;

    }else{
      wx.request({
        url:'https://apis.juhe.cn/mobile/get?phone='+sendphone+'&key=1189e3089256749ff5773e38babdab82',
        success:function(res){
          wx.hideLoading()
          if(res.data.resultcode==200){

            that.setData({
               phoneInfo:res.data.result
            })



          }else{
            wx.showModal({
              content: '请重试',
           
            });
          }
          
        },
        fail:function(err){
          console.log(err);
          wx.hideLoading()
          wx.showModal({
            content: '请重试',
          });
          that.setData({
            phoneInfo:''
          })

        }
      })
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
