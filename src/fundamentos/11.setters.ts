export class MyDate {
  constructor(
    public year: number = 2024,

    private _month: number = 12,
    private _day: number = 24
  ) {}

  printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this._month);

    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
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
  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;

    return this.year % 4 === 0;
  }

  /**
   * Set
   * Los setters son metodos que nos permiten acceder a una propiedad privada
   * Estos se llaman como una propiedad
   * Estos no pueden retornar nada
   */

  set month(value: number) {
    if (value >= 1 && value <= 12) {
      this._month = value;
    } else {
      throw new Error('El mes debe estar entre 1 y 12');
    }
  }
}

const myDate = new MyDate(1995, 8, 14);
console.log(myDate.printFormat());
myDate.month = 6;
console.log(myDate.printFormat());
