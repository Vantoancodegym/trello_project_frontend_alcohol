import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowCardByListIdComponent} from './show-card-by-list-id/show-card-by-list-id.component';

const routes: Routes = [
  {path:'card',component:ShowCardByListIdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
