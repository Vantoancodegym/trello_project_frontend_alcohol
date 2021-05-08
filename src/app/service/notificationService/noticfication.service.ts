import { Injectable } from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {AuthenService} from '../authenServie/authen.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INotification} from '../../interface/i-notification';
import {environment} from '../../../environments/environment';
import {IUser} from '../../interface/i-user';
const URL_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class NoticficationService {
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  topic: string = "/topic/notice";
  stompClient: any;
  headers = new HttpHeaders().set("Authorization", "Bearer " + this.authenService.currentUserValue.accessToken);

  constructor(private authenService: AuthenService,private httpClient: HttpClient) { }
  _connect(headerComponent: HeaderComponent) {
    console.log(this.headers)
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect(_this.headers, function (frame: any) {

      _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
        console.log("pt được gọi")
        headerComponent.getConnect();
        // _this.onMessageReceived(sdkEvent);
      });
    });
  };
  createNotification(notification: any) {
    console.log("pr send duoc goi");
    this.stompClient.send("/app/notice",{}, JSON.stringify(notification));
  }
  getNotifications(): Observable<INotification[]>{
    return this.httpClient.get<INotification[]>(URL_BACKEND + "notification");
  }
  getUsersByBoard(board_id: number): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(URL_BACKEND + "notification/users/" + board_id);
  }
  deleteNotificationByUser(): Observable<any>{
    return this.httpClient.delete(URL_BACKEND + "notification")
  }
  getListNoticeUser(users: IUser[]): IUser[]{
    for (let i = 0; i < users.length; i++) {
      if (this.authenService.currentUserValue.id == users[i].id) users.splice(i,1);
    }
    return users;
  }
}
