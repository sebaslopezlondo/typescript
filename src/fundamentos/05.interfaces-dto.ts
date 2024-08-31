/*
 * Interfaces
 * DTO (Data Transfer Object)
 * Es una abreviatura para referirnos a Data Transfer Objects u Objeto de Transferencias de datos.
 */

export interface IProduct {
  id: string;
  title: string;
  size: Sizes;
  stock: number;
  color: string;
  description: string;
  createdAt: Date;
}

/*
 * Omit
 * Ejemplo: Normalmente el id y el createdAt son propiedades que se dan valor desde la base de datos
 * estos datos no se encuentran cuando creamos un nuevo producto, entonces debemos omitirlos
 */

//type ICreateProductDto = Omit<IProduct, 'id' | 'createdAt'>;

export interface ICreateProductDto extends Omit<IProduct, 'id' | 'createdAt'> {}

const createProduct: ICreateProductDto = {
  title: 'Product 1',
  size: 'XL',
  stock: 12,
  color: 'red',
  description: 'Product 1',
};

console.log('DTO Omit', createProduct);

/**
 * Pick
 * En vez de omitir los campos como en Omit, con Pick los extraigo
 */

export type examplePick = Pick<IProduct, 'color' | 'description'>;

const producExample: examplePick = {
  color: 'red',
  description: 'Product 1',
};

console.log('DTO Pick', producExample);

/*
 * Partial
 * Permite definir todos los campos como opcionales
 */

interface IUpdateProductDto extends Partial<IProduct> {}

const updateProduct: IUpdateProductDto = {
  color: 'red',
};

console.log('DTO Partial', updateProduct);

/*
 * Nota: El generar una interfaz con partial esta me permite actualizar datos que no deberian
 * como es el id o el createAt en estos ejemplos
 */

let updateProduct2: IUpdateProductDto = {
  id: '100',
  createdAt: new Date(),
};

console.log('DTO Partial', updateProduct2);

// Esto se podría hacer de una mejor manera, utilizadon el ICreateProductDto
// ya que este no cuenta con estas propiedades

export interface IUpdateProductDto2 extends Partial<ICreateProductDto> {}

/*
let updateProduct2: IUpdateProductDto = { // Error
  id: '100',
  createdAt: new Date(),
};
*/

/**
 * Required
 * Permite definir todos los campos como obligatorios
 */

interface IRequiredProductDto extends Required<IProduct> {}

/*const requiredProduct: IRequiredProductDto = { //Error, faltan campos
  id: '1',
  title: 'Product 1',
  size: 'XL'
};*/

/**
 * readonly
 * Propiedades de solo lectura
 * No va permitir sobrescribir la propiedad
 */

export type IReadonlyProductDto = Readonly<IProduct>;
