//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];
console.log(`Comando a ejecutar: ${comando}`);
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Se creo una tarea por hacer', tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====================='.green);
            console.log(colors.white(tarea.descripcion));
            console.log(`Completado: ${ tarea.completado }`);
            console.log('====================='.green);
        }

        console.log('Se listaron todas las tareas');
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`Actualizada: ${actualizar}`);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(`Borrado: ${borrar} - ${argv.descripcion}`);
        break;
    default:
        console.log('Comando no encontrado');
        break;
}