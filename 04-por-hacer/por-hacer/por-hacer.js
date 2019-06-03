const fs = require('fs');

let listadoPorHacer = [];

let jsonListadoPorHacer = JSON.stringify(listadoPorHacer);

const guardarEnDB = (listadoPorHacer) => {

    let jsonListadoPorHacer = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',jsonListadoPorHacer, (err)=>{ console.log(err) }
    );
}

const crear = (descripcion) => {
    
    let porhacer = {
        descripcion,
        completado : false
    }

    listadoPorHacer.push(porhacer);
    guardarEnDB(listadoPorHacer);
    return listadoPorHacer;
}

module.exports = {
    crear
}