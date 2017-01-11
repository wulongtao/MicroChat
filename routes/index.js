/**
 * Created by raid on 2016/12/11.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
});

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "../views/index.html"));
});

router.get('/chat', function (req, res) {
    res.sendFile(path.resolve(__dirname, "../views/microChat.html"));
});

router.get('/login', function (req, res) {
    var params = req.query;
    // console.log(req.params);
    var phone = params['phone'];
    var password = params['password'];
    var modUser = require('../models/user_model');
    modUser.addUser(phone, password).then(function (resp) {
        res.send(resp);
    });
});
router.get('/questionsDetail', function (req, res) {
    var params = req.query;
    // console.log(req.params);
    var qids = params['qids'];
    var page = params['page'] ? params['page'] : 1;
    var modData = require('../models/data_model');
    modData.questionsDetail(qids, page).then(function (resp) {
        console.log(resp);
        res.send(resp);
    });
});
router.get('/userQuestionInfo', function (req, res) {
    var params = req.query;
    // console.log(req.params);
    var uid = params['uid'];
    var qid = params['qid'];
    var modData = require('../models/data_model');
    var modUser = require('../models/user_model');

    var data = {
        "result": 0,
        "message": '',
        "data": {}
    };

    modUser.userInfo(uid).then(function (user) {
        user['uid'] = user['userId'];
        user['nick'] = user['nick'] ? user['nick'] : '';
        user['avatar'] = user['avatar'] ? user['avatar'] : 'http://webpic.my4399.com/o2o/static/img/upload/micro/defaultAvatar.png';
        data['data']['userInfo'] = user;
        return modData.questionInfo(qid);
    }).then(function (question) {
        data['data']['questionInfo'] = question;

        res.send(data);
    });

});

module.exports = router;