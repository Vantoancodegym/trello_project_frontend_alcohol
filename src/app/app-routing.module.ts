import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardModule} from "./board/board.module";
import {ShowListComponent} from "./list/show-list/show-list.component";
import {SearchCardComponent} from './card/search-card/search-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form/login',
    pathMatch: 'full'
  },
  {
    path: 'board/:id',
    component: ShowListComponent
  },
  {
    path: 'form',
    loadChildren: () => import("./form-login/form-login.module").then(module => module.FormLoginModule)
  },
  {
    path:'search/card',
    component:SearchCardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BoardModule]
})
export class AppRoutingModule {
}
