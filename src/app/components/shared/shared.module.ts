import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { WorkDetailsCardComponent } from './work-details-card/work-details-card.component';



@NgModule({
  declarations: [
    ContactFormComponent,
    NavbarComponent,
    WorkDetailsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ContactFormComponent,
    NavbarComponent,
    WorkDetailsCardComponent
  ]
})
export class SharedModule { }
