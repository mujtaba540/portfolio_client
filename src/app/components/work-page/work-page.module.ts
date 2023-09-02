import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkPageRoutingModule } from './work-page-routing.module';
import { WorkPageComponent } from './work-page.component';
import { SharedModule } from '../shared/shared.module';
import { WorkDetailsPageComponent } from './work-details-page/work-details-page.component';
import { WorkDescriptionComponent } from './work-description/work-description.component';
import { WorkGalleryComponent } from './work-gallery/work-gallery.component';
import { WorkHighlightsComponent } from './work-highlights/work-highlights.component';


@NgModule({
  declarations: [
    WorkPageComponent,
    WorkDetailsPageComponent,
    WorkDescriptionComponent,
    WorkGalleryComponent,
    WorkHighlightsComponent
  ],
  imports: [
    CommonModule,
    WorkPageRoutingModule,
    SharedModule,
  ]
})
export class WorkPageModule { }
