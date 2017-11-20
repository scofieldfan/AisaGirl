/**
 * Created by fanzhang on 2017/11/20.
 */
import {StyleSheet,Button, View,Text, Image} from 'react-native';
import React, {Component} from 'react';
import StackNav from './route/StackNav'

export default class Index extends Component {

    render() {

        return (
            <View style={ { width:'100%',height:'100%' } }>
                <StackNav/>
            </View>
        );
    }

}
