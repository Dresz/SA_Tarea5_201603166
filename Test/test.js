const assert = require('chai').assert;
const entregado = require('../src/Repartidor/index').entregado;
const orden = require('../src/Repartidor/index').orden;
const estado = require('../src/Repartidor/index').estado2;


describe('Entrega de orden', function(){
    it('Retorna el estado de la orden', function(){
        assert.equal(entregado(1105), 'entregada');
    })
})




describe('Registro de nueva orden', function(){
    it('Retorna el ok de haber recibido la nueva ornde', function(){
        assert.equal(orden(1105), 'pedido recibido y en camino a entregar');
    })
})

describe('Devuelve el estado de la orden', function(){
    it('Deberia responder el estado de la orden', function(){
        assert.equal(estado(1105), 'en camino a entregar la orden');
    })
})

