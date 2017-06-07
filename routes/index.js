var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/0801199601477', function(req,res,next){
  var datos = [
                {"Nombre":"Dilcia Rosibel Cruz Salgado","Cuenta":"0801199601477","Correo Electronico":"dilcia_salgado1995@hotmail.com"}
              ];
  res.json(datos);

});

router.get('/sumar', function(req,res,next){
  res.render('suma',{"txtentero1":"","txtentero2":""});
});


var resultado = [];

router.post('/sumar',function(req,res,next){
  console.log(req.body);
    resultado.push(parseInt(req.body.txtentero1)+parseInt(req.body.txtentero2));
    var msgs = resultado;
    var rtObject = {}; 
    rtObject.txtentero1 = req.body.txtentero1;
    rtObject.txtentero2 = req.body.txtentero2;
    rtObject.msg= msgs;
  res.render('suma', rtObject);
});

module.exports = router;
