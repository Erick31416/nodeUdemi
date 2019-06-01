//const parametros = process.argv[2];
ops = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}

const argv = require('yargs')
    .command('listar', 'imprime la tabla de multiplicar', ops)
    .command('crear', 'crea la tabla de multiplicar', ops)
    .argv;

module.exports = {
    argv
}