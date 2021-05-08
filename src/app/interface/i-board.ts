import {IUser} from './i-user';

export interface IBoard {
  id?: number;
  name?: string;
  appUser?: IUser;
}
