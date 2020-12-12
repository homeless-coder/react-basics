import { getHeroById } from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // Importen el
//         const heroe = getHeroById(2);
//         console.log(heroe);
//         resolve( heroe );
//     }, 2000 );
// });

// promesa.then( (heroe) => {
//     console.log(heroe, 'heroe');
// })
// .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // Tarea
            // Importen el
            const heroe = getHeroById(id);
            if(heroe){
                resolve( heroe );

            } else {
                reject('Error');
            }
        }, 2000 );
    });

}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.log)