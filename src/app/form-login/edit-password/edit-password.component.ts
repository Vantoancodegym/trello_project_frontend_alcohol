import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/loginService/login-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ILogin} from '../../interface/ilogin';
import {UserService} from '../../service/user/user.service';
import {AuthenService} from '../../service/authenServie/authen.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

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
  onFileSelected(event: any) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `trelloFIle/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.appUser.avatar = url;
            }
          });
        })
      ).subscribe(url => {
      if (url) {
        console.log("Upload success");
      }
    });
  }
  editUser(){
    this.userService.editAppUser(this.appUser,this.id).subscribe(()=>{
      this.router.navigateByUrl("/")
    })
  }
}
