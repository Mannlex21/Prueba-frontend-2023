// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
    return array.sort((a,b) => array.filter(v => v===b).length - array.filter(v => v===a).length)
    .filter((value, index, self) =>  {
        return  self.indexOf(value) == index;
    }).slice(0,3);
}

/**
 * TEST Ejercicio 2
 */
console.log(numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1])) // [ 1, 3, 2 ]
console.log(numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3])) // [ 'a', 3, 2 ]
