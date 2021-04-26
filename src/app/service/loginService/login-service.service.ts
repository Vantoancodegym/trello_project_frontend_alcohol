import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILogin} from '../../interface/ilogin';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
const API_LOCAL = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
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
  loginUser(log: ILogin): Observable<ILogin> {
    return this.httpClient.get<ILogin>(API_LOCAL+'login');
  }

  createAppUser(log: ILogin): Observable<ILogin> {
    return this.httpClient.post<ILogin>(API_LOCAL, log);
  }
}
