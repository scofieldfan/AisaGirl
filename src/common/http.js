/**
 * 使用fetch获取请求
 * Created on 2017/10/15.
 */
import Config from '../config/config';
import mockIndex from '../mock/index';
/**
 * 获取数据（包含了mock，超时设置）
 * @param string url 接口地址
 * @param string serverUrl 服务端前缀
 * @param string method 请求方法：GET、POST，只能大写
 * @param object body的请求参数，默认为空
 * @param oblect headers
 * @param int timeout 超时时间，默认10s
 * @return 返回Promise
 */
const http = ({
    url,
    method,
    params = {},
    header,
    timeout = 10,
    serverUrl
}) => {
    const isMock = Config.isMock;
    let apiUrl = serverUrl + url;
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        ...header
    };
    let body = '';
    // 获取mock数据
    if (isMock) {
        const mockData = mockIndex(url, params);
        return new Promise((resolve, reject) => {
            // 为了感觉真实，延时返回
            setTimeout(() => {
                if (mockData.state) {
                    resolve(mockData.mockData);
                } else {
                    reject('获取mock数据失败');
                }
            }, 0);
        });
    }
    // 参数处理。get，post处理
    if (params) {
        if (method === 'GET') {
            const paramArr = [];
            for (const key in params) {
                paramArr.push(`${key}=${params[key]}`);
            }
            const paramStr = paramArr.join('&');
            apiUrl =
                apiUrl.indexOf('?') < 0
                    ? apiUrl + '?' + paramStr
                    : apiUrl + paramStr;
        } else {
            body = JSON.stringify(params);
        }
    }
    //打印请求参数
    console.log('request:', {
        method: method,
        apiUrl: apiUrl,
        url: url,
        headers: headers,
        params: params,
        timeout: timeout
    });

    // 设置超时
    const delay = timeout => {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('请求超时'), timeout * 1000);
        });
    };
    // 返回结果
    return new Promise((resolve, reject) => {
        Promise.race([
            fetch(apiUrl, {
                method: method,
                headers: headers,
                body: body
            }),
            delay(timeout)
        ])
            .then(response => {
                try {
                    response.json().then(data => {
                        resolve(data);
                    });
                } catch (e) {
                    throw new Error('response json error');
                }
            })
            .catch(err => {
                reject(err);
            });
    });
};
export default http;
