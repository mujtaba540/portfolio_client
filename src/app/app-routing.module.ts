import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("../app/components/landing-page/landing-page.module").then(m => m.LandingPageModule)
  },
  {
    path: "work",
    loadChildren: () => import("../app/components/work-page/work-page.module").then(m => m.WorkPageModule)
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
