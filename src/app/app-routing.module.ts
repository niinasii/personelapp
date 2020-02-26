import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListausComponent } from './listaus/listaus.component';
import { LomakeComponent } from './lomake/lomake.component';
import { MuokkaaComponent } from './muokkaa/muokkaa.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaus',
    pathMatch: 'full'
  }, {
    path: 'listaus',
    component: ListausComponent
  }, {
    path: 'add',
    component: LomakeComponent
  }, { 
    path: 'muokkaa/:id', 
    component: MuokkaaComponent 
  },{
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
