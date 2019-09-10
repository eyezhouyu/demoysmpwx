import wepy from 'wepy'
export default async function fetch(obj) {
    if (obj.header) {
        obj.header['Auth-Token'] = wepy.getStorageSync('Auth-Token')
    } else {
        obj.header = {
            'Auth-Token': wepy.getStorageSync('Auth-Token')
        }
    }
    let response = await wepy.request({
        url: obj.url || '',
        data: obj.data || {},
        method: obj.method || 'POST',
        dataType: obj.dataType || 'json',
        header: obj.header
    })
    if (response.statusCode === 401) {
        wepy.showModel({
            title: '提醒',
            content: '后台服务异常,提示信息11: ' + response.message
        })
    } else if (response.statusCode === 500) {
        wepy.showModel({
            title: '提醒',
            content: '后台服务异常,提示信息: ' + response.message
        })
    } else {
        return {
            'data': response.data,
            'message': response.message,
            'returnTime': response.returnTime,
            'statusCode': response.statusCode
        }
    }
}
