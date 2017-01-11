/**
 * Created by raid on 2016/12/12.
 */

var sequelize = require('sequelize');
var sha1 = require('sha1');
var Memcached = require('memcached');
var memcached = new Memcached('127.0.0.1:11211');
var config = require('../config/database.json');
var dbUserConfig = config['o2o_user'];

var userKey = "cpC5zTKKG9etzHP8f4y8Tt726BbUNPenVwn842uanJWmr3JK";
var userSessionKey = "q3LzZf96HPJYZ7Dy7uD8CvsEHYUqpweCr9w4bUTVJBn9Mc7S";
var sessionCachePrefix = "zhuzhu-zz-app-user-sid-";

var dbUser = new sequelize(dbUserConfig.database, dbUserConfig.user, dbUserConfig.password, {
    dialect: dbUserConfig.driver,
    logging: console.log,
    define: {
        timestamps: false
    }
});

var userModel = {
    addUser: addUser,
    userInfo: userInfo,
};

module.exports = userModel;


function addUser(phone, password) {

    var res = {
        result: 0,
        message: ""
    };

    if (!phone || !password) {
        res['result'] = 1001;
        res['message'] = "用户名或密码为空";
        return res;
    }

    var sql = "SELECT * FROM `user` AS `u` JOIN `user_info` AS `ui` ON `u`.`userId`=`ui`.`userId` WHERE `phone`= '" + phone + "' LIMIT 1";
    return dbUser.query(sql, {type: sequelize.QueryTypes.SELECT}).then(function (users) {
        if (users.length === 0) {
            res['result'] = 1002;
            res['message'] = "用户不存在";
            return res;
        }
        return users[0];
    }).then(function (user) {
        return dbUser.query("SELECT * FROM `user_key` WHERE `userId` = " + user['userId'], {type: sequelize.QueryTypes.SELECT}).then(function (data) {
            data = data[0];
            var key = sha1(user['userId'] + password + data['salt'] + userKey);

            if (key !== data['key']) {
                res['result'] = 1003;
                res['message'] = "密码错误";
                return res;
            }

            var time = new Date().getTime() / 1000;
            var sid = sha1(user['userId'] + userSessionKey + time);
            memcached.set(userSessionKey + user['userId'], sid, 2592000);

            user['avatar'] = user['avatar'] == "" ? "http://webpic.my4399.com/o2o/static/img/upload/micro/defaultAvatar.png" : user['avatar'];

            res['data'] = {
                "uid": user['userId'],
                "sid": sid,
                "nick": user['nick'],
                "avatar": user['avatar']
            };

            return res;
        });
    });
}

function userInfo(uid) {
    var sql = "SELECT * FROM `user` AS `u` JOIN `user_info` AS `ui` ON `u`.`userId`=`ui`.`userId` WHERE `u`.`userId` = " + uid + " LIMIT 1";
    return dbUser.query(sql, {type: sequelize.QueryTypes.SELECT}).then(function (users) {
        if (users.length === 0) {
            return false;
        }
        return users[0];
    });
}