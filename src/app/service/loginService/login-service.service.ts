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

  constructor(private httpClient: HttpClient) {
  }
  loginAppUser(log: ILogin): Observable<ILogin> {
    return this.httpClient.post<ILogin>(API_LOCAL+'login',log);
  }

  createAppUser(log: ILogin): Observable<ILogin> {
    return this.httpClient.post<ILogin>(API_LOCAL+'list/create', log);
  }
}
