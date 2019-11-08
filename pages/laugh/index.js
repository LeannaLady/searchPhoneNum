Page({
  data:{
    laughList:[]
  },
  onLoad:function(){
    var that=this
    that.getLaughList();

  },
  getLaughList:function(){
    var that=this
    let date = new Date().getTime();
    wx.request({
      url:'http://v.juhe.cn/joke/content/list.php?key=9569f9d5102204ddbccfa61d06b031cb&page=1&pagesize=20&sort=asc&time='+date,
      success:function(res){
        console.log(res)
        if(res.error_code === 200 && res.result.data && res.result.data.length >0){
          that.setData({
            laughList:res.result.data
          })
        }
      },
      fail:function(err){
        wx.showModal({
          content: '数据获取失败同，请稍后再试！',
        });
        that.setData({
          laughList:[]
        })
      }
    })
  },
})
