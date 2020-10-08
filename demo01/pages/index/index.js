//index.js
//获取应用实例
const app = getApp()
import datas from "../../moudle/data.js";

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    content: '微信小程序数据绑定内容',
		count : 1,
		hiddenContent: '隐藏的内容',
		num1: 1,
		num2: 2,
		user: {
			name: 'Mr.An',
			age: 99
    },
    flag:true,
    datas:datas,
    indicatorDots:true,
    imgUrls:[
      "../../images/p1.jpg",
      "../../images/p2.jpg",
      "../../images/p1.jpg",
      "../../images/p2.jpg"
    ]
  },
  myClick:function(){
    // 动态改变视图层的数据
    this.setData({
      // 累加后的值给count
      count:++this.data.count
    })
  },

  /**
   * 
   */
  myViewClick:()=>{
    console.log("点击view")
  },

  /**
   * 
   */ 
  myTextClick:()=>{
    console.log("点击text");
  },
  // 
  onLoad:function(){
    console.log('初始化');
  },

  // 
  onShow:()=>{
    console.log('切前台');
  },

  onHide:()=>{
    console.log("切后台");
  },
  
  onPullDownRefresh:()=>{
    console.log("正在下拉");
  },

  onShareAppMessage:()=>{
    console.log("正在分享");
  }


  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
