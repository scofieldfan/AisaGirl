/**
 * NavigationActions 操作类
 */
import { NavigationActions } from 'react-navigation';

/***
 * 清除之前路由，并且跳转到新的路由
 * @param navigation
 * @param routeName  新routername
 */
const reset = (navigation, routeName) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: routeName })]
    });
    navigation.dispatch(resetAction);
};
/***
 * 跳转新的路由
 * @param navigation
 * @param routeName  新routername
 * @param params  跳转的参数
 */
const link = (navigation, routeName, params) => {
    navigation.navigate(routeName, params);
};

/***
 * navigation返回
 * @param navigation
 * @param key 参考reactnavigation goBack
 */
const goBack = (navigation, key) => {
    navigation.goBack(key);
    /*
    if (!navigation.goBack(key)) {
        rnBrideg.closeRn({}, params => {
            console.log('params', params);
        });
    }
    */
};
export default {
    reset,
    link,
    goBack
};
