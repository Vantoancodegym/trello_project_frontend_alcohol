import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { CreateComponent } from './create/create.component';
import { ListBoardAppUserComponent } from './list-board-app-user/list-board-app-user.component';
import { TagUserBoardComponent } from './tag-user-board/tag-user-board.component';
import { ListBoardTagUserComponent } from './list-board-tag-user/list-board-tag-user.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateComponent,
    ListBoardAppUserComponent,
    TagUserBoardComponent,
    ListBoardTagUserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FormsModule
  ]
})
export class BoardModule { }
