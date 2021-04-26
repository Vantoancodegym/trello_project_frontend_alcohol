import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../service/loginService/login-service.service';
import {AuthenService} from '../../service/authenServie/authen.service';
import {environment} from '../../../environments/environment';
const API_BACKEND = environment.api_url
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

hide = true;
  constructor() { }

  ngOnInit(): void {
  }
  // loginUser(){
  //   this.loginService.loginUser(log)
  // }

}
