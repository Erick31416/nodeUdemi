const  argv  = require('./config/yargs').argv;
const porhacer  = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];
//let comando ='crear';

switch (comando) {
    case 'crear':

        let tarea = porhacer.crear (argv.descripcion);
        console.log('Comando crear');
        console.log('descripcion',tarea);
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