import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ILogin} from '../../interface/ilogin';
import {Observable} from 'rxjs';
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
}
