import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowListComponent} from './list/show-list/show-list.component';

const routes: Routes = [
  {
    path:"board/:boardId",
    component: ShowListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
