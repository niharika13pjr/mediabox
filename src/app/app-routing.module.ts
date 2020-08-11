import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaListComponent } from './components/media-list/media-list.component';

import { AddMediaComponent } from './components/add-media/add-media.component';

const routes: Routes = [
  {
    path: 'add-media',
    component: AddMediaComponent
  },
  {
    path: '',
    component: MediaListComponent
  },
  {
    path: 'add-media/back',
    component: MediaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
