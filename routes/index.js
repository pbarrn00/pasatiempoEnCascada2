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

/* POST soluciones cascada 1 */
router.post('/palabras', function(req, res) {
  //Soluciones handler pasatiempos 2
  console.log(req.body.palabraFormada);
  console.log(req.body.numPalabra)
  var palabraFormada =  req.body.palabraFormada
  var num = req.body.numPalabra
  let soluciones = ['clan', 'pena', 'remato', 'torero']
  console.log('En el servidor se devuelve: ', comprobarSoluciones(palabraFormada, num, soluciones))
  res.end(JSON.stringify(comprobarSoluciones(palabraFormada, num, soluciones)))
});

/* POST soluciones cascada 2 */
router.post('/cascada2', function(req, res) {
  //Soluciones handler pasatiempos 2
  let soluciones = ['clan', 'pena', 'remato', 'torero']

});

router.post('/cascada3', function(req, res) {
  //Soluciones handler pasatiempos 3
  let soluciones = ['clan', 'pena', 'remato', 'torero']
  
});

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
