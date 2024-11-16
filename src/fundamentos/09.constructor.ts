export class MyDate {
  /**
   * Los atributos se puede definir en el constructor ahorrando la definicion y asignacion
   */
  //constructor(public year: number, public month: number, private day: number) {}
  constructor(
    public year: number = 2024,
    public month: number = 12,
    private day: number = 24
  ) {}

  printFormat(): string {
    const day = this.addPading(this.day);
    const month = this.addPading(this.month);

    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
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

  getDay() {
    return this.day;
  }
}
