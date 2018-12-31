const fs = require('fs');

let listadoPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('No se pudo gravar', err);
    });
};

const getListado = () => {
    leerDB();
    return listadoPorHacer;
};

const leerDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }


};

const actualizar = (descripcion, completado = true) => {
    leerDB();

    let index = listadoPorHacer.findIndex((element) => element.descripcion === descripcion);
    if (index == -1) return false;

    listadoPorHacer[index].completado = completado;

    saveDB();
    return true;
};

const borrar = (descripcion) => {
    leerDB();

    let index = listadoPorHacer.findIndex((element) => element.descripcion == descripcion);
    if (index == -1) return false;

    listadoPorHacer.splice(index, 1);

    saveDB();
    return true;
};

const crear = (descripcion) => {

    leerDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    saveDB();
    return porHacer;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};