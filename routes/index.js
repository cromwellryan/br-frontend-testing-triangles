var express = require('express'),
    router = express.Router(),
    triangles = require('../lib/triangles');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(triangles[getRandomInt(0, triangles.length - 1)]);
});

module.exports = router;
