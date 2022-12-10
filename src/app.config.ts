export default {
  pages: [
    'pages/index/index',
    'pages/songTab/SongTab',
    'pages/beautifulTab/BeautifulTab',
    'pages/my/index' 
  ],
 
  "subpackages": [
    {
      "root": "packageB",
      "name": "主功能模块",   //分包别名，分包预下载(https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html)时可以使用
      "pages": [
        'pages/picture/Picture' 
      ]
    }
  ],  
  
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      "desc": "位置信息将用于小程序位置接口的效果展示"  
    }
  }, 
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/tabbar_home_on.png',
        iconPath: 'images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/songTab/SongTab',
        selectedIconPath: 'images/tabbar_cate_on.png',
        iconPath: 'images/tabbar_cate.png',
        text: '分类'
      },
      {
        pagePath: 'pages/beautifulTab/BeautifulTab',
        selectedIconPath: 'images/tabbar_cart_on.png',
        iconPath: 'images/tabbar_cart.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: 'images/tabbar_my_on.png',
        iconPath: 'images/tabbar_my.png',
        text: '关于'
      }
    ]
  }, 
}
