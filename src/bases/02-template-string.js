const nombre = 'Fernando';
const apellido = 'Ponce';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`; 

function getSaludo(nombre = 'John Doe') {
    return 'Hola ' + nombre;
}


console.log(`Este es un texto: ${ getSaludo(nombre) }`);