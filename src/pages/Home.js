/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {StyleSheet,Button, View,Text, Image} from 'react-native';
import React, {Component} from 'react';

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',

    };
    render() {

        return (
            <View style={ { width:400,height:800,alignItems:'center', justifyContent:'center' } }>
                <Button title="go Detail" onPress={ ()=> {
                    this.props.navigation.navigate('Detail')
                }}></Button>
                <Text>Home</Text>
            </View>
        );
    }
}
