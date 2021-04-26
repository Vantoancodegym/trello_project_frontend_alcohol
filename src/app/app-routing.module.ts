import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowListComponent} from './list/show-list/show-list.component';
import {LoginComponent} from './form-login/login/login.component';
import {RegisterComponent} from './form-login/register/register.component';

const routes: Routes = [
  {
    path:"board/:boardId",
    component: ShowListComponent
  },
  {
    path: 'form',
    loadChildren: () => import("./form-login/form-login.module").then(module => module.FormLoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
