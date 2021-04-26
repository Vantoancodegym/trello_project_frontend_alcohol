import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLoginRoutingModule } from './form-login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogOutComponent
  ],
  exports: [
    LoginComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    FormLoginRoutingModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class FormLoginModule { }
