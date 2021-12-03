import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './home.routing';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BodyComponent } from './body/body.component';

import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    BodyComponent,
    PresentationComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class HomeModule { }
