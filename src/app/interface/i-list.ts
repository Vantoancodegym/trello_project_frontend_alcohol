import {IBoard} from './i-board';

export interface IList {
  id?: number;
  title?: string;
  position?: number;
  board?: IBoard;
}
