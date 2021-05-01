import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardRoutingModule} from './card-routing.module';
import {ShowCardByListIdComponent} from './show-card-by-list-id/show-card-by-list-id.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import {CreateCardComponent} from './create-card/create-card.component';
import {ShowListComponent} from '../list/show-list/show-list.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import {SearchCardComponent} from './search-card/search-card.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatOptionModule} from "@angular/material/core";
import {Ng2OrderModule} from "ng2-order-pipe";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import { EditCardComponent } from './edit-card/edit-card.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import {LabelsModule} from '../labels/labels.module';
import { AddMemberForCardComponent } from './add-member-for-card/add-member-for-card.component';

@NgModule({
  declarations: [
    ShowCardByListIdComponent,
    CreateCardComponent,
    EditCardComponent,
    DetailCardComponent,
    SearchCardComponent,
    AddMemberForCardComponent
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
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatCheckboxModule,
    MatOptionModule,
    LabelsModule,
  ],
  bootstrap: [ShowListComponent]

})
export class CardModule {
}



