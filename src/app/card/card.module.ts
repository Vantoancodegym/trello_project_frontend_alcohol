import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { ShowCardByListIdComponent } from './show-card-by-list-id/show-card-by-list-id.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import { CreateCardComponent } from './create-card/create-card.component';
import {ShowListComponent} from '../list/show-list/show-list.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import { EditCardComponent } from './edit-card/edit-card.component';


@NgModule({
  declarations: [
    ShowCardByListIdComponent,
    CreateCardComponent,
    EditCardComponent
  ],
  exports: [
    ShowCardByListIdComponent,
    CreateCardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    DragDropModule,
    BrowserModule,
    ModalModule,
    FormsModule
  ],
  bootstrap: [ShowListComponent]

})
export class CardModule { }
