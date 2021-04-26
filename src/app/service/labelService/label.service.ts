import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ILabel} from '../../interface/label';
const URL_BACKEND = environment.api_url
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpClient: HttpClient) { }
  getListSelected(card_id:number): Observable<ILabel[]>{
    return this.httpClient.get<ILabel[]>(URL_BACKEND+"labels/selected/" + card_id);
  }
  getLabelsByCard(card_id:number): Observable<ILabel[]>{
    return this.httpClient.get<ILabel[]>(URL_BACKEND + "labels/card/"+ card_id);
  }
}
