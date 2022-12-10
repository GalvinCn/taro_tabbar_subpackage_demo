import { Component, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import { useCallback, useState } from "react"; 
import { useStores } from "../hooks/useStores";
import { observer } from "mobx-react-lite";

import './index.scss' 

const customTabBar = observer(() => {
  const store = useStores(); // 获取store
  const { counterStore } = store;
  const {
    selected 
  } = counterStore;

  const  [color, setColor] = useState('#000000')
  const  [selectedColor, setSelectedColor] = useState('#DC143C')  
  const  [list, setList] = useState([{}])

  useEffect(() => {
    let myList =  [
      {
        pagePath: '/pages/index/index',
        selectedIconPath: '../images/tabbar_home_on.png',
        iconPath: '../images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: '/pages/songTab/SongTab',
        selectedIconPath: '../images/tabbar_cate_on.png',
        iconPath: '../images/tabbar_cate.png',
        text: '分类'
      },
      {
        pagePath: '/pages/beautifulTab/BeautifulTab',
        selectedIconPath: '../images/tabbar_cart_on.png',
        iconPath: '../images/tabbar_cart.png',
        text: '购物车'
      },
      {
        pagePath: '/pages/my/index',
        selectedIconPath: '../images/tabbar_my_on.png',
        iconPath: '../images/tabbar_my.png',
        text: '关于'
      }
    ];

    setList(myList);    
     
  }, [ ]); // eslint-disable-line react-hooks/exhaustive-deps 
   

  function switchTab(index, url) { 
    setSelectedBar(index, url) 
  }

  const  setSelectedBar = (idx, url) => {
    counterStore.setSelected(idx);
    Taro.switchTab({ url });
    console.log('1127 已切换到tab --this.state.selected, idx, url', selected, idx, url) 
  } 

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={() => switchTab(index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  })

  export default customTabBar; 

