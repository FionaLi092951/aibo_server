//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    a1src:'../../image/a1.png',
    a2src: '../../image/a2.png',
    a3src: '../../image/a3.png',
    a4src: '../../image/a4.png',
    signupimg:'../../image/signup.png',
    imgsrc:'../../image/gangqin.jpg',
    iconsrc:'../../image/usercount.png',
    jtsrc:'../../image/icon-jt.png',
    imgUrls: [
        'https://img0.baidu.com/it/u=1131640898,1549028958&fm=253&fmt=auto&app=138&f=JPEG?w=495&h=368',
        'https://img0.baidu.com/it/u=1131640898,1549028958&fm=253&fmt=auto&app=138&f=JPEG?w=495&h=368',
    //   'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626232647&di=c7c53f96e0f48681471e4626eebe0181&imgtype=0&src=http%3A%2F%2Fwww.sanchiseo.com%2Fuploadfile%2F2015821%2F2015821115728937045.jpg',
    //   'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626316444&di=ff20f74da6031541a12e0eeadaf156b9&imgtype=0&src=http%3A%2F%2Fsem.g3img.com%2Fsite%2F34016275%2F20160216162430_82108.png',
    //   'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626359075&di=3297d75c3742024d15f553547495f3db&imgtype=0&src=http%3A%2F%2Fwww.17emarketing.com%2Fuploads%2Fallimg%2F160627%2F1-16062G54154.png',
    ],

    reserveList: [
        {
            navUrl: "/pages/courselist/courselist?id=1",
            pic: "../../image/gangqin.jpg",
            title: "一对一专业授课，钢琴考级课程",
            desc: "专业钢琴课程（4岁及以上）",
            icon: '../../image/signup.png',
            userIcon: "../../image/usercount.png",
            applyDesc: "优惠促销1元试听"
        },
        {
            navUrl: "/pages/courselist/courselist?id=2",
            pic: "../../image/violin.jpg",
            title: "一对一专业授课，小提琴考级课程",
            desc: "专业小提琴课程（4岁及以上）",
            icon: '../../image/signup.png',
            userIcon: "../../image/usercount.png",
            applyDesc: "优惠促销1元试听"
        },
        {
            navUrl: "/pages/courselist/courselist?id=3",
            pic: "../../image/vocal.jpg",
            title: "一对一专业授课，声乐素养课程",
            desc: "专业声乐课程（4岁及以上）",
            icon: '../../image/signup.png',
            userIcon: "../../image/usercount.png",
            applyDesc: "优惠促销1元试听"
        },
        {
            navUrl: "/pages/courselist/courselist?id=4",
            pic: "../../image/guitl.jpg",
            title: "一对一专业授课，钢琴考级课程",
            desc: "专业吉他课程（4岁及以上）",
            icon: '../../image/signup.png',
            userIcon: "../../image/usercount.png",
            applyDesc: "优惠促销1元试听"
        }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000 
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '教育模板首页',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功")
      },
      fail: function (res) {
        // 转发失败
        onsole.log("转发失败")
      }
    }
  }
})
