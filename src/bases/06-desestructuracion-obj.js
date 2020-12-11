// Desestructuración

const persona = {
  nombre: "Tony",
  edad: 45,
  rango: "Soldado",
  clave: "12345",
};

// const { edad, clave, nombre } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const retornarAvenger = ({ clave, nombre, edad, rango = "Capitán" }) => {
  // console.log( nombre, edad, rango );

  return {
    clave,
    edad,
    latlng: {
        lat: 14.234,
        lng: -12.3213
    }
  };
};

const { clave, edad, latlng:{lat, lng} } = retornarAvenger(persona);

console.log(clave, edad);
console.log(lat, lng)
