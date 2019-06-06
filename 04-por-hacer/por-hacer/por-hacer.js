const fs = require('fs');

let listadoPorHacer = [];

let jsonListadoPorHacer = JSON.stringify(listadoPorHacer);

const borrar = (descripcion) =>{
    cargarDB();
    let index = jsonListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index == -1 ){
        return 'elemento no encontrado';
    }

    const result = jsonListadoPorHacer.filter(jsonItem => jsonItem.descripcion !== descripcion);

    guardarEnDB(result);
    console.log('borrado');
    return `El elemento con descripcion :" ${descripcion} " has sido borrado`;

}

const actualizar = (descripcion,completado) =>{
    cargarDB();
    let index = jsonListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index == -1 ){
        console.log('elemento no encontrado');
        return false
    }
    console.log(completado);
    jsonListadoPorHacer[index].completado = completado;
    guardarEnDB(jsonListadoPorHacer);
    console.log('guardado');
    return true;

}

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
    getlistado,
    actualizar,
    borrar
}