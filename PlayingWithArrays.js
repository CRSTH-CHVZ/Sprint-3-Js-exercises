//Notas para Cristhian:
// en generateArray el parametro long no puede generar un array de elementos
// individuales por no es ni array ni string.
// Entonces se cargan dos parámetros en Array.from:
// 1 ) Un objeto con la propiedad length, es decir, se establece un array de
// n elementos determinado por long;
// 2 ) Una función anónima que en el contexto de Array.from equivale al
// método .map, en el que el primer parámetro es ignorado y en el segundo se
// utiliza para identificar el index, el cual es inmediatamente devuelto por
// return.
//
//En este contexto, la variable local arr en el interior de una función crea
// un array de 6 elementos, determinado por el length: [0, 1, 2, 3, 4, 5 ]
//
// la sintaxis arr[0]() ejecuta la función generateArray crea el array para
// inmediatamente retornar el requerido.

function generateArray(long) {
  return Array.from(
    { length: long },
    (_, i) =>
      function () {
        return i;
      }
  );
}

let arr = generateArray(6);

console.log(arr[0]()); //return 0
console.log(arr[1]()); //return 1
console.log(arr[2]()); //return 2