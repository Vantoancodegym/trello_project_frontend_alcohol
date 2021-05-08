import {ICard} from './i-card';
import {IUser} from './i-user';

export interface ICardUser {
  id?: number
  card? : ICard,
  appUser?: IUser
}
