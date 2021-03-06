/**
 * Created by raid on 2016/11/14.
 * 常量放置类
 */
module.exports = Object.freeze({

    //WebSocket Type
    wsMessageType: {
        TYPE_LOGIN: 1, //登入
        TYPE_LOGOUT: 2, //登出
        TYPE_SAY: 3, //说话
        TYPE_PING: 4, //心跳包
        TYPE_SERVICE_NOTICE: 5, //服务端消息通知，比如通知客户端已接收到消息
        TYPE_CLIENT_NOTICE: 6, //客户端消息通知，比如通知服务端已接收到消息
        TYPE_QUESTION: 7, //提问问题
        TYPE_ANSWER: 8, //把问题发送给符合条件的用户
        TYPE_ANSWER_NOTICE: 9, //解答问题，并通知提问者
        TYPE_EVALUATE_NOTICE: 10, //问题采纳（点赞/评价）
        TYPE_RECEIVE_USER_NUM: 11, //提问问题的过程中，如果有用户接收到问题，则返回接收到的用户
        TYPE_FRIEND_APPLY: 12, //申请好友
        TYPE_FRIEND_AGREE: 13, //同意好友申请
    },

});