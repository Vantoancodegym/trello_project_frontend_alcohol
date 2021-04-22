import {IList} from './i-list';

export interface ICard {
  id? : number;
  title? : string;
  content?: string;
  position?: number;
  list?: IList
}
