/**
 * Sobrecarga de funciones
 * Solo la puedo implementar en funciones definidas con funtion
 */

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join();
  }
  return input.split('');
}

const rtaArray = parseStr('Hola');
console.log('rtaArray', rtaArray);

const rtaString = parseStr(['H', 'o', 'l', 'a']);
console.log('rtaString', rtaString);

//rtaArray.reverse(); // No lo permite ya que puede ser un array o un string
if (Array.isArray(rtaArray)) {
  // Al validarlo se asegura que es un array
  rtaArray.reverse();
}

// Lo mismo para el string, no me permite hacerlo si no confirmo que es un string
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}

/**
 *
 * Sobrecarga de metodosC
 * Cuando sea string me retorna un array
 * Cuando sea array me retorna un string
 */

function parseStrDos(input: string): string[];
function parseStrDos(input: string[]): string;

function parseStrDos(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join();
  }
  return input.split('');
}

const rtaArrayDos = parseStrDos('Buenas');
console.log('rtaArrayDos', rtaArrayDos);

const rtaStringDos = parseStrDos(['B', 'u', 'e', 'n', 'a', 's']);
console.log('rtaStringDos', rtaStringDos);

// Por la sobrecargas de funciones se asegura que es un array, no necesito la validación
rtaArrayDos.reverse();

rtaStringDos.toLowerCase();
