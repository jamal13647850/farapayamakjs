var axios = require('axios');
var qs = require('qs');
var farapayamk = /** @class */ (function () {
    function farapayamk(username, password, from) {
        farapayamk.username = username;
        farapayamk.password = password;
        farapayamk.from = from;
    }
    farapayamk.SendSMS = function (to, text) {
        var data = qs.stringify({
            username: farapayamk.username,
            password: farapayamk.password,
            to: to,
            from: farapayamk.from,
            text: text
        });
        var config = {
            method: 'post',
            url: 'https://rest.payamak-panel.com/api/SendSMS/SendSMS',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        return new Promise(function (resolve, reject) {
            axios(config)
                .then(function (response) {
                resolve(response);
            })["catch"](function (error) {
                reject(error);
            });
        });
    };
    return farapayamk;
}());
module.exports = farapayamk;
