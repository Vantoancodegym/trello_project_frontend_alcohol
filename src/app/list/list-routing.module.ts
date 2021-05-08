import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilterCardLabelComponent} from './filter-card-label/filter-card-label.component';

const routes: Routes = [
  {
    path:"filter/label",
    component:FilterCardLabelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
