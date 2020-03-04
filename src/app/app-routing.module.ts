import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMediaComponent } from './components/add-media/add-media.component';
import { MediaListComponent } from './components/media-list/media-list.component';

const routes: Routes = [
  {
    path: '',
    component: MediaListComponent
  },
  {
    path: 'add-media',
    component: AddMediaComponent
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
