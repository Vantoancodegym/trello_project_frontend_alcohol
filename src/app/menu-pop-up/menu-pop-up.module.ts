import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPopUpRoutingModule } from './menu-pop-up-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuPopUpRoutingModule
  ]
})
export class MenuPopUpModule { }
