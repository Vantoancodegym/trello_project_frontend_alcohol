import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { AppUserComponent } from './app-user/app-user.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ListBoardTagUserComponent } from './list-board-tag-user/list-board-tag-user.component';


@NgModule({
  declarations: [
    AppUserComponent,
    CreateBoardComponent,
    ListBoardTagUserComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
