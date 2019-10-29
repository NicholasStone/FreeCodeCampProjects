const weather_api_uri = 'http://apis.juhe.cn/simpleWeather/query';
const ip_api_uri = 'http://ipinfo.io';

/**
 * request though ajax
 * @param params url, method, payloads, success callback, error callback
 */
function ajaxGet(params = {url: '', parameter: {}, success: ()=>{}, error: () => {}}) {
    // serialize parameters
    if (Object.getOwnPropertyNames(params.parameter).length !== 0){
        
    }

    let request = new XMLHttpRequest();
    request.open("get", params.url, true);

    request.onload = function () {
        if (status >= 200 && status < 400){
            // succeed
            params.success(JSON.parse(this.response));
        }
    };

    request.onerror = function (e) {
        params.error(e)
    };

    request.send();
}

function getIp() {
    ajaxGet({
        url: ip_api_uri,
        parameter: {

        }
    })
}