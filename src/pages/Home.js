/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {StyleSheet,Button,ScrollView, View,Text,FlatList, Image,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Http from '../common/http'
import NavigationUtil from '../common/navigationUtil'
function getData(successCallback,failCallback){

    const options = {
        url:'/index/test',
        method:'POST',
        serverUrl:'http://localhost:8360'
    }
    Http(options)
    .then(res => {
        console.log(res);
        successCallback(res);
    })
    .catch(res => {
        console.log('failCallback', res);
        failCallback(res);
    });
}
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            girls : []
        }

    }
    static navigationOptions = {
        tabBarLabel: 'Home',
    };

    componentWillMount() {

        getData((res)=>{
            this.setState({ girls: res[0].data });
        });


    }


    render() {
        const navigation = this.props.navigation;
        //let image = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2002327407,213211877&fm=27&gp=0.jpg';
        console.log('this.state',this.state);
        let images = this.state.girls.map((item,index) => {
            return  (<TouchableOpacity
                activeOpacity={0.3} key={ index }
                style={ styles.item }
                onPress={() => {
                    NavigationUtil.link(navigation, 'Detail');
                } }
            >
            <View
            ><Image  style={ styles.image } source={ {uri: item }}></Image>
                <Text style={ styles.introd }>测试文字</Text>
            </View>
            </TouchableOpacity>)
        })
        return (
            <View style={styles.mainContainer}>
                    <ScrollView  contentContainerStyle={ styles.container }>
                        { images }
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
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10
    },
    item: {
        width:'50%',
        marginBottom:10,
        padding:5,
        borderRadius:5,
        height: 200,
        position:'relative',
    },
    image:{

        borderRadius:10,
        width:'100%',
        height:'100%',
        resizeMode: Image.resizeMode.cover
    },
    introd:{
        position:'absolute',
        bottom:0,
        height:30,
        lineHeight:30,
        width:'100%',
        textAlign:'center',
        color:'#fff',
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
})
