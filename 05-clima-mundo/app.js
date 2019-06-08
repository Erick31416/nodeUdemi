const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

var argv = require('yargs')
    .option('direccion', {
        alias: 'd',
        describe: 'direccion',
    })
    .argv;

const getInfo = async (direccion) => {

    try {
        lugarDetalles = await lugar.getLugarLatYlong(direccion);
        temp = await clima.getClima(lugarDetalles.lng, lugarDetalles.lat);
        return `el clima de ${lugarDetalles.direcionRespuesta} es ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion} error : ${error}`;
    }
}

getInfo(argv.direccion)
.then(console.log )
.catch(console.log);

//clima.getClima(resp.lng,resp.lat);




