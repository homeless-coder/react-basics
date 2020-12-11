const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
console.log(p3);

const retornarArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornarArreglo();

console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre
const estado = (nombre) => {
  return [
    nombre,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = estado("Goku");
console.log(nombre);
setNombre();
