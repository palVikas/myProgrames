var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('mineSweeperIndex', { title: 'Welcome To MineSweeper' });
});

module.exports = router;
