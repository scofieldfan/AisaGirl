/**
 * 他人主页顶部自定义导航
 * @zhangjianguang
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RN, { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import navigationUtil from '../../common/navigationUtil';

const backIcon = require('../../assets/navigation/300_icon_back.png');

export default class HeaderLeft extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        navigation: PropTypes.object
    };
    backClickEvent() {
        navigationUtil.goBack(this.props.navigation);
    }
    render() {
        return (
            <View style={styles.wrap}>
                <TouchableOpacity
                    activeOpacity={0.3}
                    onPress={() => {
                        this.backClickEvent();
                    }}
                >
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    backIcon: {
        resizeMode: Image.resizeMode.center
    }
});
