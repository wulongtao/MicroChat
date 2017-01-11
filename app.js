var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./routes/index');

var app = express();
var port = process.env.PORT || 8080;


//set相关


//相关中间件的配置
//定义icon图标
app.use(favicon(path.join(__dirname, 'public/images/favicon.png')));
//
app.use(methodOverride());
//定义数据解析器
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//定义cookie解析器
app.use(cookieParser());
//定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


var server = require('http').createServer(app);
var worker = require('./service/worker');
server.listen(port);
worker.init(server);

