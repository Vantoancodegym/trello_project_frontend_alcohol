import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';

import { AppUserComponent } from './app-user/app-user.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ListBoardTagUserComponent } from './list-board-tag-user/list-board-tag-user.component';

import { CreateComponent } from './create/create.component';
import { ListBoardAppUserComponent } from './list-board-app-user/list-board-app-user.component';
import { TagUserBoardComponent } from './tag-user-board/tag-user-board.component';
import { ListBoardTagUserComponent } from './list-board-tag-user/list-board-tag-user.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {FormLoginModule} from '../form-login/form-login.module';


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
    CreateComponent,
    ListBoardAppUserComponent,
    TagUserBoardComponent,
    ListBoardTagUserComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        BoardRoutingModule,
        FormsModule,
        FormLoginModule
    ]
})
export class BoardModule { }
