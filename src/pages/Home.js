/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {StyleSheet,Button,ScrollView, View,Text,FlatList, Image} from 'react-native';
import React, {Component} from 'react';

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',

    };
    render() {

        let image = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2002327407,213211877&fm=27&gp=0.jpg';
        return (
            <View style={styles.mainContainer}>
                    <ScrollView  contentContainerStyle={ styles.container }>
                        <View style={ styles.item }><Image  style={ styles.image } source={ {uri: image}}></Image></View>
                        <View style={ styles.item }><Image  style={ styles.image } source={ {uri: image}}></Image></View>
                        <View style={ styles.item }><Image  style={ styles.image } source={ {uri: image}}></Image></View>
                        <View style={ styles.item }><Image  style={ styles.image } source={ {uri: image}}></Image></View>
                        <View style={ styles.item }><Image  style={ styles.image } source={ {uri: image}}></Image></View>
                    </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        width:'100%',
        height:3500,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingTop: 22
    },
    item: {
        padding: 10,
        width:'50%',
        height: '100%',
    },
    image:{

        width:'100%',
        height:'100%',
        resizeMode: Image.resizeMode.cover
    }
})
