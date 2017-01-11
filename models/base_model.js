/**
 * Created by raid on 2016/12/12.
 */

var Sequelize = require('sequelize');
var config = require('../config/database.json');
var dbUser = config['o2o_user'];
var dbData = config['o2o_data'];


var model = {
    dbUser: getDbUser,
    dbData: getDbData,

};

module.exports = model;

function getDbUser() {
    return new Sequelize(dbUser.database, dbUser.user, dbUser.password, {
        dialect: dbUser.driver,
        logging: console.log,
        define: {
            timestamps: false
        }
    });
}

function getDbData() {
    return new Sequelize(dbData.database, dbData.user, dbData.password, {
        dialect: dbData.driver,
        logging: console.log,
        define: {
            timestamps: false
        }
    });
}