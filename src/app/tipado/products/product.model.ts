import { IBaseModel } from '../base.model';
import { ICategory } from '../categories/category.model';

export type SizesShirt = 'S' | 'M' | 'L' | 'XL';

/*
export interface IProduct {
  id: string;
  title: string;
  createdAt: Date;
  stock: number;
  size: SizesShirt;
  categorias: ICategory;
}
  */

export interface IProduct extends IBaseModel {
  title: string;
  stock: number;
  size: SizesShirt;
  categorias: ICategory;
}
