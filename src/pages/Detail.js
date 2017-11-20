/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {StyleSheet,Button, View,Text, Image} from 'react-native';
import React, {Component} from 'react';
import ImageView from '../component/ImageView';
let images = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511102167151&di=e5fa6cd64da09364f0c00d496cc3d062&imgtype=0&src=http%3A%2F%2Fimages.enet.com.cn%2Fegames%2Farticleimage%2F2013%2F1022%2F20131022093713615.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511102228555&di=410e9900972f514e161869559cc85992&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140305%2F240449-1403050T41292.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511102228555&di=fe9425b73809c3399812f81262274f0d&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F164%2F13%2F27DK0O51G801.jpg'
]
export default class Detail extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',

    };
    render() {

        return (
            <ImageView images={images}></ImageView>
        );
    }


}
