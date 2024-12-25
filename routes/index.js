var express = require('express');
var router = express.Router();

/* main page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

module.exports = router;
