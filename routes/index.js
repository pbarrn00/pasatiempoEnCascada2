var express = require('express');
var router = express.Router();
var path = require('path');
const publicDirectory = path.join(__dirname, '../public');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', {root: publicDirectory}); //DUDA PQ QUITANDO ESTO AUN REDIRECICONA
});

/* GET cascada 1 page. */
router.get('/cascada', function(req, res) {
  res.sendFile('cascada.html', {root: publicDirectory});
});

/* GET cascada 2 page. */
router.get('/cascada2', function(req, res) {
  res.sendFile('cascada2.html', {root: publicDirectory});
});

/* GET cascada 3 page. */
router.get('/cascada3', function(req, res) {
  res.sendFile('cascada3.html', {root: publicDirectory});
});

module.exports = router;
