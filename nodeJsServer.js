
/*--------------------------------头部-----------------------------------------------------------*/
/*---------------------------------头部------------------------------------------------------------*/
/*---------------------------------头部------------------------------------------------------------*/
/*---------------------------------头部------------------------------------------------------------*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var json_water_youqing;
var json_water_webjishu;
var json_water_menu;
var json_water_img;
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//设置根目录
app.use(express.static(__dirname));
app.get('/mibear.html', function (req, res) {
   res.sendFile(__dirname +"/"+"mibear.html" );
})
/*--------------------------------头部ENDEN------------------------------------------------------------*/
/*---------------------------------头部ENDEN------------------------------------------------------------*/
/*---------------------------------头部ENDEN------------------------------------------------------------*/
/*---------------------------------头部ENDEN------------------------------------------------------------*/




//友情链接
app.post('/water_youqing', urlencodedParser, function (req, res) {
   sqlConnection("select","water_youqing");
   res.end(json_water_youqing);
   console.log(json_water_youqing);
})

//web技术
app.post('/water_webjs', urlencodedParser, function (req, res) {
   sqlConnection("select","water_webjishu");
   res.end(json_water_webjishu);
   console.log(json_water_webjishu);
})

//菜单
app.post('/water_menu', urlencodedParser, function (req, res) {
   sqlConnection("select","water_menu");
   res.end(json_water_menu);
   console.log(json_water_menu);
})

//图片 
app.post('/water_img', urlencodedParser, function (req, res) {
   sqlConnection("select","water_img");
   res.end(json_water_img);
   console.log(json_water_img);
})

var server = app.listen(7019, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
  //127.0.0.1:7019/mibear.html
 
})




//数据库链接方法
function sqlConnection(type,tablename) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '931623824',
		database: 'xmibear'
	});
	connection.connect();
	if(type=="select"){
		var sql = 'select * from '+tablename+'';
		//查
		connection.query(sql, function(err, res) {
			if(err) {console.log('[select error]-', err.message);return;}
			console.log('-----------------------------------select-----------------------');
			console.log(JSON.stringify(res));
			console.log("----------------------------------------------------------\n\n");
			if(tablename=="water_youqing")json_water_youqing=JSON.stringify(res);
			if(tablename=="water_webjishu")json_water_webjishu=JSON.stringify(res);
			if(tablename=="water_menu")json_water_menu=JSON.stringify(res);
			if(tablename=="water_img")json_water_img=JSON.stringify(res);
			
			
			return;
		})
		connection.end();
	}
	
}