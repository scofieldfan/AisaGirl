/**
 * Created by fanzhang on 2017/11/20.
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Tab from './Tab'

import Detail  from '../pages/Detail'

const RootNavigator = StackNavigator({
    Tab: {
        screen: Tab,
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            headerTitle: 'Detail',
        },
    },
},{
    initialRouteName: 'Tab',
    headerMode: 'none'
});

export default RootNavigator;