import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../service/loginService/login-service.service';
import {AuthenService} from '../../service/authenServie/authen.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService, private authenService: AuthenService) {
  }

  ngOnInit(): void {
  }

  logOutUser() {
    this.loginService.logoutAppUser().subscribe(() => {
    });
    this.authenService.logout();
    this.router.navigateByUrl("/form/login");

  }

}
