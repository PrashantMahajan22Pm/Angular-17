import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoustmerRoutingModule } from './coustmer-routing.module';
import { HotComponent } from './hot/hot.component';


@NgModule({
  declarations: [
    HotComponent
  ],
  imports: [
    CommonModule,
    CoustmerRoutingModule
  ]
})
export class CoustmerModule { }
