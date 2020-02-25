import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMediaComponent } from './components/add-media/add-media.component';

const routes: Routes = [
  {
    path: 'add-media',
    component: AddMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
