import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IComment} from '../../interface/i-comment';
import {Observable} from 'rxjs';
const API_BACKEND = environment
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private httpClient: HttpClient) { }

  createComment(comment:IComment):Observable<any>{
    return  this.httpClient.post(API_BACKEND+"comments/create",comment);
  }
  getAllComment():Observable<any>{
    return this.httpClient.get(API_BACKEND+"comments")
  }
}
