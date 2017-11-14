/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Alert, Text, View, Modal, TouchableHighlight, StyleSheet
} from 'react-native';


export default class App extends Component {

    render() {
        return (
            <View>
                <Home />
            </View>
        )
    }
}

let WORD_A = '招商蛇口是一只好股票!!!!,牧原股份是一只好股票,茅台也是一只好股票,格力是一只好股票,然而只有BAT才是好公司!!!!!';
let WORD_B = '以上的股票都是垃圾!!!!!';

class Home extends Component {

    state = {
        myState: WORD_A
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.redbox} />
                <View style = {styles.bluebox} />
                <View style = {styles.blackbox} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 600
    },
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    blackbox: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    }

})


