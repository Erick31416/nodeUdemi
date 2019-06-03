//const parametros = process.argv[2];
opsCrear = {
    descripicion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}
opsListar = {
    descripicion: {
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
    .command('actualizar', 'Actualiza el estado de un Item', opsListar)
    //.command('listar', 'imprime la tabla de multiplicar', ops)
    .help()
    .argv;

module.exports = {
    argv
}