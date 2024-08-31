import { IUser } from '../users/user.model';
import { IProduct } from '../products/product.model';
import { IBaseModel } from '../base.model';

export interface IOrder extends IBaseModel {
  user: IUser;
  products: IProduct[];
}
