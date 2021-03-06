let empleados = [{
    id: 1,
    nombre: `Ricardo`
}, {
    id: 2,
    nombre: `Erick`
}, {
    id: 3,
    nombre: `Rick`
}, {
    id: 4,
    nombre: `Erika`
}, {
    id: 5,
    nombre: `Olga`
}]

let salarios = [{
    id: 2,
    salario: 100
}, {
    id: 4,
    salario: 1
}, {
    id: 5,
    salario: 1000
}]


let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con id ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        throw new Error(`No existie un salario para el empleado id : ${empleado.id}`)
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${ resp.nombre} tiene un salario de ${resp.salario}$`
}

getInformacion(52).then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));

//getEmpleado(2).then(empleado => {
//    getSalario(empleado).then(salario => {
//        console.log(salario)
//    }, (err => {
//        console.log(err);
//    }))
//}, (err => {
//    console.log(err);
//}))

/* let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}
 */


/* let getSalario = (empleado, callback) => {
    let salario = salarios.find(salario => salario.id === empleado.id);;
    if (!salario) {
        callback(`No se encontro un salario para el empleado:  ${empleado.nombre}`)
    } else {
        callback(null, `Nombre ${empleado.nombre}:\nSalario : ${salario.salario} `);
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    return console.log(empleado);
});
getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        return console.log(salario);
    });
});
 */
/* getSalario(getEmpleado(2,(err,empleado )),(err,salario)=> {
    if (err){
        console.log(err);
    }else{
        console.log(salario)
    }
}) */