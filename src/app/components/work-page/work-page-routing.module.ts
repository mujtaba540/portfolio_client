import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkPageComponent } from './work-page.component';

const routes: Routes = [
  {path:"",component:WorkPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkPageRoutingModule { }
