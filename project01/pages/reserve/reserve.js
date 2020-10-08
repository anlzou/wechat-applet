// pages/reserve/reserve.js
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: util.formatTime(new Date()),
    endDate: '2050-12-31',
    array: ['塑形', '减脂', '增肌'],
    index: 0,
    flag:false
  },

  /**
   * 预约时间选择
   */
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
  },
  /**
   * 健身意向选择
   */
  bindSelectorChange: function (e) {
    this.setData({
      index: e.detail.value
    });
  },
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },
 
  showPopup() {
    this.popup.showPopup();
  },
 
  //取消事件
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  _success() {
    console.log('你点击了确定');
    this.popup.hidePopup();
  }
})