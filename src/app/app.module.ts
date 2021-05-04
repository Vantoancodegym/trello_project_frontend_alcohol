import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helper/jwt.interceptor';
import {ErrorInterceptor} from './helper/error.interceptor';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CardModule} from './card/card.module';
import {ListModule} from './list/list.module';

// @ts-ignore
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {ModalModule} from 'ngx-bootstrap/modal';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

// @ts-ignore
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LabelsModule} from './labels/labels.module';
import { FilterCardLabelComponent } from './list/filter-card-label/filter-card-label.component';



// @ts-ignore
// @ts-ignore
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DragDropModule,
        CardModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ModalModule.forRoot(),
        ListModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),

        BrowserAnimationsModule,


        LabelsModule

    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
