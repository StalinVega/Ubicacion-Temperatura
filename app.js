const axios = require('axios');
const ubicacion = require('./controlador/ubicacion');
const clima= require('./controlador/clima');


const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc:'nombre de la ciudad que se reqiere requerida',
        demand: true
    }
}).argv;
//ubicacion.getCiudadLatLon(argv.nombre);

clima.getClima(-0.19,-78.5)
    .then(console.log);
