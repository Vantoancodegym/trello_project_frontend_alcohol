import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { ShowCardByListIdComponent } from './show-card-by-list-id/show-card-by-list-id.component';


@NgModule({
  declarations: [
    ShowCardByListIdComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
