/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { View, Image,Text} from 'react-native';
import React, {Component} from 'react';
import {ViewPager, IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';

export default class ImageView extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const images = this.props.images || {};
        let imgViews = images.map( (image,index) => {
            console.log('image,',image);
            return <View style={{backgroundColor:'#000'}} key={index} >
                <Image style={ { width:'100%',height:'100%', resizeMode: Image.resizeMode.contain }} source={ {uri: image  }}></Image>
            </View>
        }) ;
        return (

            <IndicatorViewPager
                style={{height: '100%'}}
                indicator={this._renderDotIndicator()}
            >
                { imgViews}
            </IndicatorViewPager>

        );
    }


    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    _renderDotIndicator() {
        return <ViewPager  />;
    }



}
