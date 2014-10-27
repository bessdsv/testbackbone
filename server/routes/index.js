var router = require('express').Router();

router.get('/', function(req, res) {
  console.log('index');
  res.render('index.html');
});

module.exports = router;
