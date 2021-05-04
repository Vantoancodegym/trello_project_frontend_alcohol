import {IUser} from './i-user';

export interface INotification {
  id?: number;
  content: string;
  appUser?: IUser[]
}
