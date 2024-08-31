/**
 * Parametros
 */

// Ambos parametros son obligatorios
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(10, 20)); // 30

// Parametros opcionales, el parametro b es opcional
function nombreCompleto(nombre: string, apellido?: string): string {
  return `Mi nombre es ${nombre} ${apellido}`;
}
