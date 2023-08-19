import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkPageComponent } from './work-page.component';
import { WorkDetailsPageComponent } from './work-details-page/work-details-page.component';

const routes: Routes = [
  {path:"",component:WorkPageComponent},
  {path:"details",component:WorkDetailsPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkPageRoutingModule { }
