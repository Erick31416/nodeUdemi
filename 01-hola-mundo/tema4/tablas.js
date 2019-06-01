const fs = require('fs');


let listar = (base, limite) => {
    if (!Number(base)) {
        reject('argumento no numerico, imposible proceder');
        //ojo que despues de un reject continua con la ejecucion por eso pongo un return despues
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} *  ${i} = ${i*base}`);
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
                reject('error');
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