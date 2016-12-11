/**
 * Created by raid on 2016/11/14.
 * 主要处理用户上线下线，发送消息的功能
 */
var logger = require('./logUtils');

var io;

var users = new Array(),
    sockets = null;

var worker = {
    init: init,
};

module.exports = worker;


function init(server) {
    io = require('socket.io').listen(server);
    sockets = io.sockets;


    /**
     * 创建socket.io
     */
    sockets.on('connection', function (socket) {

        socket.on('connect', connect);

        socket.on('message', message);


    });


}

function connect() {
    logger.info("connect");
}

function message(msg) {

    logger.info(msg);

}

