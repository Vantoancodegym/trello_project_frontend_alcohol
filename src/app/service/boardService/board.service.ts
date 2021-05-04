import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBoard} from "../../interface/i-board";
import {environment} from "../../../environments/environment";
import {Tag_user_board} from "../../interface/ITagUserBoard";
import {IUser} from "../../interface/i-user";

const API_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) {
  }

  showALl(): Observable<IBoard[]> {
    return this.httpClient.get<IBoard[]>(API_BACKEND + 'board');
  }

<<<<<<< HEAD
  getBoarById(id: number): Observable<any> {
    return this.httpClient.get<IBoard>(API_BACKEND + "board/findBoardById/" + id);
=======
  findBoarById(id: number): Observable<any> {
    return this.httpClient.get<IBoard>(API_BACKEND + 'board/findBoardById/' + id);
>>>>>>> bb5b5aed835fec6f3c210259b90c41d8a578f8b5
  }

  getAllBoardByAppUser(id: number): Observable<IBoard[]> {
    // @ts-ignore
    return this.httpClient.get<Board[]>(API_BACKEND + 'board/listAppBoard/' + id);
  }

  createBoard(board: IBoard): Observable<IBoard> {
    return this.httpClient.post<IBoard>(API_BACKEND + 'board/create', board);
  }

  getBoardTagUser(id: number): Observable<IBoard[]> {
    return this.httpClient.get<IBoard[]>(API_BACKEND + 'board/listBoardTagUser/' + id);
  }

  createTagUserBoard(tagUserBoard: Tag_user_board): Observable<Tag_user_board> {
    return this.httpClient.post<Tag_user_board>(API_BACKEND + 'tagUser/create', tagUserBoard);
  }

  showAllAppUser(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(API_BACKEND + 'list');
  }
<<<<<<< HEAD
  showAllTagUser(): Observable<Tag_user_board[]> {
    return this.httpClient.get<Tag_user_board[]>(API_BACKEND + 'tagUser');
  }


=======
>>>>>>> bb5b5aed835fec6f3c210259b90c41d8a578f8b5
}
