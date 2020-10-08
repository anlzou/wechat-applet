//logs.js
const util = require('../../utils/util.js')
let appData = getApp();

Page({
  data: {
    logs: []
  },
  myClick:()=>{
    console.log();
  }
  // onLoad: function () {
  //   this.setData({
  //     logs: (wx.getStorageSync('logs') || []).map(log => {
  //       return util.formatTime(new Date(log))
  //     })
  //   })
  //   // console.log(appData.globalAttr);
  //   // console.log(appData.globalFunction());
  // },
  // onShow:()=>{
  //   console.log(appData.globalAttr);
  //   console.log(appData.globalFunction());
  // }
})
