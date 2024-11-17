export class MyDate {
  constructor(
    public year: number = 2024,
    public month: number = 12,
    /**
     * Una buena practica es agregar _ a las propiedades privadas
     */
    private _day: number = 24
  ) {}

  printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this.month);

    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  private addPading(value: number) {
    if (value <= 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  /**
   * Get
   * Los getters son metodos que nos permiten acceder a una propiedad privada
   * Se llama como una propiedad y no como un metodo: Class.day
   * Siempre deben retornar un valor
   * Retornamos la propiedad _day
   */
  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;

    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1995, 8, 14);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);



const myDateTwo = new MyDate(2000, 8, 14);
console.log(myDateTwo.printFormat());
console.log(myDateTwo.day);
console.log(myDateTwo.isLeapYear);
