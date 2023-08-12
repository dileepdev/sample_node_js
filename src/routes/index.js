var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var apis = [{
    users : [
      { name : 'Get All User', url : "localhost:3000/api/user/", method : "GET"},
      { name : 'Get user By Id', url : "localhost:3000/api/users/{id}", method : "GET"},
    ]
  }];

  res.render('index', {
    title: 'Sample Node js REST API by Dileep P',
    apis: apis
  });
});

module.exports = router;