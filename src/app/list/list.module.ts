import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ShowListComponent } from './show-list/show-list.component';
import {CardModule} from '../card/card.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import { CreateListComponent } from './create-list/create-list.component';
import {FormsModule} from "@angular/forms";
import { EditTitleListComponent } from './edit-title-list/edit-title-list.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import {FormLoginModule} from '../form-login/form-login.module';
import {FilterCardLabelComponent} from './filter-card-label/filter-card-label.component';
// @ts-ignore
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ShowListComponent,
    CreateListComponent,
    EditTitleListComponent,
    DetailListComponent,
    FilterCardLabelComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    CardModule,
    DragDropModule,
    BrowserModule,
    FormsModule,
    FormLoginModule,
    NgbDropdownModule,
  ]})
export class ListModule { }
