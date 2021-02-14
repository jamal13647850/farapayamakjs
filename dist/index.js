var axios = require('axios');
var qs = require('qs');
var farapayamk = /** @class */ (function () {
    function farapayamk(username, password, from) {
        farapayamk.username = username;
        farapayamk.password = password;
        farapayamk.from = from;
    }
    farapayamk.urlStart = "https://rest.payamak-panel.com/api/SendSMS/";
    farapayamk.setConfig = function (url, data) {
        return {
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
    };
    farapayamk.setRequest = function (data, url) {
        var config = farapayamk.setConfig(url, data);
        return new Promise(function (resolve, reject) {
            axios(config)
                .then(function (response) {
                resolve(response.data);
            })["catch"](function (error) {
                reject(error);
            });
        });
    };
    farapayamk.SendSMS = function (to, text) {
        var data = qs.stringify({
            username: farapayamk.username,
            password: farapayamk.password,
            to: to,
            from: farapayamk.from,
            text: text
        });
        return farapayamk.setRequest(data, farapayamk.urlStart + "SendSMS");
    };
    farapayamk.GetDelivery = function (recID) {
        var data = qs.stringify({
            username: farapayamk.username,
            password: farapayamk.password,
            recID: recID
        });
        return farapayamk.setRequest(data, farapayamk.urlStart + "GetDeliveries2");
    };
    farapayamk.GetCredit = function () {
        var data = qs.stringify({
            username: farapayamk.username,
            password: farapayamk.password
        });
        return farapayamk.setRequest(data, farapayamk.urlStart + "GetCredit");
    };
    farapayamk.GetUserNumbers = function () {
        var data = qs.stringify({
            username: farapayamk.username,
            password: farapayamk.password
        });
        return farapayamk.setRequest(data, farapayamk.urlStart + "GetUserNumbers");
    };
    return farapayamk;
}());
module.exports = farapayamk;
