/**
 * Interfaces
 * Las interfaces funcional casi igual que las types
 * Con type puede definir tipos primitivos o directos,
 *  ejemplo: userId = string | number;
 * Los types no se pueden extender
 *
 * Con interface se define un conjunto de atributos de valores
 * Una interface se puede extender
 */

// Ejemplo de como utilizar types e interfaces
type Sizes = 'S' | 'M' | 'L' | 'XL';
interface IProduct {
  id: string;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}
const products: IProduct[] = [];
products.push({
  id: '1',
  title: 'Product 1',
  createdAt: new Date(),
  stock: 12,
  size: 'XL',
});

/**
 * Extender interfaces
 * extends
 */

interface Shirt extends IProduct {
  color: string;
}

const shirt: Shirt = {
  id: '1',
  title: 'Shirt 1',
  createdAt: new Date(),
  stock: 12,
  size: 'XL',
  color: 'red',
};

/**
 * Propiedades de solo lectura
 * readonly
 * No va permitir sobrescribir la propiedad
 */

interface INewProduct {
  readonly id: string;
  readonly createAt: Date;
  title: string;
  stock: number;
}

const newProduct: INewProduct = {
  id: '1',
  createAt: new Date(),
  title: 'Product 1',
  stock: 12,
};

// No me permite sobrescribirlo
//newProduct.id = '2'; //error: read-only property
