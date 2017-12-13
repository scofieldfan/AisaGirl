/**
 * Created on 2017/10/15.
 * 常用简单工具类
 * import Util from '/common/util';
 *
 * Util.size.width;
 * Util.size.height;
 * Util.scalePixel(10);
 */

import { PixelRatio, Dimensions } from 'react-native';

const util = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    scalePixel: function(pixel) {
        return (
            (Math.abs(pixel) === 1 ? 1 / PixelRatio.get() : PIXELS[pixel]) ||
            pixel
        );
    },
    /**
     * 数字转化为末尾是"万"的字符串
     * @param num
     * @returns {*}
     */
    toTenThousand: function(num) {
        let result = num;
        if (num > 9999) {
            result = (num / 10000).toFixed(2) + 'w';
        }

        return result;
    },
    /**
     * 数字转化为国际标准形式(3位加一个逗号)
     * @param num
     * @returns {*}
     */
    toStandard: function(num) {
        num = num === 0 ? '0' : num;
        return (num || '')
            .toString()
            .replace(/(?=(?!\b)(?:\d\d\d)+(?!\d))/g, ',');
    },
    /**
     * 手机号码格式化为 xxx-xxxx-xxxx格式
     * @param phone
     */
    toPhoneNum: function(phone) {
        return phone.replace(/(\d\d\d)(\d\d\d\d)(\d\d\d\d)/g, '$1-$2-$3');
    }
};

const LENGTH = 750;
const SCALE = util.size.width / 750;
const PIXELS = [];
for (let i = -LENGTH; i < LENGTH; i++) {
    PIXELS[i] = Math.round(i * SCALE);
}

export default util;
