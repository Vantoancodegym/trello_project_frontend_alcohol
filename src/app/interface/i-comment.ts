import {IUser} from './i-user';
import {ICard} from './i-card';

export interface IComment {
  id?: number;
  content?: string;
  date_crate?: Date;
  appUser?: IUser;
  card?: ICard;
}
