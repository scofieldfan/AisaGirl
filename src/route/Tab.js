/**
 * Created by fanzhang on 2017/11/20.
 */


import React, {Component} from 'react';
import { TabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../pages/Home";
import Top10 from "../pages/Top10";
import UserComment from "../pages/UserComment";

const router = {
    Home: {
        screen: Home ,
        navigationOptions: {
            tabBarLabel: '美图',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-woman' : 'ios-woman-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Top10: {
        screen: Top10,
        navigationOptions: {
            tabBarLabel: '推荐',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    UserComment: {
        screen: UserComment,
        navigationOptions: {
            tabBarLabel: '反馈',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },

};
const TabConfig = {
    animationEnabled: true, // 切换页面时是否有动画效果
    tabBarPosition: "bottom", // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: "none", // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
    tabBarOptions: {
        activeTintColor: "#ff8500", // 文字和图片选中颜色
        inactiveTintColor: "#999", // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: "#fff" // TabBar 背景色
        },
        labelStyle: {
            fontSize: 10 // 文字大小
        }
    }
};

const Tab = TabNavigator(router, TabConfig);

export default Tab;