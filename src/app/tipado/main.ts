import { addProduct, products } from './products/product.service';

addProduct({
  id: '1',
  title: 'Product 1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 12,
  size: 'XL',
  categorias: {
    id: '1',
    name: 'Category 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});

console.log(products);
