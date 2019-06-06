//const parametros = process.argv[2];
opsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}
opsGenerico = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true
    }
}


const argv = require('yargs')
    .command('crear', 'Crea un item en la lista', opsCrear)
    .command('actualizar', 'Actualiza el estado de un Item', opsGenerico)
    .command('borrar', 'Borra el estado de un Item', opsCrear)
    .command('listar', 'Muestara la lista')
    //.command('listar', 'imprime la tabla de multiplicar', ops)
    .help()
    .argv;

module.exports = {
    argv
}