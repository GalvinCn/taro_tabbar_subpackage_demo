import { useMemo } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text } from '@tarojs/components' 

export default function Index () {
  const page = useMemo(() => Taro.getCurrentInstance().page, [])

  function gotoMain() {
    console.log('准备跳转到主程序 ')
   // Taro.navigateTo({ url: 'pages/nativeTaro/index' }) 
  }

  useDidShow(() => {  
   // gotoMain();
  })

  return (
    <View className='index'>
      <Text>我是个人中心23323223！</Text>
    </View>
  )
}
