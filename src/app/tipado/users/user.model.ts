import { IBaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export interface IUser extends IBaseModel {
  username: string;
  password: string;
  role: ROLES;
}
