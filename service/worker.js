/**
 * Created by raid on 2016/11/14.
 * 主要处理用户上线下线，发送消息的功能
 */
var logger = require('./logUtils');
var myConst = require('./const');

var dbData = require('../models/data_model');
var dbUser = require('../models/user_model');

var io;

var users = new Map(),
    sockets = null;
var socketList = new Array();

const USER_PREFIX = "user";

var worker = {
    init: init,
    connect: connect,
    message: message,
    disconnect: disconnect,
    sendToClient: sendToClient,
    sendCurrentMessage: sendCurrentMessage,
    sendExceptClient: sendExceptClient,
};

module.exports = worker;


function init(server, connectCallback, messageCallback, disconnectCallback) {
    var objThis = this;
    io = require('socket.io').listen(server);
    sockets = io.sockets;


    /**
     * 创建socket.io
     */
    io.sockets.on('connection', function (socket) {

        socket.on('connect', function () {
            objThis.connect(connectCallback);
        });
        socket.on('message', function (msg) {
            objThis.message(msg, socket);
        });
        socket.on('disconnect', function () {
            objThis.disconnect(disconnectCallback);
        })

    });


}

function connect(connectCallback) {
    logger.info("connect");
    connectCallback();
}

function message(msg, socket) {
    logger.info(msg);

    var message_data = JSON.parse(msg);
    var type = message_data['type'];

    switch (type) {

        case myConst.wsMessageType.TYPE_LOGIN:
            if (message_data['type'] === 1) {
                socket.name = message_data['uid'];
                socketList.push(socket);
                users.set(USER_PREFIX + message_data['uid'], {"uid": message_data['uid'], "sid": message_data['sid']});
            }

            this.sendCurrentMessage(message_data);

            break;

        case myConst.wsMessageType.TYPE_SAY:

            this.sendCurrentMessage(message_data);

            var targetUserId = message_data['targetUserId'];


            this.sendToClient(targetUserId, {
                "chatId": 0,
                "askUserId": message_data['askUserId'] ? message_data['askUserId'] : 0,
                "type": myConst.wsMessageType.TYPE_SAY,
                "targetUserId": message_data['uid'],
                "toUserId": message_data['toUserId'],
                "contentType": message_data['contentType'],
                "content": message_data['content'],
                "addTime": message_data['addTime'],
                "qid": message_data['qid'] ? message_data['qid'] : 0,
            });

            break;

        case myConst.wsMessageType.TYPE_QUESTION:
            dbData.addQuestion({
                "lat": message_data['lat'],
                "lng": message_data['lng'],
                "locationCode": "",
                "address": message_data['address'],
                "content": message_data['content'],
                "contentType": message_data['contentType'],
                "fromUserId": message_data['uid'],
                "addTime": new Date().getTime() / 1000
            }).then(function (qid) {
                if (qid == false) return false;
                message_data['qid'] = qid;
                worker.sendCurrentMessage(message_data);

                //发送给用户
                worker.sendExceptClient(message_data['uid'], {
                    "type": myConst.wsMessageType.TYPE_ANSWER,
                    "targetUserId": message_data['uid'],
                    "qid": qid
                });
            });

            break;

        case myConst.wsMessageType.TYPE_ANSWER_NOTICE:
            var answer_message = {
                "type": myConst.wsMessageType.TYPE_ANSWER_NOTICE,
                "qid": message_data['qid'],
                "targetUserId": message_data['uid'],
                "askUserId": message_data['targetUserId'],
                "result": 0,
                "message": "有人回答了你",
                "randId": 0,
            };

            dbUser.userInfo(message_data['uid']).then(function (user) {
                answer_message['targetNick'] = user['nick'] ? user['nick'] : '';
                answer_message['targetAvatar'] = user['avatar'] ? user['avatar'] : 'http://webpic.my4399.com/o2o/static/img/upload/micro/defaultAvatar.png';
                return dbData.questionInfo(message_data['qid']);
            }).then(function (question) {
                answer_message['content'] = question['content'];
                answer_message['contentType'] = question['contentType'];
                answer_message['voiceSeconds'] = question['voiceSeconds'];
                answer_message['lat'] = question['lat'];
                answer_message['lng'] = question['lng'];
                answer_message['address'] = question['address'];
                answer_message['quTime'] = question['addTime'];
                answer_message['isQPrivacy'] = question['isQPrivacy'];

                worker.sendToClient(message_data['targetUserId'], answer_message);
            });


            worker.sendCurrentMessage(message_data);
            break;

    }


}

function disconnect() {
    logger.info('disconnect');

}

function sendToClient(uid, data) {
    //遍历找到该用户
    socketList.forEach(function (client) {
        if (client.name == uid) {
            client.emit("message", JSON.stringify(data));
        }
    });
}

function sendExceptClient(uid, data) {
    //遍历找到该用户
    socketList.forEach(function (client) {
        if (client.name != uid) {
            client.emit("message", JSON.stringify(data));
        }
    });
}

function sendCurrentMessage(data) {
    var new_message = {
        "type": myConst.wsMessageType.TYPE_SERVICE_NOTICE,
        "messageType": data['type'],
        'messageId': data['messageId'] ? data['messageId'] : 0,
        'result': 0,
        'message': '',
    }

    if (data['qid']) {
        new_message['qid'] = data['qid'];
    }
    if (data['chatId']) {
        new_message['chatId'] = data['chatId'];
    }
    if (data['applyContent']) {
        new_message['applyContent'] = data['applyContent'];
    }

    this.sendToClient(data['uid'], new_message);

}

