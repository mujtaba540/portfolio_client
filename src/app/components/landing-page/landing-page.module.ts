import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    IntroSectionComponent,
    SkillsSectionComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
