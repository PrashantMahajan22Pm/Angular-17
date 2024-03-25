import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotComponent } from './hot/hot.component';

const routes: Routes = [
  {
    path : '',
    component : HotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoustmerRoutingModule { }
