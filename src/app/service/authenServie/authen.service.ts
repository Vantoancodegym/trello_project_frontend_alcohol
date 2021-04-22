import {environment} from '../../../environments/environment';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUserToken} from '../../interface/i-user-token';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

const API_URL = environment.api_url;
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  update = new EventEmitter<string>();
  // @ts-ignore
  private currentUserSubject: BehaviorSubject<IUserToken>;
  // @ts-ignore
  public currentUser: Observable<IUserToken>;

  constructor(private httpClient: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<IUserToken>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUserToken {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.httpClient.post(API_URL + 'login', {username, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.update.emit('login');
        return user;
      }));
  }
  logout() {
    localStorage.removeItem('user');
    // @ts-ignore
    this.currentUserSubject.next(null);
  }
}
