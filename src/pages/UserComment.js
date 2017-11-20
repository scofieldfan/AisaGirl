/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {StyleSheet, View,Text,Button, Image} from 'react-native';
import React, {Component} from 'react';

export default class UserComment extends Component {
    static navigationOptions = {
        tabBarLabel: 'Top10',

    };
    render() {

        return (
            <Button
                onPress={() => this.props.navigation.navigate('Index')}
                title="Go to notifications"
            />
        );
    }

}
