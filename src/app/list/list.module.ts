import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ShowListComponent } from './show-list/show-list.component';
import {CardModule} from '../card/card.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    ShowListComponent
  ],
    imports: [
        CommonModule,
        ListRoutingModule,
        CardModule,
        DragDropModule,
        BrowserModule,
    ]})
export class ListModule { }
