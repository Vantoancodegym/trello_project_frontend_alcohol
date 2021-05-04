import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsRoutingModule } from './labels-routing.module';
import { CreateLabelComponent } from './create-label/create-label.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        CreateLabelComponent
    ],
    exports: [
        CreateLabelComponent
    ],
  imports: [
    CommonModule,
    LabelsRoutingModule,
    FormsModule
  ]
})
export class LabelsModule { }
