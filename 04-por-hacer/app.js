const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');
const colors = require('colors');


//console.log(argv);

let comando = argv._[0];
//let comando ='crear';

switch (comando) {
    case 'crear':

        let tarea = porhacer.crear(argv.descripcion);
        console.log('Comando crear');
        console.log('descripcion', tarea);
        break;
    case 'listar':
        //listado = JSON.parse( porhacer.getlistado());
        listado = ( porhacer.getlistado());

        listado.forEach(element => {
            console.log('------------------------'.green);
            console.log(element.descripcion);
            console.log('estado: ' + element.completado);
            console.log('------------------------'.green);

        });

        break;

    case 'actualizar':
        porhacer.actualizar(argv.descripcion,argv.completado)
        break;
    case 'borrar':
        let borrar = porhacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Eing? Comando desconocido');
        break;
}