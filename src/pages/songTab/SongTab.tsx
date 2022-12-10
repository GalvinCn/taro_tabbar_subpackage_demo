import { useMemo } from "react";
import React, { useEffect } from "react";
import Taro, { useDidShow, getCurrentInstance } from "@tarojs/taro"; 
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react-lite";  

//export default function Index() {
const Index = observer(() => { 

  useDidShow(() => {  
   // counterStore.setProjectID(app.projectID) 
     
    console.log('我是分类页' )  
  });

   

  return (
    <View className="index"> 
      <Text>我是分类页</Text>
    </View>
  );
})

export default  Index;
