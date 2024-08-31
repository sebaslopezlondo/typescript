/**
 * ReadonlyArray
 * Te genera un error si intentas realizar una operación de modifiación del arreglo
 */

const numbers: number[] = [2, 3, 4, 5];

numbers.push(7);
numbers.unshift(1);

console.log(numbers);

// Aplicando ReadonlyArray

const numbers2: ReadonlyArray<number> = [2, 3, 4, 5];

// Error: Property 'push' does not exist on type 'readonly number[]'
/*
numbers2.push(7);
numbers2.unshift(1);
*/

//Nota: Debo utilizar metodos array que crean un nuevo arreglo
