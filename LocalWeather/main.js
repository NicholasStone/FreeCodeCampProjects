const weather_api_uri = 'http://apis.juhe.cn/simpleWeather/query';
const ip_api_uri = 'http://ip.taobao.com/service/getIpInfo.php?ip=myip';

/**
 * request though ajax
 * @param params url, method, payloads, success callback, error callback
 */
function ajaxGet({uri = '', parameter = {}, success, error}) {
    // serialize parameters
    let queries = [];
    if (Object.getOwnPropertyNames(parameter).length !== 0){
        for (let [key, val] of Object.entries(parameter)){
            queries.push(`${key}=${val}`);
        }
    }
    let url = uri + (queries.length === 0 ? "" : "?" + queries.join("&"));

    let request = new XMLHttpRequest();

    request.open("get", url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400){
            success(this.response);
        }else{
            console.log("server reached yet error was returned ", this.status, this.response);
        }
    };

    request.onerror = function (e) {
        error(e)
    };

    request.send();
}

function getIp() {
    ajaxGet({
        uri: ip_api_uri,
        success: function (response) {
            response.city
        },
        error: function (err) {
            console.log(err);
        }});
}

getIp();