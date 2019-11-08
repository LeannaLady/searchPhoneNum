
const  app = getApp();
Page({
  data:{
    userInfo:null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad:function(){
    console.log(this.userInfo,this.canIUse)

  },
  getUserInfo(res){
    let that = this;
    that.setData({
      userInfo: res.detail.userInfo,//赋值
    })
  }

})
