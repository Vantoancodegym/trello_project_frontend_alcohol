import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/loginService/login-service.service';
import {Router} from '@angular/router';
import {ILogin} from '../../interface/ilogin';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  downloadURL: Observable<string>;

  login: ILogin = {
    id: 0,
    avatar: '',
    email: '',
    userName: '',
    passWord: '',
    role: [],
  };
  constructor(private loginService: LoginServiceService, private router: Router, private storage: AngularFireStorage, private fb: FormBuilder) {
  }
  registerForm = this.fb.group({
    "userName": ['',[Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý ]+$')]],
    "passWord": ['', [Validators.minLength(6), Validators.maxLength(30)]],
    "email": ['', Validators.email]
  })
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
              this.login.avatar = url;
            }
          });
        })
      ).subscribe(url => {
      if (url) {
        console.log("Upload success");
      }
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  registionUser() {
    console.log(this.login)
    this.loginService.createAppUser(this.login).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
