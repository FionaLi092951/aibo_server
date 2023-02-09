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
            title: "预约1",
            description: "活动1描述描述"
        },
        2: {
            title: "预约2",
            description: "活动2描述描述"
        },
        3: {
            title: "预约3",
            description: "活动3描述描述"
        },
        4: {
            title: "预约4",
            description: "活动4描述描述"
        },

        5: {
            title: "预约5",
            description: "活动5描述描述"
        },

        6: {
            title: "预约6",
            description: "活动6描述描述"
        },

        7: {
            title: "预约7",
            description: "活动7描述描述"
        },

        8: {
            title: "预约8",
            description: "活动8描述描述"
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