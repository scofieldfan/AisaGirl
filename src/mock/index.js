/**
 * Created on 2017/10/15.
 * mock数据接口对应文件
 * 规则，切记按照规则书写
 * 接口是classifier/sample 请求与参数中mockType: all(默认default)
 * 则组件是classifierSampleError。
 */


const mockDataAll = {
};

const index = (url, params = '') => {
    try {
        let mockData = {};
        let urlArr = url.split('/');
        // 删除数组中空元素
        for (let i = 0; i < urlArr.length; i++) {
            if (urlArr[i] == '' || typeof urlArr[i] == 'undefined') {
                urlArr.splice(i, 1);
                i = i - 1;
            }
        }

        let viewId = params.mockType || 'default';
        urlArr = urlArr.map((value, index, array) => {
            if (index === 0) {
                return value;
            }
            return (
                value.substring(0, 1).toUpperCase() +
                value.toLowerCase().substring(1)
            );
        });
        viewId =
            viewId.substring(0, 1).toUpperCase() +
            viewId.toLowerCase().substring(1);
        urlArr.push(viewId);
        urlArr = urlArr.join('');
        mockData = mockDataAll[urlArr];
        return {
            state: true,
            mockData
        };
    } catch (err) {
        return {
            state: false,
            err
        };
    }
};

export default index;
