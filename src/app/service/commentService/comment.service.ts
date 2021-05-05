import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IComment} from '../../interface/i-comment';
import {Observable} from 'rxjs';
const API_BACKEND = environment.api_url
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private httpClient: HttpClient) { }

  createComment(comment:IComment):Observable<any>{
    return  this.httpClient.post<IComment>(API_BACKEND+"comments/create",comment);
  }
  getAllComment(cardId:number):Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(API_BACKEND+"comments/card/"+cardId)
  }
}
