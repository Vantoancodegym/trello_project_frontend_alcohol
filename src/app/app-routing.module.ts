import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardModule} from "./board/board.module";
import {ShowListComponent} from "./list/show-list/show-list.component";
import {SearchCardComponent} from './card/search-card/search-card.component';
import {FilterCardLabelComponent} from './filter-card-label/filter-card-label.component';

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
    path:'filter/card/label',
    component: FilterCardLabelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BoardModule]
})
export class AppRoutingModule {
}
