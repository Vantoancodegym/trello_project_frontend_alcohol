import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {ListBoardTagUserComponent} from "./list-board-tag-user/list-board-tag-user.component";
import {ListBoardAppUserComponent} from "./list-board-app-user/list-board-app-user.component";
import {HomeComponent} from "./home/home.component";
import {ShowListComponent} from "../list/show-list/show-list.component";
import {TagUserBoardComponent} from "./tag-user-board/tag-user-board.component";

const routes: Routes = [
  {
    path: 'board/:boardId',
    component: ShowListComponent
  },
  {
    path: 'boards/create',
    component: CreateComponent
  },
  {
    path: 'boards/listBoardTagUser',
    component: ListBoardTagUserComponent
  },
  {
    path: 'boards/listAppBoard',
    component: ListBoardAppUserComponent

  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'boardAppUser/tag',
    component: TagUserBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule {
}
