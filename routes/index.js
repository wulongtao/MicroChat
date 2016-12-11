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

module.exports = router;