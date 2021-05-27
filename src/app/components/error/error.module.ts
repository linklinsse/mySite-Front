import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // CLI imports router

import { routes } from './error.routing';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [RouterModule]
})
export class ErrorModule { }