/**
 * Created by raid on 2016/12/17.
 */
/**
 * Created by raid on 2016/12/12.
 */

var sequelize = require('sequelize');
var config = require('../config/database.json');
var dbDataConfig = config['o2o_data'];

var dbData = new sequelize(dbDataConfig.database, dbDataConfig.user, dbDataConfig.password, {
    dialect: dbDataConfig.driver,
    logging: console.log,
    define: {
        timestamps: false
    }
});

var dataModel = {
    addQuestion: addQuestion,
    latestQuestion: latestQuestion,
    questionsDetail: questionsDetail,
    questionInfo: questionInfo,
};

function addQuestion(data) {
    return this.latestQuestion().then(function (question) {
        if (question == false) return false;

        data.qid = question.qid + 1;
        var que = dbData.define('questions', data);
        return que.upsert(data)
            .then(function (resp) {
                if (resp == true) {
                    return data.qid;
                } else {
                    return false;
                }
            });
    });


}

function latestQuestion() {
    var sql = "SELECT * FROM `questions` ORDER BY `qid` DESC LIMIT 1";
    return dbData.query(sql, {type: sequelize.QueryTypes.SELECT}).then(function (questions) {
        if (questions.length === 0) {
            return false;
        }
        return questions[0];
    })

}

function questionsDetail(qids, page) {

    var page = " LIMIT " + (page - 1) * 20 + ",20 ";
    var order = " ORDER BY `q`.`addTime` DESC ";

    var sql = "SELECT * FROM `o2o_data`.`questions` AS `q` JOIN `o2o_user`.`user_info` AS `ui` ON `q`.`fromUserId`=`ui`.`userId` JOIN `o2o_user`.`user` AS `u` ON `q`.`fromUserId`=`u`.`userId` WHERE `q`.`qid` IN (" + qids + ")" + order + page;
    console.log(sql);

    return dbData.query(sql, {type: sequelize.QueryTypes.SELECT}).then(function (questions) {
        for (var i = 0; i < questions.length; i++) {
            questions[i]['avatar'] = questions[i]['avatar'] == "" ? "http://webpic.my4399.com/o2o/static/img/upload/micro/defaultAvatar.png" : questions[i]['avatar'];
        }

        return {
            "result": 0,
            "message": "",
            "data": questions,
        };
    })
}

function questionInfo(qid) {
    var sql = "SELECT * FROM `questions` WHERE `qid` = " + qid + " LIMIT 1";
    return dbData.query(sql, {type: sequelize.QueryTypes.SELECT}).then(function (questions) {
        if (questions.length === 0) {
            return false;
        }
        return questions[0];
    });
}

module.exports = dataModel;