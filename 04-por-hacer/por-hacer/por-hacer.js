const fs = require('fs');

let listadoPorHacer = [];

let jsonListadoPorHacer = JSON.stringify(listadoPorHacer);

const guardarEnDB = (listadoPorHacer) => {

    let jsonListadoPorHacer = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',jsonListadoPorHacer, (err)=>{ console.log(err) }
    );
}

const getlistado = () =>{
    cargarDB();
    return jsonListadoPorHacer;
}

const cargarDB = () => {
    try {
        jsonListadoPorHacer = require('../db/data.json');
        
    } catch (error) {
        jsonListadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    
    cargarDB();

    let porhacer = {
        descripcion,
        completado : false
    }

    jsonListadoPorHacer.push(porhacer);
    guardarEnDB(jsonListadoPorHacer);
    return descripcion;
}

module.exports = {
    crear,
    getlistado
}