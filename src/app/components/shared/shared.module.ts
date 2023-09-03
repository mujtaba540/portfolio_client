import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { WorkDetailsCardComponent } from './work-details-card/work-details-card.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactFormComponent,
    NavbarComponent,
    WorkDetailsCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    ContactFormComponent,
    NavbarComponent,
    WorkDetailsCardComponent,
    FooterComponent
  ],
  providers:[]
})
export class SharedModule { }
