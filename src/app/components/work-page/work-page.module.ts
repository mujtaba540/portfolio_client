import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkPageRoutingModule } from './work-page-routing.module';
import { WorkPageComponent } from './work-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WorkPageComponent
  ],
  imports: [
    CommonModule,
    WorkPageRoutingModule,
    SharedModule
  ]
})
export class WorkPageModule { }
