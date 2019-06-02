const fs = require('fs');
const colors = require ('colors');


let listar = (base, limite) => {
    if (!Number(base)) {
        reject('argumento no numerico, imposible proceder');
        //ojo que despues de un reject continua con la ejecucion por eso pongo un return despues
        return;
    }

    console.log(` ╔═════════════╗`.magenta);
    console.log(` ║ tabla del ${base} ║`.magenta);
    console.log(` ╚═════════════╝`.magenta);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} *  ${i} = ${i*base}`.green);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('argumento no numerico, imposible proceder');
            //ojo que despues de un reject continua con la ejecucion por eso pongo un return despues
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} *  ${i} = ${i*base}\n`);
        }
        let nombreArchivo = `tablas/tabla${base}.txt`;
        fs.writeFile(nombreArchivo, data, (err) => {
            if (err) {
                reject(err);
                //ojo que despues de un reject continua con la ejecucion por eso pongo un return despues
                return;
            }
            resolve(nombreArchivo);
        });

    });
}

module.exports = {
    crearArchivo,
    listar
}