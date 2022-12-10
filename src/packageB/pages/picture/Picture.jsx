import { useEffect, useState, useMemo } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { useStores } from "@/hooks/useStores";
import { observer } from "mobx-react-lite";
import { View, Text } from "@tarojs/components"; 

const Picture = observer(() => {
  useDidShow(() => {
    console.log("我是图片页面！");
  }); 
  

  useEffect(() => {
    console.log("我是图片页面！ useEffect"); 
  }, [ ]); // eslint-disable-line react-hooks/exhaustive-deps 

  

  return (
    <View className="index">
       <Text>我是子包packageA中的页面，非主包的tabbar页面 </Text>  
      <tabbar></tabbar>
    </View>
  );
});

export default Picture;
