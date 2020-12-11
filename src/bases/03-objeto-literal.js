const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 3123123,
    lat: 14.3232,
    lng: 34.923332,
  },
};

console.table(persona);

const persona2 = { ...persona };
persona.nombre = 'Peter';

console.log(persona);
console.log(persona2);