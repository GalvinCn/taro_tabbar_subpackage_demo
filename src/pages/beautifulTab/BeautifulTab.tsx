 
import { View, Text } from "@tarojs/components";  
import { observer } from "mobx-react-lite";
import Taro, { useDidShow } from '@tarojs/taro' 

//export default function Index() {
const Beautiful = observer(() => {   

  useDidShow(() => {  
    Taro.navigateTo({ url: '/packageB/pages/picture/Picture' }) 
  })  

  return (
    <View className="index">
      <Text>此页面将载入子包内的页面</Text>
    </View>
  );
})

export  default Beautiful;
