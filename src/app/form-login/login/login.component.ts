import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/loginService/login-service.service';
import {AuthenService} from '../../service/authenServie/authen.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {ILogin} from '../../interface/ilogin';
import {Local} from 'protractor/built/driverProviders';
import {first} from 'rxjs/operators';
import {IUserToken} from '../../interface/i-user-token';

const API_BACKEND = environment.api_url;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: ILogin = {
    id: 0,
    avatar: '',
    email: '',
    userName: '',
    passWord: '',
    role: [],
  };
  // @ts-ignore
  currentUser: IUserToken;
  hide = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'Invalid Username or password';

  constructor(private authenService: AuthenService, private router: Router) {
    this.authenService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.authenService.login(this.login.userName, this.login.passWord).pipe(first()).subscribe(
      ()=>{
      this.authenService.currentUserValue.accessToken;
      this.router.navigate(['/card'])
    },
      error => {
        this.isLoginFailed = true;
      }
      );
  }

}
