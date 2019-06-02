//
//
const fs = require('fs');
const { crearArchivo, listar } = require('./tablas');
const colors = require ('colors');

const argv = require('./config').argv;

let command = argv._[0];

switch (command) {
    case 'listar':
        listar(argv.base, argv.limite)

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((respuesta) => console.log(`Se ha creado el archivo ${respuesta}`))
            //.then((respuesta) => console.log('Se ha creado el archivo '+ String(respuesta).green ))
            .catch((respufesta) => console.log(`Se ha detectado el siguente error : ${respufesta}`));
        break;

    default:
        console.log('comando no reconocido');
        break;
}