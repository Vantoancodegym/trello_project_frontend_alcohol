// tslint:disable-next-line:class-name
import {IUser} from './i-user';
import {IBoard} from './i-board';

// tslint:disable-next-line:class-name
export interface ITagUserBoard {
  id: number;
  appUser: IUser;
  board: IBoard;
}

export class Tag_user_board {
}
