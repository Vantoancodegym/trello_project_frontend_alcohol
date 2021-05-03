import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICard} from '../../interface/i-card';
import {environment} from '../../../environments/environment';
const URL_BACKEND = environment.api_url + "cards/"

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }
  findCardsByListId(id: number): Observable<ICard[]>{
    return this.httpClient.get<ICard[]>(URL_BACKEND + "list/" + id);
  }
  changePositionCard(cards: ICard[]): Observable<any>{
    return this.httpClient.put(URL_BACKEND + "changePosition", cards);
  }
  editCard(id: number, card: ICard): Observable<any>{
    return this.httpClient.put(URL_BACKEND + "edit/" + id, card);
  }
  findCardById(id: number): Observable<ICard>{
    return this.httpClient.get<ICard>(URL_BACKEND + id);
  }
  createCard(card: ICard): Observable<any>{
    return this.httpClient.post(URL_BACKEND + "create",card);
  }
  showAllCard():Observable<any>{
    return this.httpClient.get(URL_BACKEND);
  }
  getCardByLabel(id:number):Observable<any>{
    return this.httpClient.get(URL_BACKEND+"label/"+id);
  }
}
