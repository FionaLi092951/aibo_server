//actionlist.js
var app = getApp()
Page({
 data:{
   new:[],
   detail: {},
  
 },

onLoad: function (option) {
    const id = decodeURIComponent(option.id) ; // option.id; // JSON.parse(decodeURIComponent(option.id));
    const detailList = {
        1: {
            title: "课程简介1",
            description: "活动1描述描述"
        },
        2: {
            title: "课程简介2",
            description: "活动2描述描述"
        },
        3: {
            title: "课程简介3",
            description: "活动3描述描述"
        },
        4: {
            title: "课程简介4",
            description: "活动4描述描述"
        },
    }
    this.setData({
        detail: detailList[id]
    });
}
//  onLoad: function (options){
//    var newid = options.id;
//    const that = this;
//    wx.request({
//      url: "https://wapp.cq-qq.com/index/index/wappnew",
//      header: {
//        'content-type': 'application/json'
//      },
//      method: "POST",
//      data: { taken: "83f2e904ceec91d935593895e2d2dbfe", author: "goduer",id:newid },
//      complete: function (res) {
//        that.setData({
//          new: res.data
//        });
//        console.log(res.data);
//        if (res == null || res.data == null) {
//          console.error('网络请求失败');
//          return;
//        }
//      }
//    })


//  }



})