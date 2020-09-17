//repartidor
var express = require('express')
var app = express()
const axios = require('axios')
var estado = 'en camino a entregar la orden'
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var pedido = ""
app.post('/recibirpedido', function (req, res) {
    console.log('Orden recibida: '+req.body.pedido)
    res.send('pedido recibido y en camino a entregar')
  })
  app.post('/estado', function (req, res) {
    console.log('estado de la orden: '+req.body.orden)
    estado = 'en camino a entregar la orden'
    console.log(estado)
    res.send(estado)
  })
  app.post('/entregado', function (req, res) {
    console.log('estado de la orden: '+req.body.orden)    
    estado = "entregada"
    console.log(estado)
    res.send(estado)
  })
function entregado(cuerpo){
  console.log('estado de la orden: '+cuerpo)    
    estado = "entregada"
    console.log(estado)
    return estado
}
function orden(orden){
  console.log('Orden recibida: '+orden)
  return 'pedido recibido y en camino a entregar'
}
function estado2(orden){
    console.log('estado de la orden: '+orden)
    estado = 'en camino a entregar la orden'
    console.log(estado)
    return estado
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.listen(8080, function () {
  console.log('app listening on port 8080!')
})

module.exports.entregado = entregado;
module.exports.orden = orden;
module.exports.estado2 = estado2;