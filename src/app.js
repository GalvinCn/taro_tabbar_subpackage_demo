import { Component } from 'react'
import { Provider } from 'mobx-react'
import counterStore from './store/counter'
import './app.scss'

const store = {
  counterStore
}

class App extends Component {
   taroGlobalData = {
      x: 3,
      tel:"13888888888",
      projectID: 0,
      projectUrl: ''
    }  
    
  componentDidMount () {
    const myDate = new Date()
    console.log('0310, 测试', myDate)
    if(process.env.TARO_ENV==='weapp'){
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        //console.log('请求完新版本信息的回调')
        //console.log(res)
      })

      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })

      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        //console.log('新版本下载失败')
      })
  }
}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
