const opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion del comando'
    },
    completado: {
        alias: 'c',
        demand: false,
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opt)
    .command('borrar', 'Borra una tarea', opt)
    .command('listar', 'Lista todas las tareas')
    .help()
    .argv;

module.exports = {
    argv
};