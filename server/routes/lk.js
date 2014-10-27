var router = require('express').Router();

router.post('/user/login/', function(req, res) {
  //var md5 = require('blueimp-md5').md5;
  var logins = require('./../data/logins') || {}
    , users = require('./../data/users') || {};
  var r = req.body;
  var login = logins[r.login];
  if (login && login.password == r.password){
    var user = users[login.userId];
    if (user){
      req.session.User = {autorized : true, roles : login.roles, data : {login : login, user : user}};
      res.status(200).send({success : true, roles : login.roles, user : {id : login.userId, firstname : user.firstname}});
    } else {
      res.status(401).send({success : false});
    }
  } else {
    res.status(401).send({success : false});
  }
});

router.get('/user/logout/', function(req, res) {
  req.session.destroy();
  res.status(200).send({success : true});
});

router.get('/user/:id/', function(req, res) {
  var users = require('./../data/users') || {};
  res.status(200).send(users[req.param('id')]);
});

module.exports = router;
