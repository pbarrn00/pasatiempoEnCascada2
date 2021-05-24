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

/* GET readme.md */
router.get('/README.md', function(req, res) {
  res.sendFile('README.md', {root: publicDirectory});
});

/* POST soluciones cascada 1 */
router.post('/palabras', function(req, res) {
  var palabraFormada =  req.body.palabraFormada
  var num = req.body.numPalabra
  let soluciones = ['clan', 'pena', 'remato', 'torero']
  res.end(JSON.stringify(comprobarSoluciones(palabraFormada, num, soluciones)))
});

/* POST soluciones cascada 2 */
router.post('/palabras2', function(req, res) {
  var palabraFormada =  req.body.palabraFormada
  var num = req.body.numPalabra
  let soluciones = ['pera', 'pare', 'cámara', 'brasas']
  res.end(JSON.stringify(comprobarSoluciones(palabraFormada, num, soluciones)))
});

router.post('/palabras3', function(req, res) {
  var palabraFormada =  req.body.palabraFormada
  var num = req.body.numPalabra
  let soluciones = ['euro', 'olor', 'nombre', 'brizna']
  res.end(JSON.stringify(comprobarSoluciones(palabraFormada, num, soluciones)))
});

//Soluciones handler pasatiempos 2
function comprobarSoluciones(palabraFormada, n, soluciones){
  var esValido = false;
  
  switch(n){
    case '1':
      if(palabraFormada == soluciones[0])
        esValido = true    
      break;
    case '6':
      if(palabraFormada == soluciones[1])
        esValido = true
      break;
    case '7':
      if(palabraFormada == soluciones[2])
        esValido = true
      break;
    case '12':
      if(palabraFormada == soluciones[3])
        esValido = true
      break;
    default:
      console.log("no he entrado")
  }
  return esValido;
}

module.exports = router;
