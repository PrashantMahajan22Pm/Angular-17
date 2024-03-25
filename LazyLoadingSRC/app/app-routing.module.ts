import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'owner' , loadChildren: ()=> import ('./owner/owner.module' ).then(m => m.OwnerModule) },
  {path : 'hot' , loadChildren: () => import  ( './coustmer/coustmer.module').then(m => m.CoustmerModule) },

  {
    path : '',
    redirectTo : '',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
