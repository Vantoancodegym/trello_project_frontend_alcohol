import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardModule} from "./board/board.module";
import {ShowListComponent} from "./list/show-list/show-list.component";
import {SearchCardComponent} from './card/search-card/search-card.component';
import {FilterCardLabelComponent} from './list/filter-card-label/filter-card-label.component';
import {FilterCardUserComponent} from './list/filter-card-user/filter-card-user.component';

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
  },
  {
    path:'board/:id/filter/card/label',
    component: FilterCardLabelComponent
  },
  {
    path:'board/:id/filter/card/user',
    component: FilterCardUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BoardModule]
})
export class AppRoutingModule {
}
