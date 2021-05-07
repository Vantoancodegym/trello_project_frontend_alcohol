import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/loginService/login-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ILogin} from '../../interface/ilogin';
import {UserService} from '../../service/user/user.service';
import {AuthenService} from '../../service/authenServie/authen.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  downloadURL: Observable<string>;
  appUser: ILogin = {
    id: 0,
    avatar: '',
    email: '',
    userName: '',
    passWord: '',
    role: [],
  };
  id: number = 0;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap =>{
        this.id = Number (paraMap.get("id"));
        this.userService.findUserById(this.id).subscribe(data =>{
          this.appUser = data
        })
      }
    );
  }
  editUser(){
    this.userService.editAppUser(this.appUser,this.id).subscribe(()=>{
      this.router.navigateByUrl("/")
    })
  }
}
