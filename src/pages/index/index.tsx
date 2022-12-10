import { Component } from "react";
import { useMemo } from "react";
import { View, Text } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import { observer } from "mobx-react-lite";
import { useStores } from "@/hooks/useStores";

const Index = observer(() => {
  const store = useStores(); // 获取store
  const { counterStore } = store;
  const { 
    projectTitle, 
    projectID,
    projectURL,
    requestUrl, 
  } = counterStore;

  //const page = useMemo(() => Taro.getCurrentInstance().page, []);
  useDidShow(() => {
   // const tabbar = page.getTabBar();
    console.log("  我是首页！"); 
  }); 

  return (
    <View className="index">
      <Text>我是首页</Text> 
    </View>
  );
});

export default Index;
