/**
 * Created by raid on 2016/11/14.
 */

var myConst = require('./const');
var worker = require('./worker');

var events = {

    init: init, //初始化events类，只需要传入相关的server对象，事件的回调方法即可
    connect: connect,
    message: message,
    disconnect: disconnect,

};

module.exports = events;

function init(server) {
    var objThis = this;
    worker.init(server, objThis.connect, objThis.message, objThis.disconnect);
}

function connect() {

}

function message(msg) {
    var message_data = JSON.parse(msg);
    var type = message_data['type'];

    switch (type) {

        case myConst.wsMessageType.TYPE_LOGIN:

            break;

    }
}

function disconnect() {

}

