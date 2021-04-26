import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/loginService/login-service.service';
import {Router} from '@angular/router';
import {ILogin} from '../../interface/ilogin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  login: ILogin = {
    id: 0,
    avatar: '',
    email: '',
    userName: '',
    passWord: '',
    role: [],
  };
  constructor(private loginService: LoginServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  registionUser() {
    this.loginService.createAppUser(this.login).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
