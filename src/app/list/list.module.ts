import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ChangePositionListComponent } from './change-position-list/change-position-list.component';


@NgModule({
  declarations: [
    ChangePositionListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
