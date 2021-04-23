import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {IList} from '../../interface/i-list';
const URL_BACKEND = environment.api_url
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient: HttpClient) { }
  getListByBoardId(id: number): Observable<IList[]>{
    return this.httpClient.get<IList[]>(URL_BACKEND + "board/" + id);
  }
  createList(list: IList): Observable<any>{
    return this.httpClient.post(URL_BACKEND + "createList", list);
  }
  editPositionList(lists: IList[]): Observable<any>{
    return this.httpClient.put(URL_BACKEND + "editPositionList", lists);
  }
  findListById(id: number): Observable<IList>{
    return this.httpClient.get<IList>(URL_BACKEND + "findList/"+id);
  }
}
