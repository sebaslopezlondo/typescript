/**
 * Herencia
 * Las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código en nuestro proyector.
 */

export class Animal {
  //constructor(public name: string) {} // Me permite modificar la propiedad
  //constructor(privaye name: string) {} // No ser accesible desde la clase Dog
  constructor(protected name: string) {}

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Doing something...');
  }
}

const animal = new Animal('Kiki');
console.log(animal.greeting()); // Hello, I'm Kiki

/**
 * La clase Dog hereda de la clase Animal, por lo tanto hereda sus propiedades y metodos
 * Una clase solo puede heredar de una sola clase
 */
export class Dog extends Animal {
  /**
   *
   * @param _owner Si quiero agregar una nueva propiedad
   */
  constructor(name: string, public _owner: string) {
    /**
     * Al querer agregar una nueva propiedad, debo pasar el constructor de la clase padre
     * las propiedades que definen 'name'
     * No se hace con private o public ya que no la estoy definiendo
     */
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  /**
   * Puedo definir un movimiento 'accion' mas especifica en este caso para mi perro
   * Sobre escribiendo el metodo move
   * Pero para acceder al metodo move de la clase padre se debe llamar super
   */
  move(): void {
    console.log(`Moving as a dog`);

    /**
     * Metodo Padre
     */
    super.move();
  }
}

const dog = new Dog('Tony', 'Shelby');
console.log(dog.greeting()); // Hello, I'm Tony
/**
 * A demas de tener los metodos move y greeting extendidos de la clase Animal
 * Agregamos metodos propios como woof 'Ladrar'
 */
dog.woof(3); // Woof!
console.log(dog._owner);


/**
 * A ser la propiedad Protected no se puede acceder desde fuera
 * Solo desde la clase y las clases que heredan
 */
//dog.name = 'Fido';
//console.log(dog.name);

dog.move();
