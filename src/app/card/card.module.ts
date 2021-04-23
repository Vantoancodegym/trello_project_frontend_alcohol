import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { ShowCardByListIdComponent } from './show-card-by-list-id/show-card-by-list-id.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import { CreateCardComponent } from './create-card/create-card.component';


@NgModule({
  declarations: [
    ShowCardByListIdComponent,
    CreateCardComponent
  ],
  exports: [
    ShowCardByListIdComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    DragDropModule,
    BrowserModule
  ]
})
export class CardModule { }
