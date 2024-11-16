const date = new Date();
// Instancio de la clase Date los metodos date.---
date.getHours();
date.getTime();
date.toISOString();

/**
 * Palabra clave: class
 * scope dentro de una clase
 * Por buena practica se debe inicializar las propiedades, se puede dar el valor o en el constructor
 */

// export: Para no tener inconvenientes con el scope e inconvenietes con otra clase que se llame igual
export class MyDate {
  /* Asignando valor por defecto
  year: number = 0;
  month: number = 0;
  day: number = 0;
  */

  // El valor es asignado en el constructor
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1993, 7, 10); // Nos pide obligatoriamente los 3 argumentos
console.log('myDate', myDate);
