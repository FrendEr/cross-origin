var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var obj = {};
    
	obj.title = 'title';
    obj.data = 'data';
	res.header('Content-type','application/json');
	res.header('Charset','utf8');
	res.send('{"title": "title"}');
    res.send(req.query.callback + '('+ JSON.stringify(obj) + ');');
    console.log(req.query.callback);
});

module.exports = router;
