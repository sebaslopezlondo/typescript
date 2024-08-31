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

/**
 * Pick
 * En vez de omitir los campos como en Omit, con Pick los extraigo
 */

export type examplePick = Pick<IProduct, 'color' | 'description'>;

const producExample: examplePick = {
  color: 'red',
  description: 'Product 1',
};

console.log(producExample);
