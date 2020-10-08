//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图图片地址
    imgUrls:[
      '../../images/ad1.jpg',
      '../../images/ad2.jpg',
      '../../images/ad3.jpg'
    ],
    //显示面板指示点
    indicatorDots : true,
    //自动播放
    autoplay : true,
    //衔接播放
    circular : true,
    //自动切换毫秒数
    interval : 3000,
    //滑动时切换毫秒数
    duration : 500,
    //地图标记点
    markers : [{
      latitude: 31.148267,
      longitude: 121.671964,
      name: '上海迪斯尼乐园',
      desc: '我现在的位置'
      }]
  },
  onLoad: function () {
    
  },
  tab:()=>{
    console.log("触发地图执行")
  },
  markertab:()=>{
    console.log("触发地图标记执行")
  }
})
