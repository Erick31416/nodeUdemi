const  argv  = require('./config/yargs').argv;

//console.log(argv);

let comando = argv._[0];
//let comando ='crear';

switch (comando) {
    case 'crear':
        console.log('Comando crear');
    break;

    case 'listar':
        console.log('Comando listar');
    break;

    case 'actualizar':
        console.log('Comando actualizar');
    break;

    default:
        console.log('Eing? Comando desconocido');
    break;
}