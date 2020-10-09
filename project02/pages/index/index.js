//index.js
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
Page({
  data: {
    //当前城市
    myCity: '当前城市',
    //实时温度
    realTimeTemperature: '',
    // 今日温度
    myTemperature: '',
    //天气详情
    myWeatherDesc: '晴转多云',
    // 风向
    myWind: "",
    //PM2.5
    myPm25String: 'PM2.5',
    //四天城市天气信息
    moreData: '',
    //五条生活小贴士
    tips: '',
    todayData: '',
    currentCity:'',
    myDate : ''
  },

  //查询天气城市
  bindSelectorChange:function(e){
    this.baidu(e.detail.value);
  },

  onLoad: function(){
    this.baidu();
  },

  baidu:function(options){
    var that = this;
    if(options != undefined)
    // 获取区
      that.data.currentCity = options[2];
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'cD65tyBTkAhxPpn4y9ws0d8TrBN4LvyP'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      //获取当前城市天气数据
      var current = data.currentWeather[0];
      console.log(current)
      //切割 current.date 字符串
      var dateArray = current.date.split(' ');
      //星期
      var myWeek = dateArray[0];
      //日期
      var myDate = dateArray[1];
      //当前实时温度
      var realTimeTemperature = dateArray[2].split('：')[1].substring(0, (dateArray[2].split('：')[1].length - 1));
      realTimeTemperature = realTimeTemperature.split('℃')[0];

      //PM2.5 以及污染指数
      var myPm25String = '';
      var myPm25 = current.pm25;
      if (myPm25 <= 50) {
        myPm25String = '优 ' + myPm25;
      } else if (myPm25 <= 100) {
        myPm25String = '良 ' + myPm25;
      } else if (myPm25 <= 150) {
        myPm25String = '轻度污染 ' + myPm25;
      } else if (myPm25 <= 200) {
        myPm25String = '中度污染 ' + myPm25;
      } else if (myPm25 <= 300) {
        myPm25String = '重度污染 ' + myPm25;
      } else {
        myPm25String = '严重污染 ' + myPm25;
      }
      //获取更多城市天气数据
      var original = data.originalData.results[0];
      //获取五条生活小贴士
      var tips = original.index;
      //获取近四天天气数据
      var moreData = original.weather_data;
      // 今日数据
      var todayData = moreData[0];
      // 剔除今日
      moreData = moreData.slice(1)
      //将第一天 date 修改成“今天”
      // todayData.date = '今天';

      // 数据渲染
      that.setData({
        myCity: that.data.currentCity ||current.currentCity,
        realTimeTemperature: realTimeTemperature,
        myTemperature: current.temperature,
        myWeatherDesc: current.weatherDesc,
        myWind: current.wind,
        myPm25String: myPm25String,
        //四天城市天气信息
        moreData: moreData,
        //五条生活小贴士
        tips: tips,
        todayData: todayData,
        myDate : myDate
      })
    }
    // 发起weather请求 
    BMap.weather({
      location: that.data.currentCity,
      fail: fail,
      success: success
    });
  }
})