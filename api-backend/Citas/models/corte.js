'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var corteSchema = new Schema({
    lugar: {
        type: 'string',
        required: 'Espacio requerido',
    },
    tamano: {
        type: 'string',
        required: 'Espacio requerido',
    },
    hora: { 
        type: 'number', 
        required:'Espacio requerido'
    },
    dia: {
        type: 'number', 
        required:'Espacio requerido'
    }
});

module.exports = mongoose.model('Corte', corteSchema);