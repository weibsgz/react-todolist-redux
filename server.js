var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

app.get('/api/todolist', function (req, res) {
    res.json(['express数据 1','bbb','cccc'])
})


var server = app.listen(4000, 'localhost', function () {
    console.log('服务器已经启动，地址是http://localhost:4000')
  })