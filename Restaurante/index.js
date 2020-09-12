//Restaurante
var express = require('express')
var app = express()
var estado = "preparando"
const axios = require('axios')
var pedido=""
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
function function2() {
    axios.post('http://localhost:8082/recibirpedido', {
  pedido: pedido
})
.then((res) => {
  //console.log(`statusCode: ${res.statusCode}`)
  estado = "entregada al repartidor"
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})
}



app.post('/pedido', function (req, res) {
    pedido = req.body.combo
    console.log('Orden recibida: '+pedido)
    setTimeout(function2, 200);
    res.send('recibido, empezaremos a preparar la orden')
  })

  app.post('/estado', function (req, res) {
    console.log('estado de la orden: '+req.body.orden)
    res.send(estado)
  })

  
app.get('/casa', function (req, res) {
  res.send('Restaurante!')
})


app.listen(8081, function () {
  console.log('app listening on port 8081!')
})