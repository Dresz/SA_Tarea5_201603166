
//ESB
var express = require('express')
var app = express()
const axios = require('axios')
var pedido=""
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/pedido', function (req, res) {
    pedido = req.body.combo
    console.log('Orden recibida en ESB: '+pedido)
    axios.post('http://localhost:8081/pedido', {
      combo: pedido
      })
      .then((res) => {
      //console.log(`statusCode: ${res.statusCode}`)
      estado = "entregada al repartidor"
      console.log(res.data)
      })
      .catch((error) => {
      console.error(error)
      })
    res.send('recibido, empezaremos a preparar la orden')
  })


  app.post('/recibirpedido', function (req, res) {
  axios.post('http://localhost:8080/recibirpedido', {
  pedido: req.body.pedido
  })
  .then((res) => {
  //console.log(`statusCode: ${res.statusCode}`)
  //estado = "entregada al repartidor"
  console.log(res.data)
  })
  .catch((error) => {
  console.error(error)
  })
    res.send('pedido recibido y en camino a entregar')
  })
  var estado = ""

  app.post('/estado', function (req, res) {
    axios.post('http://localhost:8081/estado', {
      orden: req.body.orden
    })
    .then((res) => {
      //console.log(`statusCode: ${res.statusCode}`)
      estado= res.data
    })
    .catch((error) => {
      console.error(error)
    })
    res.send(estado)
  })
  
  var estado2 = ""
  app.post('/estado2', function (req, res) {
    axios.post('http://localhost:8080/estado', {
      orden: req.body.orden
    })
    .then((res) => {
      //console.log(`statusCode: ${res.statusCode}`)
      estado2= res.data
    })
    .catch((error) => {
      console.error(error)
    })
    res.send('en camino a entregar la orden')
  })
  

  app.post('/entregado', function (req, res) {
    axios.post('http://localhost:8080/entregado', {
      orden: req.body.orden
    })
    .then((res) => {
      //console.log(`statusCode: ${res.statusCode}`)
      estado= res.data
    })
    .catch((error) => {
      console.error(error)
    })
    res.send('entregado')
  })

  app.listen(8082, function () {
    console.log('app listening on port 8082!')
  })