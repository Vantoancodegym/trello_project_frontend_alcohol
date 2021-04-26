import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBoard} from "../../interface/i-board";
import {environment} from "../../../environments/environment";
const API_BACKEND = environment.api_url + 'board/';
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) { }
  findBoarById(id: number): Observable<any>{
   return this.httpClient.get<IBoard>(API_BACKEND + "findBoardById/" + id);
  }
}
