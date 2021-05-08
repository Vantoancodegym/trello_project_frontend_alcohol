import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ILogin} from '../../interface/ilogin';
import {Observable} from 'rxjs';
import {IUser} from '../../interface/i-user';
import {ICardUser} from '../../interface/icard-User';
const API_USER = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  log: ILogin = {
    id: 0,
    avatar: '',
    email: '',
    userName: '',
    passWord: '',
    role: [],
  };
  constructor(private httpClient: HttpClient) {
  }
  editAppUser(log: ILogin, id: number): Observable<any> {
    return this.httpClient.put<ILogin>(API_USER + 'list/edit/' + id,log);
  }
  findUserById(id: number): Observable<ILogin> {
    return this.httpClient.get<ILogin>(API_USER +'list/'+ id);
  }
  getListSelected(card_id:number): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(API_USER+"card/tagUser/selected/" + card_id);
  }
  getAppUserByCard(card_id:number): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(API_USER + "card/tagUser/"+ card_id);
  }
  addAppUserToCard(iCardUser: ICardUser):Observable<any>{
    return this.httpClient.post(API_USER +"card/tagUser/addAppUserToCard",iCardUser);
  }
  getAllUser():Observable<any>{
    return this.httpClient.get(API_USER+'list')
  }
}
