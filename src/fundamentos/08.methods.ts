export class MyDate {
  year: number;
  public month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    /**
     * Public: Atributos de la clase que pueden ser accedidos desde fuera de la clase
     * Private: Atributos de la clase que no pueden ser accedidos desde fuera de la clase
     * Readonly: Atributos de la clase que no pueden ser modificados, no me deja modificarlo ni interna ni externas
     *
     * Por defecto es public
     * Se puede asignar a variables y metodos
     */
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPading(this.day);
    const month = this.addPading(this.month);

    //return `${this.day}/${this.month}/${this.year}`;
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

const myDate = new MyDate(1995, 8, 14);
console.log(myDate.printFormat());
myDate.add(5, 'days');
console.log(myDate.printFormat());

const myDate2 = new MyDate(1996, 4, 24);
console.log(myDate2.printFormat());
console.log(myDate2.year);
//console.log(myDate2.day); // Esto genera error ya que day es una propiedad privada

/**
 * El console se hace antes de poner el metodo private y retorna 02
 * Al agregarle private ya nos indica un error
 *
 * Se puede crear un metodo para acceder al valor day que es privado
 */
//console.log(myDate.addPading(2)); // '02'
console.log(myDate.getDay());
