// Funciones en JS

// Tarea
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const getUsuarioActivo1 = (nombre) => ( {uid: 'ABC567', username: nombre} )

console.log(getUsuarioActivo1('Goku'));